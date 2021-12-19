import { metamask_connect } from '../store/actions/indexAction'
import { showNotification } from "./util";
import { NETWORK_ID } from './constant';

export const listenContractInfura = (contract_infura) => {

  contract_infura.events.Listed({ filter: {}, fromBlock: "latest" }, function (err, event) {
    if (err) {
      console.log("INFURA Event error: " + err)
    } else {
      console.log("INFURA Emit:")
      console.log(event)

    }
  })
  contract_infura.events.Sale({ filter: {}, fromBlock: "latest" }, function (err, event) {
    if (err) {
      console.log("INFURA Event error: " + err)
    } else {
      console.log("INFURA Emit:")
      console.log(event)

    }
  })
  contract_infura.events.Cancel({ filter: {}, fromBlock: "latest" }, function (err, event) {
    if (err) {
      console.log("INFURA Event error: " + err)
    } else {
      console.log("INFURA Emit:")
      console.log(event)

    }
  })
}

export const listenEventChangeMetamask = (web3, dispatch) => {
  window.ethereum.on("accountsChanged", async function (accounts) {

    const networkId = await web3.eth.net.getId() + '';
    if (networkId !== NETWORK_ID) {
      console.log("Change to network: " + typeof networkId + " wrong : need to " + typeof NETWORK_ID)
      dispatch(metamask_connect({ account: "", networkId, isLogin: false }))
      showNotification("warning", "Login failed", "Please change to networkId " + NETWORK_ID)
    }
    else {
      if (accounts && accounts[0]) {
        let account = accounts[0]
        dispatch(metamask_connect({ account, networkId, isLogin: true }))
        showNotification("success", "Login success", "" + account)
      }
      else {
        dispatch(metamask_connect({ account: "", networkId, isLogin: false }))
        showNotification("warning", "Login failed", "Please connect your account ")
      }

    }
  });

  window.ethereum.on("networkChanged", async function (networkId) {
    let nameNet = "Mainet ETH";
    if (NETWORK_ID == '4')
      nameNet = "Rinkeby"
    else if (NETWORK_ID == '5777')
      nameNet = "Ganache"
    else
      nameNet = NETWORK_ID
    const accounts = await web3.eth.getAccounts();
    console.log("NETWORK :" + networkId + " && Address: " + accounts[0])
    if (networkId !== NETWORK_ID) {
      console.log("Change to network: " + typeof networkId + " wrong : need to " + typeof NETWORK_ID)
      dispatch(metamask_connect({ account: "", networkId, isLogin: false }))
      showNotification("warning", "Login failed", "Please change to " + nameNet)
    }
    else {
      if (accounts && accounts[0]) {
        let account = accounts[0]
        dispatch(metamask_connect({ account, networkId, isLogin: true }))
        showNotification("success", "Login success", "" + account)
      }
      else {
        dispatch(metamask_connect({ account: "", networkId, isLogin: false }))
        showNotification("warning", "Login failed", "Please connect your account ")
      }
    }

  })
}


export function checkValidNetwork(accounts, networkId, dispatch) {
  let nameNet = "Mainet ETH";
  if (NETWORK_ID == '4')
    nameNet = "Rinkeby"
  else if (NETWORK_ID == '5777')
    nameNet = "Ganache"
  else
    nameNet = NETWORK_ID
  console.log("hihi")
  if (networkId !== NETWORK_ID) //must be on mainnet or Testnet
  {
    dispatch(metamask_connect({ account: "", networkId, isLogin: false }))
    showNotification("warning", "Login failed", "Please change to " + nameNet)
    return false;
  }
  else {
    if (accounts && accounts[0]) {
      let account = accounts[0];
      dispatch(metamask_connect({ account, networkId, isLogin: true }))
      showNotification("success", "Login success", "" + account)
      return true;
    }
    else {
      dispatch(metamask_connect({ account: "", networkId, isLogin: false }))
      showNotification("warning", "Login failed", "Please connect your account ")
      return false
    }

  }
}

export function isLoginMetamask(account, networkId) {
  if (networkId !== NETWORK_ID) //must be on mainnet or Testnet
  {
    return false;
  }
  else {
    //Do this check to detect if the user disconnected their wallet from the Dapp
    if (account && account.length >= 5) {
      return true;
    }
    else {
      return false;
    }

  }
}