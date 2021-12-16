

import React, { useState } from 'react';

const Contact = () => {
    return (
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
    )
}
export default Contact