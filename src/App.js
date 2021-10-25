import React, { useState, useEffect } from "react";
import FAQ from "./components/FAQ";
import "./styles/common.scss";
import HeroSection from "./components/HeroSection";
import EndlessHamsters from "./components/EndlessHamsters";
import Team from "./components/Team";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ModalMenu from "./components/ModalMenu";
import ComingSoonPopUp from "./components/ComingSoonPopUp";

import AboutHamsters from "./components/AboutHamsters";
import Roadmap from "./components/Roadmap";
import Ghost from "./components/Ghost";
import Web from "./components/Web";

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
    <div className=" relative overflow-hidden app">
      <div id="top"></div>
      <Ghost />

      <Header
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        connectStoic={connectStoic}
        connectWallet={connectWallet}
        userAddress={userAddress}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        scrolled={scrolled}
      />

      <HeroSection
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        connectStoic={connectStoic}
        connectWallet={connectWallet}
        userAddress={userAddress}
      />

      <AboutHamsters />
      <div className="relative">
        <EndlessHamsters />
        <Web />
      </div>
      <Roadmap />
      <Team />

      <FAQ />

      <Footer
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        connectStoic={connectStoic}
        connectWallet={connectWallet}
        userAddress={userAddress}
      />

      <ComingSoonPopUp showPopup={showPopup} setShowPopup={setShowPopup} />
      <ModalMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  );
}
