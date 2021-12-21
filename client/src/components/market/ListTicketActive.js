import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import Ticket from "./Ticket";


const ListTicketActive = () => {
    const [listTicket, setListTicket] = useState()
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
                contract_market.methods.MgetArrListing().call({ from: account })
                    .then((data) => {
                        var data2 = []
                        let dataArrId = []
                        for (var i = 0; i <= data.length - 1; i++) {
                            if (data[i].tokenId != "0") {
                                data2.push(data[i])
                                dataArrId.push(data[i].tokenId)
                            }
                        }
                        contract_market.methods.getTokensById(dataArrId).call({from: account})
                        .then( (arrTicket)=>{
                            arrTicket.forEach(ticket => {
                                for(var i=0;i<= data2.length-1; i++){
                                    if(data2[i].tokenId == ticket.tokenId){
                                        data2[i] = {...data2[i], ticket}
                                    }
                                }
                            });
                        setListTicket(data2)
                        })
                    })
            }
        }
    }, [isLogin, contract_market])

    const showTicket = () => {
        if (listTicket && listTicket[0]) {
            let groupTicket = [];
            
            return listTicket.map( (e,key)=>{
                return <Ticket type="1" key={key} t={e}/>
            })
        }
    }
    
    return (
        <section id="band" className="band main ">
            {/*Container*/}
            <div className="container">
                {/*Row*/}
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-9">
                        <div className="block-content text-center gap-one-bottom-md">
                            <div className="block-title ">
                                <h1 className="uppercase">Tickets Sale In market</h1>
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

                    {showTicket()}

                </div>
                {/*End row*/}
            </div>
            {/*End container*/}
        </section>
    )
}
export default ListTicketActive