import React from "react";
import Style from "./LoadingPage.module.css";
import Image from "next/image";
import images from "../../img";

const LoadingPage = () => {
  return (
    <div className={Style.loadingContainer}>
      <p>Loading...</p>
      <Image className={Style.loader} src={images.loader} width={150} height={150} alt="Logo" />
    </div>
  );
};

export default LoadingPage;
