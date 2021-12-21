import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { showNotification } from '../../utils/util';

const Ticket = (props) => {
    useEffect(() => {
        console.log(props)
    })
    const { contract_market, contract_nft, account, isLogin, balance, web3 } = useSelector((state) => ({
        contract_market: state.rootReducer.contract_market,
        contract_nft: state.rootReducer.contract_nft,
        account: state.rootReducer.account,
        isLogin: state.rootReducer.isLogin,
        balance: state.rootReducer.balance,
        web3: state.rootReducer.web3
    }))

    const buySuccess = () => {
        window.redirect = "/nft"
    }
    const onClickCancel = async () => {
        if (isLogin) {
            if (contract_market && contract_nft) {
                showNotification("info", "Processing", "Waiting confirm transaction")
                // var priceToWei = web3.utils.toWei(price.toString(), "Ether");
                // console.log(priceToWei)
                contract_market.methods.Mcancel(props.t.tokenId).send({ from: account })
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
                        console.log(error)
                    });
            } else {
                showNotification("warning", "Opps!", "System is under maintenance")
            }
        } else {
            showNotification("warning", "Opps!", "You need connect metamask!")
        }
    }
    const onClickBuy = async () => {
        if (isLogin) {
            if (contract_market && contract_nft) {
                showNotification("info", "Processing", "Waiting confirm transaction")
                // var priceToWei = web3.utils.toWei(props.t.price.toString(), "Ether");
                // console.log(priceToWei)
                await contract_market.methods.MbuyToken(props.t.listingId).send({ from: account, value: props.t.price })
                    .on('transactionHash', function (hash) {
                        console.log("transactionHash")
                        console.log(hash)
                    })
                    .on('sending', function (payload) {
                        console.log("sending")
                        console.log(payload)
                    })
                    .on('sent', function (payload) {
                        console.log("sent")
                        console.log(payload)
                    })
                    .on('confirmation', function (confirmationNumber, receipt) {
                        console.log("confirmation")
                        console.log(receipt)
                        console.log(confirmationNumber)


                    })
                    .on('receipt', function (receipt) {
                        // receipt example
                        console.log("receipt")
                        console.log(receipt);
                        buySuccess()

                    })
                    .on('error', function (error, receipt) { // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
                        console.log("onError")
                        console.log(error)
                        console.log(receipt)
                    })
                    .then(function (receipt) {
                        console.log("last")
                        console.log(receipt)
                    });
            } else {
                showNotification("warning", "Opps!", "System is under maintenance")
            }
        } else {
            showNotification("warning", "Opps!", "You need connect metamask!")
        }
    }
    const showButtonBuy = () => {
        if (web3) {
            if (props.type == "1") {
                let priceEth = web3.utils.fromWei(props.t.price.toString(), "Ether")
                if (account == props.t.ticket.currentOwner) {
                    return (
                        <div className="row text-md-right" style={{ marginTop: "10px" }}>
                            <div className='col-6 col-lg-6 col-md-6'>
                                <a className="btn-s uppercase btn btn-primary with-ico border-3"
                                ><i className="icon-ticket" />{priceEth} ETH</a>
                            </div>
                            <div className='col-6 col-lg-6 col-md-6'>
                                <a className="btn-s uppercase btn btn-primary with-ico border-2"
                                    onClick={() => onClickCancel()}
                                    style={{ marginRight: "10px" }}
                                ><i className="icon-cancel" />Cancel</a>
                            </div>
                        </div>
                    )
                } else
                    return (
                        <div className="row text-md-right" style={{ marginTop: "10px" }}>
                            <div className='col-6 col-lg-6 col-md-6'>
                                <a className="btn-s uppercase btn btn-primary with-ico border-4"
                                    onClick={() => { onClickBuy() }}><i className="icon-ticket" />{priceEth} ETH</a>
                            </div>
                            <div className='col-6 col-lg-6 col-md-6'>
                                <a className="btn-s uppercase btn btn-primary with-ico border-4"
                                    style={{ marginRight: "10px" }}
                                    onClick={() => { onClickBuy() }}><i className="icon-cart" />Buy</a>
                            </div>


                        </div>
                    )

            } else {
                return (
                    <div className="row text-md-right" style={{ marginTop: "10px" }}>
                        <div className='col-6 col-lg-6 col-md-6'>
                            <a className="btn-s uppercase btn btn-primary with-ico border-2"
                            ><i className="icon-ticket" /> ETH</a>
                        </div>
                        <div className='col-6 col-lg-6 col-md-6'>
                            <a className="btn-s uppercase btn btn-primary with-ico border-2"
                                style={{ marginRight: "10px" }}
                            ><i className="icon-cart" />Owned</a>
                        </div>


                    </div>

                )
            }
        }
    }
    return (
        <div className="col-md-3 col-lg-3">
            <div className="block-member" style={{ minHeight: "260px" }}>
                <img src={props.t.ticket.img} alt="" />
                <div className="member-info" style={{ backgroundColor: "#4252a980" }}>
                    <h6 className="uppercase mb-0 ">{props.t.ticket.singer} - No: {props.t.ticket.tokenId}</h6>
                    <span className=" mt-0"> {props.t.ticket.place}  </span><br></br>
                    <span className=" mt-0">  {props.t.ticket.time} </span>
                    {showButtonBuy()}
                </div>
            </div>
        </div>
    )
}
export default Ticket