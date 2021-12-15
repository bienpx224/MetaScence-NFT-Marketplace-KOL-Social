import React, { useState } from 'react';

const NewAlbums = () => {
    return (
        <section className="discography__section set-bg" data-setbg="img/discography-bg.png" style={{ backgroundImage: 'url("img/discography-bg.png")' }}>

            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="section-title">
                            <div className="sub-title">Our Discogaphy</div>
                            <h2>newest albums &amp; singles.</h2>
                        </div>
                    </div>
                    <div className="col-lg-4 text-left text-lg-right pt-2">
                        <a href="#" className="site__btn mb-5"><i className="fa fa-apple" /> Buy on itunes</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="album__card">
                            <img src="img/members/x3.jpg" alt="" />
                            <h4>I’m a mess</h4>
                            <p>Bebe Rexha</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="album__card">
                            <img src="img/members/x2.jpg" alt="" />
                            <h4>Natural</h4>
                            <p>Imagine Dragons</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="album__card">
                            <img src="img/members/x3.jpg" alt="" />
                            <h4>Sweet But Psycho</h4>
                            <p>Ava Max</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="album__card">
                            <img src="img/members/x4.jpg" alt="" />
                            <h4>Waiting For Love</h4>
                            <p>Avicii</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="album__card">
                            <img src="img/members/x5.jpg" alt="" />
                            <h4>So Am I</h4>
                            <p>Ava Max</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="album__card">
                            <img src="img/members/x6.jpg" alt="" />
                            <h4>Mamma Mia</h4>
                            <p>Hugel feat. Amber</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="album__card">
                            <img src="img/members/x7.jpg" alt="" />
                            <h4>Bad Guy</h4>
                            <p>Billie Eilish</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="album__card">
                            <img src="img/members/x8.jpg" alt="" />
                            <h4>Let me down slowly</h4>
                            <p>Alec Benjamin</p>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default NewAlbums;