import { useEffect, useState } from "react";
import { ethers } from "ethers";

// Components
import Navigation from "./components/Navigation";
import Section from "./components/Section";
import Product from "./components/Product";

// ABIs
import Dappazon from "./abis/Dappazon.json";

// Config
import config from "./config.json";

function App() {
  const loadBlockchainData = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = ethers.utils.getAddress(accounts[0]);

    console.log("loading...");
  };

  useEffect(() => {
    loadBlockchainData();
  }, []);

  return (
    <div>
      <h2>Welcome to Dappazon!</h2>
    </div>
  );
}

export default App;
