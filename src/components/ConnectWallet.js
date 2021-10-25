import React, { useState, useRef } from "react";
import { StoicIdentity } from "ic-stoic-identity";
import "../styles/connectWallet.scss";
import CWalletButton from "./Button";
import {
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Portal,
  ChakraProvider,
} from "@chakra-ui/react";

function ConnectWallet({
  showPopup,
  setShowPopup,
  header = false,
  big,
  userAddress,
  connectWallet,
  connectStoic,
}) {
  return (
    <ChakraProvider>
      <div className="">
        {!userAddress ? (
          <Popover>
            <PopoverTrigger>
              <button className={header ? "btn outlined" : "btn"}>Connect Wallet</button>
            </PopoverTrigger>
            <Portal>
              <PopoverContent className="pop-over">
                <PopoverBody>
                  <Button className="wallet-connect-button" onClick={connectWallet}>
                    <img className="icon-logo" src="/imgs/plug-logo.jpg" /> Connect with
                    Plug
                  </Button>
                  <div className="spacer" />
                  <Button
                    className="wallet-connect-button"
                    onClick={() => {
                      connectStoic(StoicIdentity);
                    }}
                  >
                    <img className="icon-logo" src="/imgs/stoic-logo.png" /> Connect with
                    Stoic
                  </Button>
                </PopoverBody>
              </PopoverContent>
            </Portal>
          </Popover>
        ) : (
          <div className="text-white text-xs font-normal flex flex-col items-center justify-start">
            {header && (
              <p className="pb-1">{`${userAddress.slice(0, 8)}...${userAddress.slice(
                -6
              )}`}</p>
            )}
            <CWalletButton
              onClick={() => {
                setShowPopup(true);
              }}
              text="Mint NFT"
              spcng="px-9"
              icon={false}
              type="filled"
            />
          </div>
        )}
      </div>
    </ChakraProvider>
  );
}

export default ConnectWallet;
