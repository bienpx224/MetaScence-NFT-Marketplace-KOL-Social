
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
                                <h1 className="uppercase">Teams</h1>
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
                    <div className="col-md-3 col-lg-3">
                        <div className="block-member">
                            <img src="https://lh3.googleusercontent.com/proxy/y4eSUMTaSn-o1TzpnAywnbQcJSoUXyCvppvSvZk4EYCEMmYAK2m_Kqf4D2Jbyp047SddSKvOgEZ6Liz0ETsONu8" alt="" />
                            <div className="member-info">
                                <h6 className="uppercase mb-0 ">Lê Tiến Đạt</h6>
                                <span className=" mt-0"> Business Management</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-3">
                        <div className="block-member">
                            <img src="https://lh3.googleusercontent.com/proxy/y4eSUMTaSn-o1TzpnAywnbQcJSoUXyCvppvSvZk4EYCEMmYAK2m_Kqf4D2Jbyp047SddSKvOgEZ6Liz0ETsONu8" alt="" />
                            <div className="member-info">
                                <h6 className="uppercase mb-0 ">Phạm Xuân Biển</h6>
                                <span className=" mt-0"> Software Developer</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-3">
                        <div className="block-member">
                            <img src="https://lh3.googleusercontent.com/proxy/y4eSUMTaSn-o1TzpnAywnbQcJSoUXyCvppvSvZk4EYCEMmYAK2m_Kqf4D2Jbyp047SddSKvOgEZ6Liz0ETsONu8" alt="" />
                            <div className="member-info">
                                <h6 className="uppercase mb-0 ">Nguyễn Minh Dân</h6>
                                <span className=" mt-0"> Software Engineer</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-3">
                        <div className="block-member">
                            <img src="https://lh3.googleusercontent.com/proxy/y4eSUMTaSn-o1TzpnAywnbQcJSoUXyCvppvSvZk4EYCEMmYAK2m_Kqf4D2Jbyp047SddSKvOgEZ6Liz0ETsONu8" alt="" />
                            <div className="member-info">
                                <h6 className="uppercase mb-0 ">Nguyễn Hồng Hải</h6>
                                <span className=" mt-0"> Game manager</span>
                                {/* <span className=" mt-0"> Developer Web and Mobile</span> */}
                            </div>
                        </div>
                    </div>
                    {/*Row*/}{/*Row*/}{/*Row*/}{/*Row*/}{/*Row*/}{/*Row*/}
                    <div className="col-md-1 col-lg-1"></div>
                    <div className="col-md-3 col-lg-3">
                        <div className="block-member">
                            <img src="https://lh3.googleusercontent.com/proxy/y4eSUMTaSn-o1TzpnAywnbQcJSoUXyCvppvSvZk4EYCEMmYAK2m_Kqf4D2Jbyp047SddSKvOgEZ6Liz0ETsONu8" alt="" />
                            <div className="member-info">
                                <h6 className="uppercase mb-0 ">Nguyễn Minh Cường</h6>
                                <span className=" mt-0"> Software Developer</span>
                                {/* <span className=" mt-0"> Developer Web and Mobile</span> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-3">
                        <div className="block-member">
                            <img src="https://lh3.googleusercontent.com/proxy/y4eSUMTaSn-o1TzpnAywnbQcJSoUXyCvppvSvZk4EYCEMmYAK2m_Kqf4D2Jbyp047SddSKvOgEZ6Liz0ETsONu8" alt="" />
                            <div className="member-info">
                                <h6 className="uppercase mb-0 ">Lê Minh Hào</h6>
                                <span className=" mt-0"> Software Developer</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-3 col-lg-3">
                        <div className="block-member">
                            <img src="https://lh3.googleusercontent.com/proxy/y4eSUMTaSn-o1TzpnAywnbQcJSoUXyCvppvSvZk4EYCEMmYAK2m_Kqf4D2Jbyp047SddSKvOgEZ6Liz0ETsONu8" alt="" />
                            <div className="member-info">
                                <h6 className="uppercase mb-0 ">Đoàn Quân</h6>
                                <span className=" mt-0"> Web Developer</span>
                                {/* <span className=" mt-0"> Developer Web and Mobile</span> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1 col-lg-1"></div>
                    
                    {/* <div className="col-md-4 col-lg-4">
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
                    </div> */}
                </div> 
                {/*End row*/}
            </div>
            {/*End container*/}
        </section>
    )
}
export default Members