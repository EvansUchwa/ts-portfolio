import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/index.scss";
import "../styles/slick.min.css";
import { AsideNav } from "@/uikits/Nav";
import Footer from "@/uikits/footer";
import { Toaster } from "sonner";
import { GoogleTranslate } from "@/pageComponents/others/googleTranslate";
import Head from "next/head";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "900"],
});

export const metadata: Metadata = {
  title: "Evans Djossouvi-Portfolio",
  description: "DÉVELOPPEUR FULL-STACK JS",
  icons: "/logo.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="keywords"
          content="Evans Djossouvi, Fullstack Developer, Web Development, React.js, Node.js, Next.js"
        />
        <meta property="og:site_name" content="Evans Djossouvi" />
        <meta property="og:url" content="https://evansdjossouvi.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Home | Evans Djossouvi" />
        <meta property="og:image" content="/logo.png" />
        <meta
          property="og:description"
          content="Evans Djossouvi is a Fullstack Developer with expertise in modern web technologies including React.js, Node.js, Next.js, and Capacitor. Specializing in  SaaS applications, Evans creates powerful and scalable solutions for your business needs."
        />
        <meta name="msapplication-TileColor" content="#9C6E5B" />
        <meta name="theme-color" content="#9C6E5B" />
      </Head>
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

        <div className="customCursor"></div>
      </body>
    </html>
  );
}
