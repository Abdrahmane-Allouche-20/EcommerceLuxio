import type { Metadata } from "next";
import "./globals.css";
import Header from "./header/page";
import { GlobalState } from "@/context";
import { Ubuntu } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const font = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});
export const metadata: Metadata = {
  title: "Luxio",
  description:
    "this is a e-commerce website created by allouche mohamed abderrahmane using next js i hope u like the website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={font.className}>
        <GlobalState>
          <Header />
          {children}
        </GlobalState>
        <ToastContainer position="top-right" autoClose={1500} hideProgressBar />
      </body>
    </html>
  );
}
