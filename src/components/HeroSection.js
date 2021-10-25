import React from "react";
import "../styles/hero-section.scss";
import WelcomeTo from "./WelcomeTo";

export default function HeroSection({
  showPopup,
  setShowPopup,
  userAddress,
  connectStoic,
  connectWallet,
}) {
  return (
    <div
      id="hero-section"
      className="relative overflow-hidden flex flex-col lg:flex-row items-center lg:justify-end"
    >
      <img
        className="absolute w-full h-full top-0 left-0 object-cover opacity-50"
        src="/imgs/bg.png"
        alt="bg"
      />
      <div className="my-container relative z-10  lg:flex lg:justify-end">
        <WelcomeTo
          showPopup={showPopup}
          setShowPopup={setShowPopup}
          connectStoic={connectStoic}
          connectWallet={connectWallet}
          userAddress={userAddress}
        />
        <img className="big-frank " src="/imgs/franken-big.png" alt="big ham" />
      </div>
    </div>
  );
}
