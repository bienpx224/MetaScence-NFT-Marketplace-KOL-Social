import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import reducer from "./store/reducers/reducer";
import { Provider } from "react-redux";
import { Rinkeby, Kovan, DAppProvider } from "@usedapp/core";

const store = createStore(reducer);

const provider =
  "https://speedy-nodes-nyc.moralis.io/9485086d85846cac9a1e6060/eth/rinkeby";

const localProvider = "http://127.0.0.1:7545";

const config = {
  readOnlyChainId: Rinkeby.chainID,
  readOnlyUrls: {
    [Rinkeby.chainID]: provider,
  },
  suportChains: [Rinkeby.chainID, Kovan.chainID],
  notifications: {
    expirationPeriod: 1000,
    checkInterval: 1000,
  },
};

ReactDOM.render(
  <Provider store={store}>
    <DAppProvider config={config}>
      <App />
    </DAppProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
