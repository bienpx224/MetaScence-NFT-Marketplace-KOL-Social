import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import Ticket from "./Ticket";
import Navigate from "../header/Navigate";

const ListTicketOwned = () => {
    const [listTicketOwned, setListTicketOwned] = useState()
    const { contract_market, contract_nft, account, isLogin, web3 } = useSelector((state) => ({
        contract_market: state.rootReducer.contract_market,
        contract_nft: state.rootReducer.contract_nft,
        account: state.rootReducer.account,
        isLogin: state.rootReducer.isLogin,
        web3: state.rootReducer.web3
    }))
    useEffect(() => {
        if (isLogin) {
            if (contract_market) {

                contract_market.methods.getTokensOwner().call({ from: account })
                    .then((data) => {
                        console.log(data)
                        var data2 = []
                        let dataArrId = []
                        for (var i = 0; i <= data.length - 1; i++) {
                            if (data[i].tokenId !== "0") {
                                data2.push(data[i])
                                dataArrId.push(data[i].tokenId)
                            }
                        }
                        contract_market.methods.getTokensById(dataArrId).call({ from: account })
                            .then((arrTicket) => {
                                arrTicket.forEach(ticket => {
                                    for (var i = 0; i <= data2.length - 1; i++) {
                                        if (data2[i].tokenId == ticket.tokenId) {
                                            data2[i] = { ...data2[i], ticket }
                                        }
                                    }
                                });
                                setListTicketOwned(data2)
                            })
                    })
            }
        }
    }, [isLogin, contract_market])
    const showTicketOwned = () => {
        if (listTicketOwned && listTicketOwned[0]) {
            return listTicketOwned.map((e, key) => {
                return <Ticket type="0" key={key} t={e} />
            })
        }
    }
    return (
        <div>
            <Navigate />
            <section id="band" className="band main ">
                {/*Container*/}
                <div className="container">
                    {/*Row*/}
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-9">
                            <div className="block-content text-center gap-one-bottom-md">
                                <div className="block-title ">
                                    <h1 className="uppercase">YOur ticket</h1>
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
                    <div className="row">

                        {showTicketOwned()}

                    </div>
                    {/*End row*/}
                </div>
                {/*End container*/}
            </section>
        </div>
    )
}
export default ListTicketOwned