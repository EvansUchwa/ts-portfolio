import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/index.scss";
import "../styles/slick.min.css";
import { AsideNav } from "@/uikits/Nav";
import Footer from "@/uikits/footer";
import { Toaster } from "sonner";
import {
  GoogleTranslate,
  getPrefLangCookie,
} from "@/pageComponents/others/googleTranslate";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "900"],
});

export const metadata: Metadata = {
  title: "Evans Djossouvi-Portfolio",
  description: "DÉVELOPPEUR FULL-STACK JS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Toaster richColors={true} />
        <GoogleTranslate />
        <div className="container">
          <AsideNav />
          <div className="containerVisible">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
