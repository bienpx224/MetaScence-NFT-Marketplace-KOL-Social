
import React, { useState } from 'react';
var MainSlider = () => {

    return (
        <section className="hero">
            {/*Main slider*/}
            <div className="main-slider slider flexslider">
                <ul className="slides">
                    <li>
                        <div className="background-img overlay zoom">
                            <img src="img/1.jpg" alt="" />
                        </div>
                        {/*Container*/}
                        <div className="container hero-content">
                            {/*Row*/}
                            <div className="row">
                                <div className="col-sm-12 text-center">
                                    {/*Inner hero*/}
                                    <div className="inner-hero">
                                        <div className="back-rect" />
                                        <h1 className="large text-white uppercase mb-0">welcome to mousiqua</h1>
                                        <h5 className="mb-0 text-white uppercase">Music Band and Musician Bootstrap Template</h5>
                                        <div className="front-rect" />
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
                            <img src="img/2.jpg" alt="" />
                        </div>
                        {/*Container*/}
                        <div className="container hero-content">
                            {/*Row*/}
                            <div className="row">
                                <div className="col-sm-12 text-center">
                                    {/*Inner hero*/}
                                    <div className="inner-hero">
                                        <h1 className="large text-white uppercase mb-0">limitless</h1>
                                        <h5 className="mb-0 text-white uppercase">New Album Available Everywhere</h5>
                                        <a className="video-play-but popup-youtube" href="https://www.youtube.com/watch?v=Gc2en3nHxA4" />
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
                        <h2 className="mb-0 uppercase">mousiqua.</h2>
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
                            <li><a className="scroll list-inline-item" href="#discography">discography</a></li>
                            <li><a className="scroll list-inline-item" href="#band">Band</a></li>
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
export default MainSlider;