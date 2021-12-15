import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NewAlbums from "../Body/NewAlbums"
import AboutUs from '../Body/AboutUs';
import Navigate from './Navigate';

const Header = () => {

    return (
        <div>
            <Navigate />

            <section className="hero__section set-bg" data-setbg="img/hero-bg.png" style={{ backgroundImage: 'url("img/hero-bg.png")' }}>
                <div className="container text-white">
                    <div className="hero__slider owl-carousel owl-loaded owl-drag">
                        <div className="owl-stage-outer"><div className="owl-stage" style={{ transform: 'translate3d(-1500px, 0px, 0px)', transition: 'all 1.2s ease 0s', width: '4500px' }}><div className="owl-item cloned" style={{ width: '750px' }}><div className="hero__items">
                            <span>The electro vibe</span>
                            <h2>Tailor Lachiri</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua accumsan lacus vel facilisis. </p>
                            <a href="#" className="site__btn">Buy tickets</a>
                        </div></div><div className="owl-item cloned" style={{ width: '750px' }}><div className="hero__items">
                            <span>The electro vibe</span>
                            <h2>Tailor Lachiri</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua accumsan lacus vel facilisis. </p>
                            <a href="#" className="site__btn">Buy tickets</a>
                        </div></div><div className="owl-item active" style={{ width: '750px' }}><div className="hero__items">
                            <span>The electro vibe</span>
                            <h2>Tailor Lachiri</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua accumsan lacus vel facilisis. </p>
                            <a href="#" className="site__btn">Buy tickets</a>
                        </div></div><div className="owl-item" style={{ width: '750px' }}><div className="hero__items">
                            <span>The electro vibe</span>
                            <h2>Tailor Lachiri</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua accumsan lacus vel facilisis. </p>
                            <a href="#" className="site__btn">Buy tickets</a>
                        </div></div><div className="owl-item cloned" style={{ width: '750px' }}><div className="hero__items">
                            <span>The electro vibe</span>
                            <h2>Tailor Lachiri</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua accumsan lacus vel facilisis. </p>
                            <a href="#" className="site__btn">Buy tickets</a>
                        </div></div><div className="owl-item cloned" style={{ width: '750px' }}><div className="hero__items">
                            <span>The electro vibe</span>
                            <h2>Tailor Lachiri</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua accumsan lacus vel facilisis. </p>
                            <a href="#" className="site__btn">Buy tickets</a>
                        </div></div></div></div><div className="owl-nav"><button type="button" role="presentation" className="owl-prev"><i className="fa fa-angle-left" /></button><button type="button" role="presentation" className="owl-next"><i className="fa fa-angle-right" /></button></div><div className="owl-dots disabled" /></div>
                </div>
            </section>

            <section className="about__section">
                
                <AboutUs />

                <NewAlbums />

            </section>

        </div>
    )

}

export default React.memo(Header);  // Sử dụng memo khi mà trang thường xuyên bị re-render những thành phần ko cần thiết.
// React.memo chỉ có thể xác định việc rerender dựa trên sự thay đổi của props
