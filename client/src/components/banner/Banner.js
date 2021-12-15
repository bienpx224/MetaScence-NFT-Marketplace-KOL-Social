import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MeteorAnim from './MeteorAnim';
import { showNotification } from '../../utils/util';

const Banner = () => {

  const { account, isLogin, web3, contract } = useSelector((state) => ({
    account: state.rootReducer.account,
    isLogin: state.rootReducer.isLogin,
    web3: state.rootReducer.web3,
    contract: state.rootReducer.contract
  }));

  useEffect(() => {
  }, [account, isLogin, contract])

  const showAddress = (message) => {
    // console.log(message)  // showAddress(contract ? contract._address : "Không có")
    showNotification("info", "Address ", ""+message)
  }

  const clickEnterApp = async ()=>{
      contract.methods.getOwner().call({from:account}, (err,data)=>{
        console.log("getOwner: "+ data)

      })
      
  }

  const btnEnterApp = ()=>{
    if(isLogin){
      return <a href="#" className="cmn-btn enter-app btn-green" onClick={()=>{clickEnterApp()}}
        data-i18n="banner.enter">ENTER GAME<i className="fas fa-arrow-right" /></a>;
    }else{
      return <a href="#" className="cmn-btn enter-app" data-i18n="banner.enter">NEED LOGIN<i className="fas fa-arrow-right" /></a>;
    }
  }
  return (
    <section className="banner-section bg bg_img" data-background="images/banner-bg.png">
      <MeteorAnim />
      <div className="container d-flex align-content-center align-items-center">
        <div className="row">
          <div className="col-12">
            <div className="banner-content">
              <h2 className="title mb-30">
                <span className="text-primary">meta</span><br />
                <div data-i18n="banner.title" />
              </h2>
              <h5 className="text-white">
                meta address Smart contract
              </h5>
              <div className="input-group copy-contract">
                <input id="zoon-address" onClick={()=>{showAddress(contract._address ? contract._address : "Không có")}} type="button" className="form-control" defaultValue={contract ? contract._address : ""} readOnly />
                <div className="input-group-append">
                  <button id="copyaddress" className="btn btn-outline-secondary" type="button" data-clipboard-target="#zoon-address">
                    <i className="fas fa-copy text-white" />
                  </button>
                </div>
              </div>
              <a href="https://bscscan.com/address/0x9D173E6c594f479B4d47001F8E6A95A7aDDa42bC" target="_blank" className="text-yellow">
                <div data-i18n="banner.check" />
              </a>
              <h5 className="text-white mt-3">
                Your address Metamask
              </h5>
              <div className="input-group copy-contract">
                <input id="yag-address" onClick={()=>{showAddress(account ? account : "Không có")}} type="button" className="form-control" defaultValue={account ? account : ""} readOnly />
                <div className="input-group-append">
                  <button id="copyaddress" className="btn btn-outline-secondary" type="button" data-clipboard-target="#yag-address">
                    <i className="fas fa-copy text-white" />
                  </button>
                </div>
              </div>
              <a href="https://bscscan.com/address/0x2722c9db0Fc6818DC9DD3A01254Afc3804438b64" target="_blank" className="text-yellow">
                <div data-i18n="banner.check" />
              </a>
              <div className="banner-btn-area">
                <div className="dropdown show">
                  <a className="cmn-btn-border dropdown-toggle ml-0" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span>Buy ZOON - YAG</span>
                  </a>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a className="dropdown-item" href="https://exchange.biswap.org/#/swap?outputCurrency=0x9D173E6c594f479B4d47001F8E6A95A7aDDa42bC" target="_blank">
                      Buy ZOON
                    </a>
                    <a className="dropdown-item" href="https://pancakeswap.finance/swap?inputCurrency=BNB&outputCurrency=0x2722c9db0Fc6818DC9DD3A01254Afc3804438b64" target="_blank">
                      BUY YAG
                    </a>
                  </div>
                </div>
                <div className="dropdown show">
                  <a className="cmn-btn-border dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span data-i18n="banner.docs" />
                  </a>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a className="dropdown-item" href="https://docs.meta.io" target="_blank">ENG</a>
                    <a className="dropdown-item" href="https://docs-cn.meta.io" target="_blank">Chinese</a>
                  </div>
                </div>
                <div className="banner-btn-area mb-5">
                  {btnEnterApp()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

}

export default React.memo(Banner);  // Sử dụng memo khi mà trang thường xuyên bị re-render những thành phần ko cần thiết.
// React.memo chỉ có thể xác định việc rerender dựa trên sự thay đổi của props
