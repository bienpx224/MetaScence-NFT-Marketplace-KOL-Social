import { useEthers, useContractFunction } from "@usedapp/core";
import Market from "../chain-info/contracts/Market.json";
import NFT from "../chain-info/contracts/NFT.json";
import networkMapping from "../chain-info/deployments/map.json";
import { utils, Contract, providers } from "ethers";
import { useState, useEffect } from "react";
export function UseListNftToken() {
  const marketAbi = Market.abi;
  const nftAbi = NFT.abi;
  const nftAddress = networkMapping["4"]["NFT"][0];
  const nftContract = new Contract(nftAddress, nftAbi);

  const marketAddress = networkMapping["4"]["Market"][0];
  const marketContract = new Contract(marketAddress, marketAbi);

  // Approve nft
  const { state: approveTokenState, send: approveTokenSend } =
    useContractFunction(nftContract, "approve", {
      transactionName: "Approve NFT Token",
    });
  // List nft
  const approveAndListToken = (nftTokenId, price) => {
    setListTokenArg(nftAddress, nftTokenId, price);
    return approveTokenSend(marketAddress, nftTokenId);
  };

  const { send: listTokenSend, state: listTokenState } = useContractFunction(
    marketContract,
    "listToken",
    {
      transactionName: "List NFT Token",
    }
  );
  const [listTokenArg, setListTokenArg] = useState(["0", "0"]);
  //useEffect
  useEffect(() => {
    if (approveTokenState.status === "Success") {
      listTokenSend(nftAddress, listTokenArg[0], listTokenArg[1]);
    }
  }, [approveTokenState, listTokenArg[0], listTokenArg[1]]);

  const [state, setState] = useState(approveTokenState);

  useEffect(() => {
    if (approveTokenState.status === "Success") {
      setState(listTokenState);
    } else {
      setState(approveTokenState);
    }
  }, [approveTokenState, listTokenState]);

  return { approveAndListToken, state };
}

export default UseListNftToken;
