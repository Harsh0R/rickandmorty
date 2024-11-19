import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import Navbar from "@/Components/NavBar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rick And Morty",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport1"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="viewport2" content="user-scalable=no" />
        <title>{metadata.title}</title>
      </head>
      <body className={inter.className}>
        <div style={{ touchAction: "manipilation" }}>
          <Navbar />
        </div>

        {children}
      </body>
    </html>
  );
}
