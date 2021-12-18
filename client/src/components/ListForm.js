import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';

export function ListForm() {

  const [tokenId, setTokenId] = useState(0);    
  const { contract_market,contract_nft,  account, isLogin, web3 } = useSelector((state) => ({
    contract_market: state.rootReducer.contract_market,
    contract_nft: state.rootReducer.contract_nft,
    account: state.rootReducer.account,
    isLogin: state.rootReducer.isLogin,
    web3: state.rootReducer.web3
  }))
  const handleInputChangeTokenId = (event) => {
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

  const handleBuySubmit = () => {
        if(isLogin && contract_market){
            console.log("handle List :"+tokenId + " && "+amount)
            var price = web3.utils.toWei(amount.toString(), "Ether");
            console.log(price)
            contract_market.methods.listToken(contract_nft._address, tokenId, price).call()
            .then( (rs)=>{
                console.log(rs)
            })
        }
  };


  return (
    <>
      <div>
        <br />
        <br />
        <input placeholder="tokenId" onChange={handleInputChangeTokenId} />
        <br />
        <input placeholder="Price" onChange={handleInputChange2} />
        <br />
        <br />
        <button
          onClick={handleBuySubmit}
          color="primary"
          variant="contained"
          size="large"
        >
          List token
        </button>
      </div>
    </>
  );
}

export default ListForm;
