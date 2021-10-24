import React, { useState, useEffect } from "react";
import FAQ from "./components/FAQ";
// import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import EndlessHamsters from "./components/EndlessHamsters";
import Team from "./components/Team";
import Footer from "./components/Footer";
import ModalMenu from "./components/ModalMenu";
import ComingSoonPopUp from "./components/ComingSoonPopUp";

import AboutHamsters from "./components/AboutHamsters";
import Roadmap from "./components/Roadmap";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const handleScroll = (e) => {
    if (e.target.scrollingElement.scrollTop < 10) setScrolled(false);
    if (e.target.scrollingElement.scrollTop >= 10) setScrolled(true);
  };
  //scrolling listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  //connect wallet functions
  const [userAddress, setUserAddress] = useState("");
  const connectWallet = async (e) => {
    if (window) {
      // Canister Ids
      const nnsCanisterId = "qoctq-giaaa-aaaaa-aaaea-cai";

      // Whitelist
      const whitelist = [nnsCanisterId];

      // Make the request
      const isConnected =
        window &&
        (await window.ic.plug.requestConnect({
          whitelist,
        }));

      // Get the user principal id
      const principalId = window && (await window.ic.plug.agent.getPrincipal());

      setUserAddress(principalId.toText());

      console.log(`Plug's user principal Id is ${principalId}`);
    }
  };

  const connectStoic = async (StoicIdentity) => {
    if (window) {
      await StoicIdentity.load();
      let identity = await StoicIdentity.connect();
      setUserAddress(identity.getPrincipal().toText());
      console.log(identity.getPrincipal().toText());
    }
  };
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className=" relative overflow-hidden">
      <div id="top"></div>

      <div className="w-full h-full max-h-[854px] lg:pb-10 relative  overflow-hidden">
        {/* <Header
          showPopup={showPopup}
          setShowPopup={setShowPopup}
          connectStoic={connectStoic}
          connectWallet={connectWallet}
          userAddress={userAddress}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          scrolled={scrolled}
        /> */}
        <div className="w-full relative z-[1]">
          {/* <HeroSection
            showPopup={showPopup}
            setShowPopup={setShowPopup}
            connectStoic={connectStoic}
            connectWallet={connectWallet}
            userAddress={userAddress}
          /> */}
        </div>
      </div>
      <AboutHamsters />
      <EndlessHamsters />
      <Roadmap />
      <Team />

      <FAQ />

      {/* <Footer
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        connectStoic={connectStoic}
        connectWallet={connectWallet}
        userAddress={userAddress}
      /> */}

      <ComingSoonPopUp showPopup={showPopup} setShowPopup={setShowPopup} />
      <ModalMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  );
}
