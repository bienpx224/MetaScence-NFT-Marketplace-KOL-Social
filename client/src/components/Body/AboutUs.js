import React, { useState } from 'react';

const AboutUs = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <img src="img/xabout.png.pagespeed.ic.-wM-zTzVvd.webp" alt="" />
                </div>
                <div className="col-lg-6">
                    <div className="about__text">
                        <span>About us</span>
                        <h2>The electro vibe</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc-ididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. lectus turpis sociis ut porttitor scelerisque amet ultrices placerat mid facilisis proin purus, cursus ridiculus nisi diam augue porta? Penatibus magna etiam, placerat dignissim.</p>
                        <a href="#" className="site__btn">Contact us</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutUs;