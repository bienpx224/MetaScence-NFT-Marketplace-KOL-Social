import React, { useState, useEffect } from "react";
import { useEthers, useTokenBalance, useNotifications } from "@usedapp/core";
import { Button, Input, CircularProgress, Snackbar } from "@material-ui/core";
import { UseListNftToken } from "../../hooks/UseListNftToken";
export function ListForm() {
  const { notifications } = useNotifications();

  const [tokenId, setTokenId] = useState(0);
  const handleInputChange = (event) => {
    const newTokenId =
      event.target.value === "" ? "" : Number(event.target.value);
    setTokenId(newTokenId);
  };

  const [amount, setAmount] = useState(0);
  const handleInputChange2 = (event) => {
    const newAmount =
      event.target.value === "" ? "" : Number(event.target.value);
    setAmount(newAmount);
  };

  const { approveAndListToken, state } = UseListNftToken();
  const handleBuySubmit = () => {
    return approveAndListToken(tokenId, amount);
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
  const [showApprovalSuccess, setShowApprovalSuccess] = useState(false);
  const [showListTokenSuccess, setShowListTokenSuccess] = useState(false);
  const handleCloseSnack = () => {
    setShowApprovalSuccess(false);
    setShowListTokenSuccess(false);
  };
  useEffect(() => {
    if (
      notifications.filter(
        (notification) =>
          notification.type === "transactionSucceed" &&
          notification.transactionName === "Approve ERC20 transfer"
      ).length > 0
    ) {
      setShowApprovalSuccess(true);
      setShowListTokenSuccess(false);
    }
    if (
      notifications.filter(
        (notification) =>
          notification.type === "transactionSucceed" &&
          notification.transactionName === "Stake Tokens"
      ).length > 0
    ) {
      setShowApprovalSuccess(false);
      setShowListTokenSuccess(true);
    }
  }, [notifications, showApprovalSuccess, showListTokenSuccess]);
  return (
    <>
      <div>
        <br />
        <br />
        <Input onChange={handleInputChange} />
        <br />
        <Input onChange={handleInputChange2} />
        <br />
        <br />
        <Button
          onClick={handleBuySubmit}
          color="primary"
          variant="contained"
          size="large"
        >
          List token
        </Button>
      </div>
      <Snackbar
        open={setShowApprovalSuccess}
        autoHideDuration={5000}
        onClose={handleCloseSnack}
      ></Snackbar>
      <Snackbar
        open={setShowListTokenSuccess}
        autoHideDuration={5000}
        onClose={handleCloseSnack}
      ></Snackbar>
    </>
  );
}

export default ListForm;
