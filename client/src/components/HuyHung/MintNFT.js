import React, { useState } from "react";
import MintForm from "./MintForm.js";
import config from "../../config.json";
import { useEthers } from "@usedapp/core";
import networkMapping from "../../chain-info/deployments/map.json";

import { constants } from "ethers";

export function MintNFT() {
  const { chainId } = useEthers();
  const nftAddress = chainId
    ? networkMapping["4"]["NFT"][0]
    : constants.AddressZero;
  console.log("nftAddress: "+ nftAddress)
  return <MintForm tokenAddress={nftAddress} />;
}

export default MintNFT;
