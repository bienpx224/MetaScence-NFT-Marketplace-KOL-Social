
import React, { useState } from 'react';

const Members = () => {
    return (

        <section id="band" className="band main ">
            {/*Container*/}
            <div className="container">
                {/*Row*/}
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-9">
                        <div className="block-content text-center gap-one-bottom-md">
                            <div className="block-title ">
                                <h1 className="uppercase">Band members</h1>
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
                    <div className="col-md-4 col-lg-4">
                        <div className="block-member">
                            <img src="img/5.jpg" alt="" />
                            <div className="member-info">
                                <h6 className="uppercase mb-0 ">Joe Walker</h6>
                                <span className=" mt-0"> Lead vocals,guitars</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4">
                        <div className="block-member">
                            <img src="img/6.jpg" alt="" />
                            <div className="member-info">
                                <h6 className="uppercase mb-0 ">Andrew Smith</h6>
                                <span className=" mt-0"> Lead guitar, bass guitar</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4">
                        <div className="block-member">
                            <img src="img/7.jpg" alt="" />
                            <div className="member-info">
                                <h6 className="uppercase mb-0 ">Jeremy Anderton</h6>
                                <span className=" mt-0">Drums, keyboards</span>
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
export default Members