// This part is a test
import React, { useState, useEffect } from "react";
import { useEthers, useTokenBalance, useNotifications } from "@usedapp/core";
import { Button, Input } from "@material-ui/core";
import { UseBuyNftToken } from "../../hooks/UseBuyNftToken";
export function BuyForm() {
  const { notifications } = useNotifications();

  const [tokenId, setAmount] = useState(0);
  const handleInputChange = (event) => {
    const newTokenId =
      event.target.value === "" ? "" : Number(event.target.value);
    setAmount(newTokenId);
    console.log(newTokenId);
  };

  const { buyToken, buyTokenState } = UseBuyNftToken();
  const handleBuySubmit = () => {
    return buyToken(tokenId);
  };

  //   useEffect(() => {
  //     if (
  //       notifications.filder(
  //         (notification) =>
  //           notification.type === "transaction.Succeed" &&
  //           notification.transactionName === "Approve Erc721 transfer"
  //       ).length > 0
  //     ) {
  //       console.log("Approve");
  //     }
  //     // if (
  //     //   notifications.filder(
  //     //     (notification) =>
  //     //       notification.type === "transaction.Succeed" &&
  //     //       notification.transactionName === "Approve Erc721 transfer"
  //     //   ).length > 0
  //     // ) {
  //     //   console.log("Approve");
  //     // }
  //   }, [notifications]);
  return (
    <div>
      <br />
      <br />
      <Input onChange={handleInputChange} />
      <br />
      <br />
      <Button
        onClick={handleBuySubmit}
        color="primary"
        variant="contained"
        size="large"
      >
        Buy token
      </Button>
      <br />
      <br />
    </div>
  );
}

export default BuyForm;
