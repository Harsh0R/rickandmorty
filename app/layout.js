import "./globals.css";
import Navbar from "@/Components/NavBar/Navbar";
import {
  disableVerticalSwipes,
  isVerticalSwipesEnabled,
} from '@telegram-apps/sdk';


export const metadata = {
  title: "Rick And Morty",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {

  alert("msg => ",disableVerticalSwipes.isAvailable());
  
  if (disableVerticalSwipes.isAvailable()) {
    alert("disableVerticalSwipes is available");
    disableVerticalSwipes();
    isVerticalSwipesEnabled();
  }

  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <title>{metadata.title}</title>
        <meta name="imagetoolbar" content="no" />
        <meta name="viewport" content="user-scalable=no" />
      </head>
      <body>
        <div>
          <Navbar />
          </div>
        {children}
      </body>
    </html>
  );
}
