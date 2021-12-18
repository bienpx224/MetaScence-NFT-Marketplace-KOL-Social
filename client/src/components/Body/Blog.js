
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
                <h1 className="uppercase">What about MetaScenes</h1>
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
                {/* <span className="mb-2 opc-70">Dec 18, 2021</span> */}
                <h2>Unique Selling Points of MetaScenes!</h2>
                <p className="lead">
                  <b style={{ color: "#ff8f8f" }}>Celebrities - Idols :</b>
                  <ul>
                    <li> - Saving concert organization cost</li>
                    <li> - Reach more than million fans a time</li>
                    <li> - Optimize benefits</li>
                  </ul>
                </p>
                <p className="lead">
                  <b style={{ color: "#ff8f8f" }}>Fans - Communities: :</b>
                  <ul>
                    <li> - Easy to join concert</li>
                    <li> - Low ticket price</li>
                    <li> - Get ticket change if cannot join whole concert</li>
                    <li> - Get NFT give away</li>
                  </ul>
                </p>
                {/* <a href="#">Read more ›</a> */}
              </div>
            </div>
          </li>
          <li className="row align-items-center justify-content-around">
            <div className="col-12 col-md-6 order-1">
              <div className="block-content">
                <a href="#"><img alt="" className="img-fluid animated" src="img/meta/slider0.jpg" /></a>
              </div>
            </div>
            {/*end of col*/}
            <div className="col-12 col-md-6 col-lg-5  order-2 text-left">
              <div className="block-content text-left">
                {/* <span className="mb-2 opc-70">Dec 18, 2021</span> */}
                <h2>Join our virtual network scence</h2>
                <p className="lead">
                   <br></br>

                  Defi: MST Staking, MST Burning.<br></br>

                  NFT: Celebrities/Idols NFT, Ticket NFT, signatures NFT, gift NFT, marketplace, NFT lending.<br></br>

                </p>
                {/* <a href="#">Read more ›</a> */}
              </div>
            </div>
            {/*end of col*/}
          </li>
          <li className="row align-items-center justify-content-around">
            <div className="col-12 col-md-6 order-md-2">
              <div className="block-content">
                <a href="#"><img alt="" className="img-fluid animated" src="img/meta/stage4.jpg" /></a>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-5  order-md-1 ">
              <div className="block-content text-left">
                {/* <span className="mb-2 opc-70">Dec 18, 2021</span> */}
                <h2>How to join MetaScenes!</h2>
                <p className="lead">
                  {/* <b style={{ color: "#ff8f8f" }}>Celebrities - Idols :</b> */}
                  - Contact MetaScenes customers service team<br></br>
                  - Describes your ideas and requirements for you concert<br></br>
                  - MetaScenes will come back with the draft staging version and quotation<br></br>
                  - Get customers comment and adjust the draft staging version to meet customers expectations<br></br>
                  - MetaScenes prepares the virtual concert<br></br>
                  - Make rehearsal - Make performance
                  - Exchange ticket - Join concert
                  <br></br>
                  {/* <b style={{ color: "#ff8f8f" }}>Fans - Communities :</b>
                  - Visit MetaScenes website and connect wallet<br></br>
                  - Pick a concert for joining<br></br>
                  - Buy NFT ticket<br></br>
                  - Access the concert on time to enjoy performance<br></br>
                  <br></br> */}
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
                {/* <span className="mb-2 opc-70">Dec 18, 2021</span> */}
                <h2>Roadmap MetaScenes</h2>
                <p className="lead">
                  Q1.2022: Virtual staging R&D <br></br>

                  Q2.2022: Token insurance - Token Distribution Portal<br></br>

                  Q3.2022: IDO - Launch MVP MetaScenes<br></br>

                  Q4.2022: Announce representative Idols and time of show<br></br>

                  Q3.2023: Launch MetaScenes main version and NFT marketplace<br></br>

                  Q4.2023: Expand customer segment

                </p>
                {/* <a href="#">Read more ›</a> */}
              </div>
            </div>
            {/*end of col*/}
          </li>
        </ul>

      </div>
      {/*End container*/}
    </section>
  )
}
export default Block