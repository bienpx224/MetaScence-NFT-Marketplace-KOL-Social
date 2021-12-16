
import React, { useState } from 'react';

const Block = () => {
    return (
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
                  <a href="#"><img alt="" className="img-fluid animated" src="img/meta/connect1.png" /></a>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-5  order-md-1 ">
                <div className="block-content text-left">
                  <span className="mb-2 opc-70">Dec 18, 2021</span>
                  <h2>New Single “Por Favor” feat. Fifth Harmony Out Now!</h2>
                  <p className="lead">
                    Melbourne is the coastal capital of the southeastern Australian state of Victoria. At the city's centre is the modern Federation Square development, with plazas, bars, and restaurants by the Yarra River.
                  </p>
                  {/* <a href="#">Read more ›</a> */}
                </div>
              </div>
            </li>
            <li className="row align-items-center justify-content-around">
              <div className="col-12 col-md-6 order-1">
                <div className="block-content">
                  <a href="#"><img alt="" className="img-fluid animated" src="img/meta/tokenomics.jpg" /></a>
                </div>
              </div>
              {/*end of col*/}
              <div className="col-12 col-md-6 col-lg-5  order-2 text-left">
                <div className="block-content text-left">
                  <span className="mb-2 opc-70">Dec 18, 2021</span>
                  <h2>Watch The Official Video for “Options” ft. Stephen Marley</h2>
                  <p className="lead">
                    Melbourne is the coastal capital of the southeastern Australian state of Victoria. At the city's centre is the modern Federation Square development, with plazas, bars, and restaurants by the Yarra River.
                  </p>
                  {/* <a href="#">Read more ›</a> */}
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
    )
}
export default Block