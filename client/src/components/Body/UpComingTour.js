
import React, { useEffect, useState } from 'react';
import { showNotification } from '../../utils/util';
import ModalVideo from 'react-modal-video'
import { useSelector, useDispatch } from 'react-redux';
import { get_balance } from '../../store/actions/indexAction';

const UpComingTour = () => {
  const dispatch = useDispatch()
  const [isOpen, setOpen] = useState(false)
  const [listTicket, setListTicket] = useState()
  const { contract_market, contract_nft, account, isLogin, balance, web3 } = useSelector((state) => ({
    contract_market: state.rootReducer.contract_market,
    contract_nft: state.rootReducer.contract_nft,
    account: state.rootReducer.account,
    isLogin: state.rootReducer.isLogin,
    balance: state.rootReducer.balance,
    web3: state.rootReducer.web3
  }))

  useEffect(() => {
    if (contract_market) {
      contract_market.methods.getArrListing().call({ from: account })
        .then((data) => {
          console.log(data)
          let data2 = [];
          for(var i=0; i<= data.length -1 ; i++){
            if(data[i].seller != "0x0000000000000000000000000000000000000000"){
                data2.push(data[i])
            }
          }
          console.log(data2)
          setListTicket(data2)
        })
    } else {

    }

  }, [contract_market, balance])

  const buySuccess = ()=>{
    dispatch(get_balance({balance: balance+1}))
  }

  const onClickBuy = async (tokenId, price) => {
    if (isLogin) {
      if (contract_market && contract_nft) {
        showNotification("info", "Processing", "Waiting confirm transaction")
        // var priceToWei = web3.utils.toWei(price.toString(), "Ether");
        // console.log(priceToWei)
        contract_market.methods.buyToken(tokenId).send({ from: account, value: price })
          .on('transactionHash', function (hash) {
            console.log("transactionHash")
          })
          .on('confirmation', function (confirmationNumber, receipt) {
            console.log("confirmation")
          })
          .on('receipt', function (receipt) {
            // receipt example
            console.log("receipt")
            console.log(receipt);
            buySuccess()

          })
          .on('error', function (error, receipt) { // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
            console.log("onError")
          });
      } else {
        showNotification("warning", "Opps!", "System is under maintenance")
      }
    } else {
      showNotification("warning", "Opps!", "You need connect metamask!")
    }
  }
  const ticket1 = () => {
    if (listTicket && listTicket[1]) {
      if (listTicket[1].seller != account && balance && balance == 0) {
        let priceEth = web3.utils.fromWei(listTicket[1].price.toString(), "Ether")
        return (
          <div className="col-12 col-lg-5 col-md-5 text-md-right">
            <a className="btn-s uppercase btn btn-primary with-ico border-4"
              onClick={() => { onClickBuy(listTicket[1].tokenId, listTicket[1].price) }}><i className="icon-ticket" />{priceEth} ETH</a>
            <a className="btn-s uppercase btn btn-primary with-ico"
              onClick={() => { onClickBuy(listTicket[1].tokenId, listTicket[1].price) }}><i className="icon-cart" />Buy Ticket</a>
          </div>

        )
      } else {
        return (
          <div className="col-12 col-lg-5 col-md-5 text-md-right">
            <a className="btn-s uppercase btn btn-primary with-ico border-2" href="#"><i className="icon-ticket" />Owned {balance} Ticket</a>
            <a className="btn-s uppercase btn btn-primary with-ico" ><i className="icon-cd-2" />Comming soon</a>
          </div>
        )
      }
    } else {
      return (
        <div className="col-12 col-lg-5 col-md-5 text-md-right">
          <a className="btn-s uppercase btn btn-primary with-ico border-4" href="#"><i className="icon-ticket" /></a>
          <a className="btn-s uppercase btn btn-primary with-ico" ><i className="icon-shop" />Sale Ticket Soon</a>
        </div>
      )
    }
  }


  return (

    <section id="tour" className="tour  main bg-secondary">
      <ModalVideo channel='custom' autoplay isOpen={isOpen} url="img/meta/video2.mp4"
        onClose={() => setOpen(false)} />
      {/*Container*/}
      <div className="container">
        {/*Row*/}
        <div className="row justify-content-center ">
          <div className="col-12 col-md-10 col-lg-9">
            <div className="block-content  gap-one-bottom-md text-center">
              <div className="block-title ">
                <h1 className="uppercase">Upcoming tours</h1>
              </div>
            </div>
          </div>
        </div>
        {/*End row*/}
      </div>
      {/*End container*/}
      {/*Container*/}
      <div className="container">
        {/*Row*/}
        <div className="row justify-content-center ">
          <div className="col-12 col-lg-8 col-md-10">

            <ul className="block-tab">
              {/*Tab*/}
              <li className="active ">
                <div className="block-content text-center">
                  <div className="block-video">
                    <img src="img/8.jpg" className="background-img mb-0" alt="" />
                    <a className="video-play-but popup-youtube" onClick={() => setOpen(true)} />
                    <div className="embed-responsive embed-responsive-16by9">
                    </div>
                  </div>
                  <p className=" mt-3"><span className="opc-70">The Big Tour 2021 -</span> <a className="link" href="#"> Ready for all</a> </p>
                </div>
                <div className="block-content gap-one-top-sm text-left">
                  <div className="block-content ">
                    <div className="row">
                      <div className="col-lg-3 col-md-3">
                        <h4 className="switch-fot">14 Mar</h4>
                      </div>
                      <div className="col-lg-4 col-md-4">
                        <h6 className="mb-0 opc-70 uppercase">On Mars</h6>
                        <span>Taylor Swift </span>
                      </div>
                      {ticket1()}
                    </div>
                  </div>
                  <hr />

                  <hr />
                </div>
              </li>

            </ul>
          </div>

        </div>
        {/*End row*/}
      </div>
      {/*End container*/}
    </section>
  )
}
export default UpComingTour