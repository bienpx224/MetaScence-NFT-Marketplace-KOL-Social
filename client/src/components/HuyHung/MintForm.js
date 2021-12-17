import React, { useState, useEffect } from "react";
import { useEthers, useTokenBalance, useNotifications } from "@usedapp/core";
import { Button, Input } from "@material-ui/core";
import { UseMintNftToken } from "../../hooks/UseMintNftToken";
export function MintForm({ tokenAddress }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const handleInputChange = (event) => {
    const newName = event.target.value === "" ? "" : String(event.target.value);
    setName(newName);
  };
  const handleInputChange2 = (event) => {
    const newAmount =
      event.target.value === "" ? "" : Number(event.target.value);
    setAmount(newAmount);
  };

  const { mintToken, MintTokenState } = UseMintNftToken(tokenAddress);
  const handleMintSubmit = () => {
    return mintToken(name, amount);
  };

  return (
    <div>
      <Input placeholder="name NFT" onChange={handleInputChange} />
      <br />
      <br />
      <Input placeholder="amount" onChange={handleInputChange2} />
      <br />
      <br />
      <Button
        onClick={handleMintSubmit}
        color="primary"
        variant="contained"
        size="large"
      >
        Mint token
      </Button>
      <br />
      <br />
    </div>
  );
}

export default MintForm;
