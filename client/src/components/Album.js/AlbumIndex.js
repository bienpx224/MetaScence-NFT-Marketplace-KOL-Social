

import React, { useState } from 'react';
var AlbumIndex = () => {

    return (

        <section id="album" className="latest main">
            {/*Container*/}
            <div className="container">
                {/*Row*/}
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-9 ">
                        <div className="block-content text-center gap-one-bottom-md">
                            <div className="block-title ">
                                <h1 className="uppercase">Latest album</h1>
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
                <div className="row justify-content-center">
                    <div className="col-12  col-lg-4  ">
                        <div className="block-content text-center gap-one-bottom-sm">
                            <div className="block-album-info">
                                <ul>
                                    <li><h5 className=" uppercase list-inline-item ">Label</h5> <span>Limitless</span></li>
                                    <li><h5 className=" uppercase list-inline-item">Released</h5> <span>March 23/3/18</span></li>
                                    <li><h5 className=" uppercase list-inline-item">Genre</h5> <span>Pop/Rock/techno</span></li>
                                    <li><h5 className="uppercase list-inline-item">Styles</h5> <span>Revival/Indie Rock</span></li>
                                    <li>
                                    </li></ul>
                            </div>
                            <ul className="block-social list-inline mt-4">
                                <li className="list-inline-item mr-0"><a href="#"><i className="socicon-apple" /></a></li>
                                <li className="list-inline-item mr-0"><a href="#"><i className="socicon-play" /></a></li>
                                <li className="list-inline-item mr-0"><a href="#"><i className="socicon-amazon" /></a></li>
                                <li className="list-inline-item mr-0"><a href="#"><i className="socicon-soundcloud" /></a></li>
                                <li className="list-inline-item mr-0"><a href="#"><i className="socicon-spotify" /></a></li>
                                <li className="list-inline-item mr-0"><a href="#"><i className="socicon-youtube" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/*End row*/}
            </div>
            {/*End container*/}
            {/*Container*/}
            <div className="container">
                {/*Row*/}
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-8 col-md-10">
                        <div className="block-tracklist">
                            <div className="audiojs " classname="audiojs" id="audiojs_wrapper0"><audio preload className="album" src="mp3/01.mp3" />          <div className="play-pause">             <p className="play" />             <p className="pause" />             <p className="loading" />             <p className="error" />         </div>           <div className="scrubber">             <div className="progress" style={{ width: '0px' }} />             <div className="loaded" style={{ width: '0px' }} />         </div>           <div className="time">             <em className="played">00:00</em>/<strong className="duration">10:34</strong>         </div>           <div className="error-message" /></div>
                            <div className="block-content pb-0">
                                <img className="mb-0" src="img/album/5.jpg" alt="" />
                            </div>
                            <ol className="playlist">
                                <li className="pause">
                                    <div className="as-link" data-src="mp3/01.mp3">
                                        {/*Row*/}
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 ">
                                                <div className="block-track">
                                                    <h6 className="mb-0 opc-70 uppercase">Love alive</h6>
                                                    <span>Limitless </span>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 text-md-right">
                                                <a href="#" className="btn-s uppercase btn btn-primary with-ico"><i className="icon-download" />Download</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="as-link" data-src="mp3/01.mp3">
                                        {/*Row*/}
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="block-track">
                                                    <h6 className="mb-0 opc-70 uppercase ">Hope</h6>
                                                    <span> Limitless</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 text-md-right">
                                                <a href="#" className="btn-s uppercase btn btn-primary with-ico border-2 toggle-lyrics"><i className="icon-note" />Lyrics</a>
                                                <a href="#" className="btn-s uppercase btn btn-primary with-ico"><i className="icon-cart" />Purchase</a>
                                            </div>
                                            <div className="col-12 ">
                                                <div className="block-lyrics w-75 text-center mt-3">
                                                    <h5 className="mb-4 opc-70 uppercase ">Hope</h5>
                                                    <p>Liberian girl
                                                        You came and you changed my world
                                                        A love so brand new
                                                        Liberian girl
                                                        You came and you changed my world
                                                        A feeling so true
                                                    </p>
                                                    <p>Liberian girl
                                                        You know that you came
                                                        And you changed my world
                                                        Just like in the movies
                                                        With two lovers in a scene
                                                        And she says
                                                        "Do you love me"
                                                        And he says so endlessly
                                                        "I love you, Liberian girl"
                                                    </p>
                                                    <p>Liberian girl
                                                        More precious than any pearl
                                                        Your love so complete
                                                        Liberian girl
                                                        You kiss me then,
                                                        Ooh, the world
                                                        You do this to me
                                                        Liberian girl
                                                        You know that you came
                                                        And you changed my world
                                                        Just like in the movies
                                                        With two lovers in a scene
                                                        And she says
                                                        "Do you love me"
                                                        And he says so endlessly
                                                        "I love you, Liberian girl"
                                                    </p>
                                                    <p>Liberian girl
                                                        You know that you came
                                                        And you changed my world
                                                        I wait for the day
                                                        When you have to say
                                                        "I do"…
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="as-link" data-src="mp3/01.mp3">
                                        {/*Row*/}
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="block-track">
                                                    <h6 className="mb-0 opc-70 uppercase">Bounce out</h6>
                                                    <span>Limitless </span>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 text-md-right">
                                                <a href="#" className="btn-s uppercase btn btn-primary with-ico"><i className="icon-download" />Download</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="as-link" data-src="mp3/01.mp3">
                                        {/*Row*/}
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="block-track">
                                                    <h6 className="mb-0 opc-70 uppercase">Girls are the same</h6>
                                                    <span>Limitless </span>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 text-md-right">
                                                <a href="#" className="btn-s uppercase btn btn-primary with-ico"><i className="icon-download" />Download</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="as-link" data-src="mp3/01.mp3">
                                        {/*Row*/}
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="block-track">
                                                    <h6 className="mb-0 opc-70 uppercase ">My queen</h6>
                                                    <span>Limitless </span>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 text-md-right">
                                                <a href="#" className="btn-s uppercase btn btn-primary with-ico border-2 toggle-lyrics"><i className="icon-note" />Lyrics</a>
                                                <a href="#" className="btn-s uppercase btn btn-primary with-ico"><i className="icon-cart" />Purchase</a>
                                            </div>
                                            <div className="col-12 ">
                                                <div className="block-lyrics w-75  text-center mt-3">
                                                    <h5 className="mb-4 opc-70 uppercase ">My queen</h5>
                                                    <p>Liberian girl
                                                        You came and you changed my world
                                                        A love so brand new
                                                        Liberian girl
                                                        You came and you changed my world
                                                        A feeling so true
                                                    </p>
                                                    <p>Liberian girl
                                                        You know that you came
                                                        And you changed my world
                                                        Just like in the movies
                                                        With two lovers in a scene
                                                        And she says
                                                        "Do you love me"
                                                        And he says so endlessly
                                                        "I love you, Liberian girl"
                                                    </p>
                                                    <p>Liberian girl
                                                        More precious than any pearl
                                                        Your love so complete
                                                        Liberian girl
                                                        You kiss me then,
                                                        Ooh, the world
                                                        You do this to me
                                                        Liberian girl
                                                        You know that you came
                                                        And you changed my world
                                                        Just like in the movies
                                                        With two lovers in a scene
                                                        And she says
                                                        "Do you love me"
                                                        And he says so endlessly
                                                        "I love you, Liberian girl"
                                                    </p>
                                                    <p>Liberian girl
                                                        You know that you came
                                                        And you changed my world
                                                        I wait for the day
                                                        When you have to say
                                                        "I do"…
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="as-link" data-src="mp3/01.mp3">
                                        {/*Row*/}
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="block-track">
                                                    <h6 className="mb-0 opc-70 uppercase">Falling apart</h6>
                                                    <span>Limitless </span>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 text-md-right">
                                                <a href="#" className="btn-s uppercase btn btn-primary with-ico"><i className="icon-download" />Download</a>
                                                <a href="#" className="btn-s uppercase btn btn-primary with-ico"><i className="icon-basket" />Purchase</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AlbumIndex;