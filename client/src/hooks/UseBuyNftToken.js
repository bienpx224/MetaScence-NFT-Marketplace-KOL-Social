import { useEthers, useContractFunction } from "@usedapp/core";
import { abi } from "../chain-info/contracts/Market.json";
import networkMapping from "../chain-info/deployments/map.json";
import { utils, Contract, providers } from "ethers";
export function UseBuyNftToken() {
  let provider = new providers.JsonRpcProvider();

  let signer = provider.getSigner();

  const marketAddress = networkMapping["4"]["Market"][0];
  const marketContract = new Contract(marketAddress, abi, signer);

  // Approve nft
  const { state: buyTokenState, send: buyTokenSend } = useContractFunction(
    marketContract,
    "buyToken",
    {
      transactionName: "Buy NFT Token",
    }
  );
  const buyToken = (nftTokenId) => {
    return buyTokenSend(marketAddress, nftTokenId);
  };

  return { buyToken, buyTokenState };
}

export default UseBuyNftToken;
