import { NextRequest, NextResponse } from "next/server";
import { Client } from "node-mailjet";

const mjApiKeyPublic = "7e3e9a909d84544c94e9a70466aed3ef";
const mjApiKeyPrivate = "60373eee75411c9ee9664082883c7e28";
export async function POST(req: NextRequest) {
    const mailjet = Client.apiConnect(mjApiKeyPublic, mjApiKeyPrivate);
    const data = await req.json();
    try {
        const request = await mailjet.post("send").request({
            FromEmail: "johnsonevans686@gmail.com",
            FromName: "BNEX",
            Subject: "Message de client depuis le portfolio!",
            "Text-part": data.message,
            "Html-part": "<p>" + data.message + "</p>!",
            Recipients: [{ Email: "johnsonevans686@gmail.com" }],
        });
        return NextResponse.json(data);
    } catch (error) {
        console.log(error);
        return NextResponse.json(null, { status: 400 });
    }
}