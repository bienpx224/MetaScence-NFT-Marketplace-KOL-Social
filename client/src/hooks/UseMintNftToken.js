import { useEthers, useContractFunction } from "@usedapp/core";
import { abi } from "../chain-info/contracts/NFT.json";
import { utils, Contract, providers } from "ethers";
export function UseMintNftToken(TokenAddress) {
  const { account } = useEthers();
  const nftContract = new Contract(TokenAddress, abi);

  // Approve nft
  const { state: mintTokenState, send: mintTokenSend } = useContractFunction(
    nftContract,
    "mint",
    {
      transactionName: "mint NFT Token",
    }
  );
  const mintToken = (name, amount) => {
    return mintTokenSend(account, name, amount);
  };

  return { mintToken, mintTokenState };
}

export default UseMintNftToken;
