import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkValidNetwork } from '../../utils/listenChangeMetamask';
import { showNotification } from '../../utils/util';

const Navigate = () => {
    const dispatch = useDispatch()
    const { account, isLogin, web3 } = useSelector((state) => ({
        account: state.rootReducer.account,
        isLogin: state.rootReducer.isLogin,
        web3: state.rootReducer.web3
    }))
    const connectMetamask = async () => {
        if(web3){
            const accounts = await web3.eth.getAccounts();
            const _networkId = await web3.eth.net.getId() + '';
            checkValidNetwork(accounts, _networkId, dispatch)
        }else{
            showNotification("warning", "Opps!", "Your browser don't support Metamask")
        }
    }

    const checkWallet = () => {
        if (isLogin) {
            return <a onClick={() => connectMetamask()} className="scroll btn-s uppercase btn btn-primary with-ico border-4" >Your wallet:<i className="scroll icon-ticket" />{account}</a>

        } else {

            return <a onClick={() => connectMetamask()} className="scroll btn-s uppercase btn btn-primary with-ico border-2" ><i className="scroll icon-ticket" />Connect metamask</a>
        }

    }
    return (
        <header className="header default">
                <div className=" left-part">
                    <a className="logo scroll" href="/">
                        {/* <img class="logo-icon" src="img/meta/logo.jpg" alt="" /> */}
                        <h2 className="mb-0 uppercase">Meta Scenes</h2>
                    </a>
                </div>
                <div className="right-part">
                    <nav className="main-nav">
                        <div className="toggle-mobile-but">
                            <a href="#" className="mobile-but">
                                <div className="lines" />
                            </a>
                        </div>
                        <ul className="main-menu list-inline">
                            {checkWallet()}

                            <li><a className="scroll list-inline-item" href="#wrapper">Home</a></li>
                            <li><a className="scroll list-inline-item" href="#about">about</a></li>
                            <li className="dropdown"><a className="scroll list-inline-item" href="#tour">Tours</a>
                            </li>
                            {/* <li><a className="scroll list-inline-item" href="#discography">Discovery</a></li> */}

                            <li><a className="scroll list-inline-item" href="#gallery">Gallery</a></li>
                            <li><a className="scroll list-inline-item" href="#band">Teams</a></li>

                            <li><a className="scroll list-inline-item" href="#contact">Contact</a></li>
                            <li className="block-helper"><a href="/market">
                                <span className="icon search-ico"><i className="icon-cart" /></span></a>
                            </li>
                            <li className="block-helper"><a href="/nft">
                                <span className="icon search-ico"><i className="icon-ticket" /></span></a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
    )
}
export default Navigate;