import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/index.scss";
import "../styles/slick.min.css";
import { AsideNav } from "@/uikits/Nav";
import Footer from "@/uikits/footer";
import { Toaster } from "sonner";
import { GoogleTranslate } from "@/pageComponents/others/googleTranslate";
import { AppLoaderContextProvider } from "@/contexts/loader";
import AppLoader from "@/uikits/loaders";
import ThemeManager from "@/pageComponents/others/themeManager";
import { AppThemeContextProvider } from "@/contexts/theme";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "900"],
});

export const metadata: Metadata = {
  title: "Home | Evans Djossouvi",
  applicationName: "Personal Website - Portfolio",
  description:
    "Evans Djossouvi is a Fullstack Developer with expertise in modern web technologies including React.js, Node.js, Next.js, and Capacitor. Specializing in  SaaS applications, Evans creates powerful and scalable solutions for your business needs.",
  icons: "/logo.ico",
  themeColor: "#9C6E5B",
  openGraph: {
    type: "website",
    url: "https://evansdjossouvi.com/",
    siteName: "Evans Djossouvi",
    images: [
      {
        url: "https://evansuchwa.github.io/img-assets/logo-portfolio.PNG",
      },
    ],
  },
  keywords: [
    "Fullstack Developer",
    "Web Development",
    "React.js",
    "Node.js",
    "Next.js",
  ],
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AppThemeContextProvider>
          <Toaster richColors={true} />
          <AppLoaderContextProvider>
            <AppLoader />
            <GoogleTranslate />
            <div className="container">
              <AsideNav />
              <div className="containerVisible">
                {children}
                <Footer />
              </div>
            </div>
            <div className="customCursor"></div>
            <ThemeManager />
          </AppLoaderContextProvider>
        </AppThemeContextProvider>
      </body>
    </html>
  );
}
