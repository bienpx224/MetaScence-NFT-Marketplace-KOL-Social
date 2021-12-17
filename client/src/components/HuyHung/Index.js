import React, { useState } from "react";

import { useEtherBalance, useEthers } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
import { Button, makeStyles } from "@material-ui/core";
import { BuyNFT } from "./BuyNFT.js";
import { MintNFT } from "./MintNFT.js";
import { ListNFT } from "./ListNFT.js";

const ETH = "0x01BE23585060835E02B77ef475b0Cc51aA1e0709";
const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(4),
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(1),
  },
}));

export function Index() {
  const classes = useStyles();
  const { account, activateBrowserWallet, deactivate } = useEthers();
  const etherBalance = useEtherBalance(account);

  const isConnected = account !== undefined;
  return (
    <div className={classes.container}>
      <div>
        <div>
          {isConnected ? (
            <Button color="primary" variant="contained" onClick={deactivate}>
              Disconnect
            </Button>
          ) : (
            <Button
              color="primary"
              variant="contained"
              onClick={() => activateBrowserWallet(account)}
            >
              Connect
            </Button>
          )}
        </div>
        {account && <p>Account: {account}</p>}
        {etherBalance && <p>Balance: {formatEther(etherBalance)}</p>}

        <BuyNFT />
        <MintNFT />
        <div>
          <ListNFT />
        </div>
      </div>
    </div>
  );
}

export default Index;
