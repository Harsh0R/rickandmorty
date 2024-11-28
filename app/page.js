"use client";
import { useQRCode } from "next-qrcode";
import Charactercards from "@/Components/CharacterCards/Charactercards";

export default function Home() {
  const { Canvas } = useQRCode();

  return (
    <div>
      {/* <Canvas
        text={"https://t.me/idoge360_bot/idogebeta?startapp=1178729241&startApp=1178729241"}
        options={{
          errorCorrectionLevel: "M",
          margin: 3,
          scale: 4,
          width: 200,
          color: {
            dark: "#010599FF",
            light: "#FFBF60FF",
          },
        }}
      /> */}
      {/* <a href="" rel="nofollow">
        <img
          alt="banner"
          src="https://landings-cdn.adsterratech.com/referralBanners/gif/120x60_adsterra_reff.gif"
        />
      </a> */}

      <Charactercards />
    </div>
  );
}
