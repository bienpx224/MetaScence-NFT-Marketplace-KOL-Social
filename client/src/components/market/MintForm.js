import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';


const MintForm = () => {
    const [state, setState] = useState({
        owner: "",
        name: "",
        singer: "",
        place: "",
        time: "",
        img: "",
        amount: 0
    })

    const mint = async ()=>{
        console.log(state)
        contract_market.methods.mint(state.owner, state.name, state.singer, state.place, state.time,
            state.img, state.amount).send({from:account})
            .then( (data)=>{
                console.log(data)
            })
    }

    const { contract_market, contract_nft, account, isLogin, web3 } = useSelector((state) => ({
        contract_market: state.rootReducer.contract_market,
        contract_nft: state.rootReducer.contract_nft,
        account: state.rootReducer.account,
        isLogin: state.rootReducer.isLogin,
        web3: state.rootReducer.web3
    }))

    useEffect( ()=>{
        if(account){
            setState({...state, owner:account})
        }
    },[account])

    return (
        <section id="mint" className="band main ">
            {/*Container*/}
            <div className="container">
                {/*Row*/}
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-9">
                        <div className="block-content text-center gap-one-bottom-md">
                            <div className="block-title ">
                                <h1 className="uppercase">Mint Tickets</h1>
                            </div>
                        </div>
                    </div>
                </div>
                {/*End row*/}
            </div>
            {/*End container*/}
            <div className="form-row justify-content-center">
                <div className="col-3 col-md-3 col-lg-3">
                    <div className="form-group">
                        <input value={account} onChange={(e)=>setState({...state,account:e.target.value})} 
                        className="form-control form-control-lg"  placeholder="Owner" type="text" />
                    </div>
                </div>
                <div className="col-3 col-md-3 col-lg-3">
                    <div className="form-group">
                        <input value={state.name} onChange={(e)=>setState({...state,name:e.target.value})} 
                        className="form-control form-control-lg"  placeholder="Name" type="text" />
                    </div>
                </div>
                <div className="col-3 col-md-3 col-lg-3">
                    <div className="form-group">
                        <input value={state.singer} onChange={(e)=>setState({...state,singer:e.target.value})} 
                        className="form-control form-control-lg"  placeholder="Singer" type="text" />
                    </div>
                </div>
                <div className="col-3 col-md-3 col-lg-3">
                    <div className="form-group">
                        <input value={state.time} onChange={(e)=>setState({...state,time:e.target.value})} 
                        className="form-control form-control-lg" placeholder="Time" type="text" />
                    </div>
                </div>
                <div className="col-3 col-md-3 col-lg-3">
                    <div className="form-group">
                        <input value={state.place} onChange={(e)=>setState({...state,place:e.target.value})} 
                        className="form-control form-control-lg" placeholder="Place" type="text" />
                    </div>
                </div>
                <div className="col-3 col-md-3 col-lg-3">
                    <div className="form-group">
                        <input value={state.img} onChange={(e)=>setState({...state,img:e.target.value})} 
                        className="form-control form-control-lg" placeholder="Image" type="text" />
                    </div>
                </div>
                <div className="col-3 col-md-3 col-lg-3">
                    <div className="form-group">
                        <input value={state.amount} onChange={(e)=>setState({...state,amount:e.target.value})} 
                        className="form-control form-control-lg" placeholder="Amount" type="number" />
                    </div>
                </div>
                <div className="col-3 col-md-3 col-lg-3">
                    <button onClick={() => { mint() }} type="button" className="btn  btn-primary uppercase border-3">
                        Mint now</button>
                </div>
            </div>
        </section>
    )
}
export default MintForm