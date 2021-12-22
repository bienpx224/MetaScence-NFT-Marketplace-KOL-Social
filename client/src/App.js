import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import { createBrowserHistory } from "history";
import getWeb3 from './utils/getWeb3'
import connectWeb3Infura from "./utils/connectWeb3Infura";
import { checkValidNetwork, listenEventChangeMetamask, listenContractInfura } from "./utils/listenChangeMetamask";
import { web3_connect, init_contract_nft, init_contract_market, init_contract_infura_market,get_balance } from "./store/actions/indexAction";
import NFT from './contracts/NFT.json'
import Market from './contracts/Market.json'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import 'react-modal-video/css/modal-video.css';
import MarketComponent from "./components/market/Market";
import ListTicketOwned from "./components/market/ListTicketOwned";

const App = () => {

  const hist = createBrowserHistory()

  const dispatch = useDispatch()
  const { balance, account, networkId, isLogin, contract_nft, contract_market, contract_infura } = useSelector((state) => ({
    balance: state.rootReducer.balance,
    account: state.rootReducer.account,
    networkId: state.rootReducer.networkId,
    isLogin: state.rootReducer.isLogin,
    contract_nft: state.rootReducer.contract_nft,
    contract_market: state.rootReducer.contract_market,
    contract_infura_market: state.rootReducer.contract_infura_market
  }));

  useEffect(() => {
    console.warn = () => { };
    // console.log = () => { };
    if (isLogin == false) {
    } else {
      if (contract_nft) {

        // get balanceOf
        contract_nft.methods.balanceOf(account).call({ from: account })
          .then((rs) => {
            console.log("balance MST : ")
            console.log(rs)
            dispatch(get_balance({balance: rs}))
          })
      }

    }

  }, [account, contract_nft])

  useEffect(() => {
    connectMetamask()
  })

  async function connectMetamask() {
    const web3 = await getWeb3();
    dispatch(web3_connect({ web3 }))

    const accounts = await web3.eth.getAccounts();
    const _networkId = await web3.eth.net.getId() + '';


    checkValidNetwork(accounts, _networkId, dispatch)
    listenEventChangeMetamask(web3, dispatch)

    // Get the contract instance for metamask
    const contract_nft = await new web3.eth.Contract(
      NFT.abi,
      NFT.address,
    );
    const contract_market = await new web3.eth.Contract(
      Market.abi,
      Market.address,
    );
    // console.log("=========  contract_nft")
    // console.log(contract_nft)
    // console.log("=========  contract_market")
    // console.log(contract_market)
    // Get the contract instance for infura listen emit
    const web3_infura = connectWeb3Infura();
    const contract_infura_market = await new web3_infura.eth.Contract(
      Market.abi, Market.address
    )

    // console.log("=========  INFURA")
    // console.log(contract_infura_market)
    listenContractInfura(contract_infura_market)
    dispatch(init_contract_nft({ contract_nft }))
    dispatch(init_contract_market({ contract_market }))
    dispatch(init_contract_infura_market({ contract_infura_market }))

  }

  return (
    <BrowserRouter history={hist}>
      <ReactNotification />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/market" element={<MarketComponent />} />
        <Route path="/nft" element={<ListTicketOwned />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default React.memo(App);