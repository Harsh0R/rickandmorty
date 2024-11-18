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
      <Head>
        {/* Include meta tags and title */}
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=0.99, maximum-scale=0.99, user-scalable=no"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <title>{metadata.title}</title>
      </Head>
      <body className={inter.className}>
        {/* Render the Navbar component */}
        <div style={{ touchAction: 'manipulation' }} >
          <Navbar />
        </div>

        {/* Render the page content */}
        {children}
      </body>
    </html>
  );
}
