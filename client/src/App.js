import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import { createBrowserHistory } from "history";
import getWeb3 from './utils/getWeb3'
import connectWeb3Infura from "./utils/connectWeb3Infura";
import { checkValidNetwork, listenEventChangeMetamask } from "./utils/listenChangeMetamask";
import { web3_connect, init_contract, init_contract_infura } from "./store/actions/indexAction";
import OnepiToken from './contract/OnepiToken.json'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'


const App = () => {

  const hist = createBrowserHistory()

  const dispatch = useDispatch()
  const { balance, account, networkId, isLogin, web3 } = useSelector((state) => ({
    balance: state.rootReducer.balance,
    account: state.rootReducer.account,
    networkId: state.rootReducer.networkId,
    isLogin: state.rootReducer.isLogin,
    web3: state.rootReducer.web3
  }));
  const [amount, setAmount] = useState('');
  const [receiver, setReceiver] = useState('');

  useEffect(() => {
    console.warn = () => { };
    if (isLogin == false) {
    } else {
      // Get the contract instance for metamask
      const deployedNetwork = OnepiToken.networks[networkId];  // 
      const contract = new web3.eth.Contract(
        OnepiToken.abi,
        deployedNetwork && deployedNetwork.address,
      );
      dispatch(init_contract({ contract }))

      // Get the contract instance for infura listen emit
      const web3_infura = connectWeb3Infura();
      const contract_infura = new web3_infura.eth.Contract(
        OnepiToken.abi, deployedNetwork && deployedNetwork.address
      )
      dispatch(init_contract_infura({contract_infura}))
    }
    return () => { console.log("Unmouting component...") }
  }, [isLogin])

  useEffect(() => {
    // connectMetamask()
  }, [])

  async function connectMetamask() {
    console.log("connnectMetamask")
    const web3 = await getWeb3();
    window.ethereum.enable();
    dispatch(web3_connect({ web3 }))
    const accounts = await web3.eth.getAccounts();
    const _networkId = await web3.eth.net.getId() + '';


    checkValidNetwork(accounts, _networkId, dispatch)
    listenEventChangeMetamask(web3, dispatch)

  }

  return (
    <BrowserRouter history={hist}>
      <ReactNotification />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default React.memo(App);