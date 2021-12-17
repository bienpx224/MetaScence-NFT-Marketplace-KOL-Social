import React, { useState } from "react";
import BuyForm from "./BuyForm.js";
import config from "../../config.json";
import { useEthers } from "@usedapp/core";
import networkMapping from "../../chain-info/deployments/map.json";

import { constants } from "ethers";

export function BuyNFT() {
  const { chainId } = useEthers();
  const nftAddress = chainId
    ? networkMapping["4"]["NFT"][0]
    : constants.AddressZero;

  return <BuyForm token={nftAddress} />;
}

export default BuyNFT;
