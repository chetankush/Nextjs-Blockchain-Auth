"use client"
import React, { useState } from 'react';
import { MetaMaskInpageProvider } from "@metamask/providers";

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
  }
}

const MetaMaskLogin = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [defaultAccount, setDefaultAccount] = useState<string | null>(null);
  const [userBalance, setUserBalance] = useState<number | null>(null);
  const [buttonStatus, setButtonStatus] = useState(false);

  const connectWallet = () => {
    if (window.ethereum) {
      window.ethereum.request({ method: 'eth_requestAccounts' })
        .then((result: string[]) => {
          accountChanged(result[0]);
          console.log(result[0]);
          console.log(result[1]);
          console.log(result[2]);
          setButtonStatus(true);
        })
        .catch((error: any) => {
          setErrorMessage(`Error connecting wallet: ${error.message}`);
        });
    } else {
      setErrorMessage("You should install Metamask");
    }
  };

  const accountChanged = (accountName: string) => {
    setDefaultAccount(accountName);
  };

  


  return (
    <div>
      <button
        className="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        onClick={connectWallet}
      >
        {buttonStatus ? "Connected" : "Connect Wallet"}
      </button>

   
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default MetaMaskLogin;








// {defaultAccount && (
//     <div className="dropdown">
//       {/* Your dropdown content with Metamask details */}
//       <p>Metamask Details:</p>
//       <p className='flex-wrap text-wrap'>Account: {defaultAccount}</p>
      
      
//       {/* Add more details as needed */}
//     </div>
//   )}
