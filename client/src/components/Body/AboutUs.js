import React, { useState } from 'react';

const AboutUs = () => {
    return (
        <section id="about" className="about overlay main">
            <div className="background-img">
                <img src="img/meta/meta1.jpeg" alt="" />
            </div>
            {/*Container*/}
            <div className="container">
                {/*Row*/}
                <div className="row  vertical-align">
                    <div className="col-lg-7 col-md-12">
                        <div className="front-p">
                            <h1 className="uppercase text-white">Meta Scenes <br />kind of future</h1>
                            <h3 className=" w-93">MetaScenes makes the world of Entertainment easier by providing creative and attractive virtual stage. Celebrities, Idols, KOLs, even talent people can organize the concert which connect their fans or communities via metaverse space on real time by their avatar.</h3>
                            
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="row ">
                            <div className="col-md-6 ">
                                <div className="block-content front-p pt-3 pb-3 text-center rounded bg-red mb-4 mb-lg-0">
                                    <h3 className="uppercase mb-0 font-weight-600">Comming soon </h3>
                                    <span className=" p mb-0">Decentralized Virtual Network<br />
                                        Hackathon, VBI
                                    </span>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="block-content pt-3 pb-3 text-center rounded bg-dark-blue front-p mb-4 mb-lg-0">
                                    <h3 className="uppercase mb-0 font-weight-600">location </h3>
                                    <span className=" p mb-0">Saturday to Monday
                                        <br />Dec 18 to 20, 2021
                                    </span>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                {/*End row*/}
            </div>
            {/*End container*/}
        </section>
    )
}
export default AboutUs;