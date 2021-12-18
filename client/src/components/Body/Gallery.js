
import React, { useState } from 'react';

const Gallery = () => {
    return (
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
                <a href="img/10.jpg" className="popup-image mb-0">
                  <img className="animated" alt="" src="img/album/img1.png" /></a>
                <a href="img/11.jpg" className="popup-image mb-0">
                  <img className="animated" alt="" src="img/album/img2.png" /></a>
                <a href="img/12.jpg" className="popup-image mb-0">
                  <img className="animated" alt="" src="img/album/img3.png" /></a>
                <a href="img/13.jpg" className="popup-image mb-0">
                  <img className="animated" alt="" src="img/album/img4.png" /></a>
                <a href="img/20.jpg" className="popup-image mb-0">
                  <img className="animated" alt="" src="img/album/img5.png" /></a>
                <a href="img/14.jpg" className="popup-image mb-0">
                  <img className="animated" alt="" src="img/album/img6.png" /></a>
                <a href="img/15.jpg" className="popup-image mb-0">
                  <img className="animated" alt="" src="img/album/img7.png" /></a>
                <a href="img/16.jpg" className="popup-image mb-0">
                  <img className="animated" alt="" src="img/album/img8.png" /></a>
                <a href="img/17.jpg" className="popup-image mb-0">
                  <img className="animated" alt="" src="img/album/img12.png" /></a>
              </div>
              {/* <a className="btn btn-primary uppercase with-ico mt-5" href="#"><i className="icon-instagram" />Follow us @mousiqua</a> */}
            </div>
          </div>
          {/*End row*/}
        </div>
        {/*End container*/}
      </section>
    )
}
export default Gallery