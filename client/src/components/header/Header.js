import React, { useState } from 'react';
import ModalVideo from 'react-modal-video'

const Header = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <section className="hero">
            {/*Main slider*/}
            <ModalVideo channel='custom' autoplay isOpen={isOpen} url="img/meta/video1.mp4" 
                                        onClose={() => setOpen(false)} />
            <div className="main-slider slider flexslider">
                <ul className="slides">
                    <li>
                        <div className="background-img overlay zoom">
                            <img src="img/meta/slider0.jpg" alt="" />
                        </div>
                        {/*Container*/}
                        <div className="container hero-content">
                            {/*Row*/}
                            <div className="row">
                                <div className="col-sm-12 text-center">
                                    {/*Inner hero*/}
                                    <div className="inner-hero">
                                        {/* <div className="back-rect" /> */}
                                        <h1 className="large text-white uppercase mb-0">Welcome to MetaScenes</h1>
                                        <h5 className="mb-0 text-white uppercase">Bring the Real Scenes into Virtual Scenes</h5>
                                        <a onClick={()=> setOpen(true)} className="video-play-but popup-youtube" />
                                        
                                        {/* <div className="front-rect" /> */}
                                    </div>
                                </div>
                                {/*End row*/}
                            </div>
                            {/*End container*/}
                        </div>
                        {/*End inner hero*/}
                    </li>
                    <li>
                        <div className="background-img overlay zoom">
                            <img src="img/meta/slider1.png" alt="" />
                        </div>
                        {/*Container*/}
                        <div className="container hero-content">
                            {/*Row*/}
                            <div className="row">
                                <div className="col-sm-12 text-center">
                                    {/*Inner hero*/}
                                    <div className="inner-hero">
                                        <h1 className="large text-white uppercase mb-0">Connect the world into your eyes</h1>
                                        <h5 className="mb-0 text-white uppercase">MetaScenes is a decentralized virtual network built on the blockchain</h5>
                                        <a className="video-play-but popup-youtube" onClick={()=> setOpen(true)} />
                                    </div>
                                </div>
                                {/*End row*/}
                            </div>
                            {/*End container*/}
                        </div>
                        {/*End inner hero*/}
                    </li>
                </ul>
            </div>
            {/*End main slider*/}
            {/*Header*/}
            <header className="header default">
                <div className=" left-part">
                    <a className="logo scroll" href="#wrapper">
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
                            <li><a className="scroll list-inline-item" href="#wrapper">Home</a></li>
                            <li><a className="scroll list-inline-item" href="#about">about</a></li>
                            <li><a className="scroll list-inline-item" href="#discography">Discovery</a></li>
                            <li><a className="scroll list-inline-item" href="#band">Teams</a></li>
                            <li className="dropdown"><a className="scroll list-inline-item" href="#tour">Tours</a>
                            </li>
                            <li><a className="scroll list-inline-item" href="#gallery">Gallery</a></li>
                            <li><a className="scroll list-inline-item " href="#news">News</a>
                            </li>
                            <li><a className="scroll list-inline-item" href="#contact">Contact</a></li>
                            <li className="block-helper">
                                <a href="#album" className="scroll"><span><i className="icon-cd-2" /></span></a>
                            </li>
                            <li className="block-helper">
                                <span className="icon search-ico"><i className="icon-search" /></span>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            {/*End header*/}
        </section>
    )

}

export default React.memo(Header);  // Sử dụng memo khi mà trang thường xuyên bị re-render những thành phần ko cần thiết.
// React.memo chỉ có thể xác định việc rerender dựa trên sự thay đổi của props
