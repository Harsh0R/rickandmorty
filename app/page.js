"use client";
import { useQRCode } from "next-qrcode";
import Charactercards from "@/Components/CharacterCards/Charactercards";
import { disableVerticalSwipes, isVerticalSwipesEnabled } from "@telegram-apps/sdk";

export default function Home() {
  const { Canvas } = useQRCode();

  if (disableVerticalSwipes.isAvailable()) {
    alert("disableVerticalSwipes is available");
    disableVerticalSwipes();
    isVerticalSwipesEnabled();
  }


  return (
    <div style="transform: scale(1) translateZ(0px);opacity: 1;">
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
      <Charactercards />
    </div>
  );
}
