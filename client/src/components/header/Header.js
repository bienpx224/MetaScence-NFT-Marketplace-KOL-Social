import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ModalVideo from 'react-modal-video'
import { checkValidNetwork } from '../../utils/listenChangeMetamask';
import { showNotification } from '../../utils/util';
import Navigate from './Navigate';

const Header = () => {
    const [isOpen, setOpen] = useState(false)
    const [urlVideo, setUrlVideo] = useState("img/video/video11.mp4")
    const setOpenVideo = (index)=>{
        if(index == 1){
            //https://drive.google.com/file/d/16voR5binSgDcEAXhfSZXfbI94pPSHkaQ/view
            setUrlVideo("img/video/video11.mp4")
            // setUrlVideo("https://drive.google.com/file/d/16voR5binSgDcEAXhfSZXfbI94pPSHkaQ/preview")
            setOpen(true)
        }else{
            setUrlVideo("img/video/video22.mp4")
            // setUrlVideo("https://drive.google.com/file/d/1oHy-EvMnIpfL2XO_TmAWgKEKQ8Qw-gaQ/preview")
            setOpen(true)
        }
    }
    return (
        <section className="hero">
            {/*Main slider*/}
            <ModalVideo channel='custom' autoplay isOpen={isOpen} url={urlVideo}
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
                                        <a onClick={() => setOpenVideo(1)} className="video-play-but popup-youtube" />

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
                                        <h5 className="mb-0 text-white uppercase">MetaScenes is a decentralized virtual scene built on the blockchain</h5>
                                        <a className="video-play-but popup-youtube" onClick={() => setOpenVideo(2)} />
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
            <Navigate />
            {/*End header*/}
        </section>
    )

}

export default React.memo(Header);  // Sử dụng memo khi mà trang thường xuyên bị re-render những thành phần ko cần thiết.
// React.memo chỉ có thể xác định việc rerender dựa trên sự thay đổi của props
