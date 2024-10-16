import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/common/Header";

export const metadata: Metadata = {
  title: "Under reconstruction",
  description: "LTMed OU website is currently under reconstruction",
};

const gilroy = localFont({
  src: [
    { path: "./fonts/Gilroy-Black.woff", weight: "900", style: "normal" },
    { path: "./fonts/Gilroy-BlackItalic.woff", weight: "900", style: "italic" },
    { path: "./fonts/Gilroy-Bold.woff", weight: "700", style: "normal" },
    { path: "./fonts/Gilroy-BoldItalic.woff", weight: "700", style: "italic" },
    { path: "./fonts/Gilroy-Extrabold.woff", weight: "800", style: "normal" },
    { path: "./fonts/Gilroy-ExtraboldItalic.woff", weight: "800", style: "italic" },
    { path: "./fonts/Gilroy-Heavy.woff", weight: "900", style: "normal" },
    { path: "./fonts/Gilroy-HeavyItalic.woff", weight: "900", style: "italic" },
    { path: "./fonts/Gilroy-Light.woff", weight: "300", style: "normal" },
    { path: "./fonts/Gilroy-LightItalic.woff", weight: "300", style: "italic" },
    { path: "./fonts/Gilroy-Medium.woff", weight: "500", style: "normal" },
    { path: "./fonts/Gilroy-MediumItalic.woff", weight: "500", style: "italic" },
    { path: "./fonts/Gilroy-Regular.woff", weight: "400", style: "normal" },
    { path: "./fonts/Gilroy-RegularItalic.woff", weight: "400", style: "italic" },
    { path: "./fonts/Gilroy-Semibold.woff", weight: "600", style: "normal" },
    { path: "./fonts/Gilroy-SemiboldItalic.woff", weight: "600", style: "italic" },
    { path: "./fonts/Gilroy-Thin.woff", weight: "100", style: "normal" },
    { path: "./fonts/Gilroy-ThinItalic.woff", weight: "100", style: "italic" },
    { path: "./fonts/Gilroy-UltraLight.woff", weight: "200", style: "normal" },
    { path: "./fonts/Gilroy-UltraLightItalic.woff", weight: "200", style: "italic" },
  ],
  variable: "--font-gilroy",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gilroy.variable} antialiased flex flex-col items-center`}
      >
        <div className='max-w-[83rem] mx-6'>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}

