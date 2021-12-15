import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Banner from './banner/Banner';
import Header from "./header/Header"

const Home  = ()=>{
    const [user, setUser] = useState("bieneibe")

    return(
        <div className="wrapper">
        <div className="block-search-form">
          <div className="block-content">
            <div className="container">
              {/*end of row*/}
              <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-8">
                  <form method="get">
                    <div className="card  bg-red ">
                      <div className="card-body  row no-gutters align-items-center">
                        <div className="col-auto">
                          <i className="icon-search" />
                        </div>
                        {/*end of col*/}
                        <div className="col">
                          <input className="form-control form-control-lg form-control-border0" placeholder="Type a keywords..." type="search" />
                        </div>
                        {/*end of col*/}
                        <div className="col-auto">
                          <button type="submit" className="btn  btn-primary uppercase border-3">
                            Search now</button>
                        </div>
                        {/*end of col*/}
                      </div>
                    </div>
                  </form>
                </div>
                {/*end of col*/}
              </div>
              {/*end of row*/}
            </div>
          </div>
        </div>
        {/*Hero section*/}
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
        {/*End hero section*/}
        {/*Latest album section*/}
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
                  <audio preload className="album" />
                  <div className="block-content pb-0">
                    <img className="mb-0" src="img/album/5.jpg" alt="" />
                  </div>
                  <ol className="playlist">
                    <li>
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
            {/*End row*/}
          </div>
          {/*End container*/}
        </section>
        {/*End latest album section*/}
        {/*About section*/}
        <section id="about" className="about overlay main">
          <div className="background-img">
            <img src="img/25.jpg" alt="" />
          </div>
          {/*Container*/}
          <div className="container">
            {/*Row*/}
            <div className="row  vertical-align">
              <div className="col-lg-5 col-md-12">
                <div className="front-p">
                  <h1 className="uppercase text-white">A different <br />kind of music</h1>
                  <p className=" w-93">Melbourne is the coastal capital of the southeastern Australian state of Victoria. At the city's centre is the modern Federation Square development, with plazas, bars, and restaurants by the Yarra River. In the Southbank area, the Melbourne Arts Precinct is the site of Arts Centre Melbourne and the National Gallery of Victoria, with Australian and indigenous art.</p>
                  <ul className="block-social list-inline mb-4 mb-lg-0">
                    <li className="list-inline-item mr-0"><a href="#"><i className="socicon-apple" /></a></li>
                    <li className="list-inline-item mr-0"><a href="#"><i className="socicon-play" /></a></li>
                    <li className="list-inline-item mr-0"><a href="#"><i className="socicon-amazon" /></a></li>
                    <li className="list-inline-item mr-0"><a href="#"><i className="socicon-spotify" /></a></li>
                    <li className="list-inline-item mr-0"><a href="#"><i className="socicon-soundcloud" /></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="row ">
                  <div className="col-md-4 ">
                    <div className="block-content front-p pt-3 pb-3 text-center rounded bg-red mb-4 mb-lg-0">
                      <h3 className="uppercase mb-0 font-weight-600">upcoming tour </h3>
                      <span className=" p mb-0">Fort Mason Center<br />
                        San Fancisco, CA
                      </span>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="block-content pt-3 pb-3 text-center rounded bg-dark-blue front-p mb-4 mb-lg-0">
                      <h3 className="uppercase mb-0 font-weight-600">location </h3>
                      <span className=" p mb-0">Sunday to Wednesday
                        <br />July 23 to 26, 2017
                      </span>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="block-content front-p">
                      <a className="btn btn-primary uppercase with-ico border-2" href="#"><i className="icon-ticket" />Buy a Ticket</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*End row*/}
          </div>
          {/*End container*/}
        </section>
        {/*End about section*/}
        {/*Discography section*/}
        <section id="discography" className="discography main">
          {/*Container*/}
          <div className="container">
            {/*Row*/}
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-9 ">
                <div className="block-content text-center gap-one-bottom-md">
                  <div className="block-title ">
                    <h1 className="uppercase">Discography</h1>
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
              <div className="col-12 col-md-6 col-lg-3">
                <div className="block-album block-content">
                  <h5 className="mb-0 opc-70 uppercase">Limitless</h5>
                  <a className="link" href="album-single.html">View Album ›</a>
                  <a href="album-single.html">
                    <img className="animated" src="img/album/1.jpg" alt="" />
                  </a>
                  <ul className="block-social list-inline mb-md-3">
                    <li className="list-inline-item mr-0"><a href="#"><i className="socicon-apple" /></a></li>
                    <li className="list-inline-item mr-0"><a href="#"><i className="socicon-play" /></a></li>
                    <li className="list-inline-item mr-0"><a href="#"><i className="socicon-amazon" /></a></li>
                    <li className="list-inline-item mr-0"><a href="#"><i className="socicon-soundcloud" /></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div className="block-album block-content">
                  <h5 className="mb-0 opc-70 uppercase">Set me free</h5>
                  <a className="link" href="album-single.html">View Album ›</a>
                  <a href="album-single.html">
                    <img className="animated" src="img/album/2.jpg" alt="" />
                  </a>
                  <ul className="block-social list-inline mb-md-3">
                    <li className="list-inline-item mr-0"><a href="#"><i className="socicon-apple" /></a></li>
                    <li className="list-inline-item mr-0"><a href="#"><i className="socicon-play" /></a></li>
                    <li className="list-inline-item mr-0"><a href="#"><i className="socicon-amazon" /></a></li>
                    <li className="list-inline-item mr-0"><a href="#"><i className="socicon-soundcloud" /></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div className="block-album block-content">
                  <h5 className="mb-0 opc-70 uppercase">How It Feels</h5>
                  <a className="link" href="album-single.html">View Album ›</a>
                  <a href="album-single.html">
                    <img className="animated" src="img/album/3.jpg" alt="" />
                  </a>
                  <ul className="block-social list-inline mb-md-3">
                    <li className="list-inline-item mr-0"><a href="#"><i className="socicon-apple" /></a></li>
                    <li className="list-inline-item mr-0"><a href="#"><i className="socicon-play" /></a></li>
                    <li className="list-inline-item mr-0"><a href="#"><i className="socicon-amazon" /></a></li>
                    <li className="list-inline-item mr-0"><a href="#"><i className="socicon-soundcloud" /></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div className="block-album block-content">
                  <h5 className="mb-0 uppercase opc-70">Tonight</h5>
                  <a className="link" href="album-single.html">View Album ›</a>
                  <a href="album-single.html">
                    <img className="animated" src="img/album/4.jpg" alt="" />
                  </a>
                  <ul className="block-social list-inline mb-md-3">
                    <li className="list-inline-item mr-0"><a href="#"><i className="socicon-apple" /></a></li>
                    <li className="list-inline-item mr-0"><a href="#"><i className="socicon-play" /></a></li>
                    <li className="list-inline-item mr-0"><a href="#"><i className="socicon-amazon" /></a></li>
                    <li className="list-inline-item mr-0"><a href="#"><i className="socicon-soundcloud" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
            {/*End row*/}
          </div>
          {/*End container*/}
        </section>
        {/*End discography section*/}
        {/*Divider section*/}
        <section className="divider overlay">
          <div className="background-img">
            <img src="img/4.jpg" alt="" />
          </div>
          {/*Container*/}
          <div className="container">
            {/*Row*/}
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10 ">
                <div className="block-content text-center front-p">
                  <h1 className="uppercase">Time left until the upcoming tour </h1>
                  <p className="lead">27 to 31 July 2018 with over 10 show - Cincinnati, Ohio</p>
                  <div className="countdown uppercase  mb-0" />
                </div>
              </div>
            </div>
            {/*End row*/}
          </div>
          {/*End container*/}            
        </section>
        {/*End divider section*/}
        {/*Band members section*/}
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
        {/*End band members section*/}
        {/*Tours section*/}
        <section id="tour" className="tour  main bg-secondary">
          {/*Container*/}
          <div className="container">
            {/*Row*/}
            <div className="row justify-content-center ">
              <div className="col-12 col-md-10 col-lg-9">
                <div className="block-content  gap-one-bottom-md text-center">
                  <div className="block-title ">
                    <h1 className="uppercase">Upcoming tours</h1>
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
            <div className="row justify-content-center ">
              <div className="col-12 col-lg-8 col-md-10">
                <ul className="block-tabs list-inline gap-one-bottom-sm text-center">
                  <li className="active list-inline-item">
                    <h5 className="uppercase  mb-0">american tour</h5>
                  </li>
                  <li className="list-inline-item">
                    <h5 className="uppercase  mb-0">europeen tour</h5>
                  </li>
                </ul>
                <ul className="block-tab">
                  {/*Tab*/}
                  <li className="active ">
                    <div className="block-content text-center">
                      <div className="block-video">
                        <img src="img/8.jpg" className="background-img mb-0" alt="" />
                        <a className="video-play-but popup-youtube" href="https://www.youtube.com/watch?v=Gc2en3nHxA4" />
                        <div className="embed-responsive embed-responsive-16by9">
                        </div>
                      </div>
                      <p className=" mt-3"><span className="opc-70">The American Tour 2018 -</span> <a className="link" href="#">Booking Enqueries</a> </p>
                    </div>
                    <div className="block-content gap-one-top-sm text-left">
                      <div className="block-content ">
                        <div className="row">
                          <div className="col-lg-3 col-md-3">
                            <h4 className="switch-fot">14 Mar</h4>
                          </div>
                          <div className="col-lg-4 col-md-4">
                            <h6 className="mb-0 opc-70 uppercase">Melbourne, AU</h6>
                            <span>Rod Laver Arena </span>
                          </div>
                          <div className="col-12 col-lg-5 col-md-5 text-md-right">
                            <a className="btn-s uppercase btn btn-primary with-ico border-2" href="#"><i className="icon-ticket" />Vip</a>
                            <a className="btn-s uppercase btn btn-primary with-ico" href="#"><i className="icon-ticket" />Buy Ticket</a>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="block-content ">
                        <div className="row">
                          <div className="col-lg-3 col-md-3">
                            <h4 className="switch-fot">10 Apr</h4>
                          </div>
                          <div className="col-lg-4 col-md-4">
                            <h6 className="mb-0 opc-70 uppercase">Washington, DC, USA</h6>
                            <span>Capital One Arena</span>
                          </div>
                          <div className="col-12 col-lg-5 col-md-5 text-md-right">
                            <a className="btn-s uppercase btn btn-primary with-ico" href="#"><i className="icon-ticket" />Buy Ticket</a>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="block-content ">
                        <div className="row">
                          <div className="col-lg-3 col-md-3">
                            <h4 className="switch-fot">24 May</h4>
                          </div>
                          <div className="col-lg-4 col-md-4">
                            <h6 className="mb-0 opc-70 uppercase">Houston, TX, USA</h6>
                            <span>Arena Theatre</span>
                          </div>
                          <div className=" col-12 col-lg-5 col-md-5 text-md-right">
                            <a className="btn-s uppercase btn btn-primary with-ico border-2" href="#"><i className="icon-ticket" />Vip</a>
                            <a className="btn-s uppercase btn btn-primary with-ico" href="#"><i className="icon-ticket" />Buy Ticket</a>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="block-content">
                        <div className="row">
                          <div className="col-lg-3 col-md-3">
                            <h4 className="switch-fot">31 Jun</h4>
                          </div>
                          <div className="col-lg-4 col-md-4">
                            <h6 className="mb-0 opc-70 uppercase">Chicago, IL, USA</h6>
                            <span>United Center</span>
                          </div>
                          <div className="col-12 col-lg-5 col-md-5 text-md-right">
                            <a className="btn-s uppercase btn btn-primary with-ico" href="#"><i className="icon-ticket" />Buy Ticket</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="block-content text-center">
                      <div className="block-video">
                        <img src="img/9.jpg" className="background-img mb-0" alt="" />
                        <a className="video-play-but popup-youtube" href="https://www.youtube.com/watch?v=Gc2en3nHxA4" />
                        <div className="embed-responsive embed-responsive-16by9">
                        </div>
                      </div>
                      <p className=" mt-3"><span className="opc-70">The Europeen Tour 2018 -</span> <a className="link" href="#">Booking Enqueries</a> </p>
                    </div>
                    <div className="block-content gap-one-top-sm text-left">
                      <div className="block-content ">
                        <div className="row ">
                          <div className="col-lg-3 col-md-3">
                            <h4 className="switch-fot">24 Jul</h4>
                          </div>
                          <div className="col-lg-4 col-md-4">
                            <h6 className="mb-0 opc-70 uppercase">Stockholm, Sweden</h6>
                            <span>Annexet</span>
                          </div>
                          <div className="col-12 col-lg-5 col-md-5 text-md-right">
                            <a className="btn-s uppercase btn btn-primary with-ico" href="#"><i className="icon-ticket" />Buy Ticket</a>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="block-content ">
                        <div className="row">
                          <div className="col-lg-3 col-md-3">
                            <h4 className="switch-fot">16 Aug</h4>
                          </div>
                          <div className=" col-lg-4 col-md-4">
                            <h6 className="mb-0 opc-70 uppercase">Berlin, Germany</h6>
                            <span>Mercedes-Benz Arena</span>
                          </div>
                          <div className="col-12 col-lg-5 col-md-5 float-left text-md-right">
                            <a className="btn-s uppercase btn btn-primary with-ico" href="#"><i className="icon-ticket" />Buy Ticket</a>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="block-content ">
                        <div className="row">
                          <div className="col-lg-3 col-md-3">
                            <h4 className="switch-fot">24 Sep</h4>
                          </div>
                          <div className="col-lg-4 col-md-4">
                            <h6 className="mb-0 opc-70 uppercase">Monterrey, Mexico</h6>
                            <span>Machaca </span>
                          </div>
                          <div className="col-12 col-lg-5 col-md-5 text-md-right">
                            <a className="btn-s uppercase btn btn-primary with-ico border-2" href="#"><i className="icon-ticket" />Vip</a>
                            <a className="btn-s uppercase btn btn-primary with-ico" href="#"><i className="icon-ticket" />Buy Ticket</a>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="block-content">
                        <div className="row">
                          <div className="col-lg-3 col-md-3">
                            <h4 className="switch-fot">31 Oct</h4>
                          </div>
                          <div className="col-lg-4 col-md-4">
                            <h6 className="mb-0 opc-70 uppercase">Moscow, Russia</h6>
                            <span>Olimpiyskiy</span>
                          </div>
                          <div className="col-12 col-lg-5 col-md-5 text-md-right">
                            <a className="btn-s uppercase btn btn-primary with-ico border-2" href="#"><i className="icon-ticket" />Vip</a>
                            <a className="btn-s uppercase btn btn-primary with-ico" href="#"><i className="icon-ticket" />Buy Ticket</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-12  col-lg-8   col-md-10">
                <div className="block-content  gap-one-top-sm">
                  <div className="card  border-dashed">
                    <div className="card-body p-5 block-subscribe ">
                      <p className="uppercase text-center mb-4">Subscribe for free downloads and <br />band news updates</p>
                      <form method="get">
                        <div className="form-row justify-content-center">
                          <div className="col-12 col-md-9 col-lg-8">
                            <div className="form-group">
                              <input className="form-control form-control-lg" name="email" placeholder="Email Address..." type="email" />
                              <span className="text-small mt-2">* We don’t share your information with anyone.</span>
                            </div>
                          </div>
                          <div className="col-auto">
                            <button type="submit" className="btn  btn-primary uppercase border-3">
                              Subscribe now</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*End row*/}
          </div>
          {/*End container*/}
        </section>
        {/*End tour section*/}
        <section className="divider overlay">
          <div className="background-img">
            <img src="img/24.jpg" alt="" />
          </div>
          {/*Container*/}
          <div className="container">
            {/*Row*/}
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10 ">
                <div className="block-content text-center front-p">
                  <h1 className="uppercase"> 
                    PRE-SALE OF 'THE upcoming TOUR' </h1>
                  <div className="block-presale mt-5">
                    <ul>
                      <li><h5 className="uppercase list-inline-item">Pre-Sale Tour 1 :</h5> <span>2/07 - 2/09</span></li>
                      <li><h5 className=" uppercase list-inline-item">Pre-Sale Tour 1 :</h5> <span>2/14 - 2/16</span></li>
                    </ul>
                    <p className=" opc-70 mb-0">All pre-sales begin 12am local and end 6pm local time.</p>
                  </div>
                  <a className="btn btn-primary uppercase with-ico border-2 mt-5" href="#">Click for more info</a>                      
                </div>
              </div>
            </div>
            {/*End row*/}
          </div>
          {/*End container*/}            
        </section>
        {/*Gallery section*/}
        <section id="gallery" className="gallery main">
          {/*Container*/}
          <div className="container">
            {/*Row*/}
            <div className="row justify-content-center ">
              <div className="col-12 col-md-10 col-lg-9">
                <div className="block-content  gap-one-bottom-md text-center">
                  {/* As a general rule, include a heading (h1-h6) as a child of each section and article element for screen readers purposes*/}
                  <h1 className="uppercase indent">Upcoming tours</h1>
                  <i className="icon-camera-7 big-icon adjust-space " />
                </div>
              </div>
            </div>
            {/*End row*/}
          </div>
          {/*End container*/}
          {/*Container*/}
          <div className="container">
            {/*Row*/}
            <div className="row justify-content-center text-center">
              <div className="col-12 ">
                <div className="card-gallery image-gallery">
                  <a href="img/10.jpg" className="popup-image mb-0"><img className="animated" alt="" src="img/10.jpg" /></a>
                  <a href="img/11.jpg" className="popup-image mb-0"><img className="animated" alt="" src="img/11.jpg" /></a>
                  <a href="img/12.jpg" className="popup-image mb-0"><img className="animated" alt="" src="img/12.jpg" /></a>
                  <a href="img/13.jpg" className="popup-image mb-0"><img className="animated" alt="" src="img/13.jpg" /></a>
                  <a href="img/20.jpg" className="popup-image mb-0"><img className="animated" alt="" src="img/20.jpg" /></a>
                  <a href="img/14.jpg" className="popup-image mb-0"><img className="animated" alt="" src="img/14.jpg" /></a>
                  <a href="img/15.jpg" className="popup-image mb-0"><img className="animated" alt="" src="img/15.jpg" /></a>
                  <a href="img/16.jpg" className="popup-image mb-0"><img className="animated" alt="" src="img/16.jpg" /></a>
                  <a href="img/17.jpg" className="popup-image mb-0"><img className="animated" alt="" src="img/17.jpg" /></a>
                </div>
                <a className="btn btn-primary uppercase with-ico mt-5" href="#"><i className="icon-instagram" />Follow us @mousiqua</a>
              </div>
            </div>
            {/*End row*/}
          </div>
          {/*End container*/}
        </section>
        {/*End gallery section*/}
        {/*News section*/}
        <section id="news" className="news main bg-secondary">
          {/*Container*/}
          <div className="container">
            {/*Row*/}
            <div className="row justify-content-center ">
              <div className="col-12 col-md-10 col-lg-9">
                <div className="block-content  gap-one-bottom-md text-center">
                  <div className="block-title ">
                    <h1 className="uppercase">On the blog</h1>
                  </div>
                </div>
              </div>
            </div>
            {/*End row*/}
          </div>
          {/*End container*/}
          {/*Container*/}
          <div className="container">
            <ul className="news-list">
              <li className="row align-items-center justify-content-around">
                <div className="col-12 col-md-6 order-md-2">
                  <div className="block-content">
                    <a href="#"><img alt="" className="img-fluid animated" src="img/18.jpg" /></a>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-5  order-md-1 ">
                  <div className="block-content text-left">
                    <span className="mb-2 opc-70">Nov 10, 2017</span>
                    <h2>New Single “Por Favor” feat. Fifth Harmony Out Now!</h2>
                    <p className="lead">
                      Melbourne is the coastal capital of the southeastern Australian state of Victoria. At the city's centre is the modern Federation Square development, with plazas, bars, and restaurants by the Yarra River. 
                    </p>
                    <a href="#">Read more ›</a>
                  </div>
                </div>
              </li>
              <li className="row align-items-center justify-content-around">
                <div className="col-12 col-md-6 order-1">
                  <div className="block-content">
                    <a href="#"><img alt="" className="img-fluid animated" src="img/19.jpg" /></a>
                  </div>
                </div>
                {/*end of col*/}
                <div className="col-12 col-md-6 col-lg-5  order-2 text-left">
                  <div className="block-content text-left">
                    <span className="mb-2 opc-70">Nov 10, 2017</span>
                    <h2>Watch The Official Video for “Options” ft. Stephen Marley</h2>
                    <p className="lead">
                      Melbourne is the coastal capital of the southeastern Australian state of Victoria. At the city's centre is the modern Federation Square development, with plazas, bars, and restaurants by the Yarra River. 
                    </p>
                    <a href="#">Read more ›</a>
                  </div>
                </div>
                {/*end of col*/}
              </li>
            </ul>
            <div className="block-content text-center">
              <a className="btn btn-primary with-ico uppercase mt-5 " href="#">
                View all blog posts</a>
            </div>
          </div>
          {/*End container*/}
        </section>
        {/*End news section*/}
        {/*Twitter section*/}
        <section className="twitter main bg-secondary">
          {/* As a general rule, include a heading (h1-h6) as a child of each section and article element for screen readers purposes*/}
          <h1 className="uppercase indent">Upcoming tours</h1>
          {/*Container*/}
          <div className="container">
            {/*Row*/}
            <div className="row justify-content-center ">
              <div className="col-12 col-md-10 col-lg-9">
                <div className="block-content  text-center">
                  <i className="icon-twitter big-icon adjust-space" />
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
              <div className="col-12 col-md-7 col-lg-6">
                <div className=" tweets mb-5 text-center">
                </div>
              </div>
            </div>
            {/*End row*/}
          </div>
          {/*End container*/}
        </section>
        {/*End twitter section*/}  
        {/*Contact section*/}
        <section id="contact" className="contact main bg-secondary">
          {/*Container*/}
          <div className="container">
            {/*Row*/}
            <div className="row justify-content-center ">
              <div className="col-12 col-md-10 col-lg-9">
                <div className="block-content  gap-one-bottom-md text-center">
                  <div className="block-title ">
                    <h1 className="uppercase">stay in touche</h1>
                  </div>
                </div>
              </div>
            </div>
            {/*End row*/}
          </div>
          {/*End container*/}
          {/*Container*/}
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10">
                <ul className="feature-list feature-list-sm text-center row">
                  <li className="col-md-6  col-lg-4">
                    <div className="card text-center">
                      <div className="card-body">
                        <h2 className="uppercase ">Booking</h2>
                        <p className="mb-0"><em className="uppercase h5 opc-70">Benaissa Ghrib</em>
                          T+(513)352-3209<br />
                          booking@mousiqua.net
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="col-md-6  col-lg-4">
                    <div className="card text-center">
                      <div className="card-body">
                        <h2 className="uppercase">Press</h2>
                        <p className="mb-0"><em className="uppercase h5 opc-70">Zakaria Kalal</em>
                          T+(513)352-3209<br />
                          press@mousiqua.net
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="col-md-6  col-lg-4">
                    <div className="card text-center">
                      <div className="card-body">
                        <h2 className="uppercase ">info</h2>
                        <p className=" mb-0"><em className="uppercase h5 opc-70">Youssef Ait</em>
                          T+(513)352-3209<br />
                          info@mousiqua.net
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-12">
                <ul className="block-social list-inline text-center mt-4">
                  <li className="list-inline-item">
                    <a href="#"> <i className="socicon-facebook" /> </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#"><i className="socicon-instagram" /> </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#"><i className="socicon-twitter" /> </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#"><i className="socicon-youtube" /> </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#"><i className="socicon-apple" /> </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#"><i className="socicon-amazon" /></a> 
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*End container*/}
        </section>
        {/*End contact section*/}  
        <footer className="pt-5 pb-5 footer">
          {/*Container*/}
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-md-6">
                <small className="small"><span>© 2019 all rights reserved - a product of</span> mutationthemes.</small>
              </div>
              <div className="col-md-6 text-md-right">
                <ul className="list-inline small">
                  <li className="list-inline-item">
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">Terms of Use</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">About</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">Legal</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*End container*/}
        </footer>
        <a className="block-top scroll" href="#wrapper">
          <i className="icon-angle-up" /></a>
      </div>
    )
  
}

export default React.memo(Home);  // Sử dụng memo khi mà trang thường xuyên bị re-render những thành phần ko cần thiết.
// React.memo chỉ có thể xác định việc rerender dựa trên sự thay đổi của props
