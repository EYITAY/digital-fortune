import type { Metadata } from "next";
import { Space_Grotesk} from "next/font/google";
import "./globals.css";

const font  = Space_Grotesk({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "DF 500| Digital Bussiness Designe & Development Studio",
  description: "All You Need to Build A Digital Business in the USA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className} >{children}</body>
    </html>
  );
}
