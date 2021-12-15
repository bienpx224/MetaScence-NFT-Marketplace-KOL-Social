import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';

const HeaderBot  = ()=>{

    return(
      <header>
      <div className="header__warp">
        <div className="row">
          <div className="col-lg-2">
            <a href="index-2.html" className="site__logo">
              <img src="img/xlogo.png.pagespeed.ic.3zPSnGSrom.png" alt="" />
            </a>
          </div>
          <div className="col-lg-8">
            <ul className="main__menu">
              <li><a href="index-2.html" className="menu--active">Home</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="albums.html">Albums</a></li>
              <li><a href="tours.html">Tours</a></li>
              <li><a href="#">Pages</a>
                <ul className="sub__menu">
                  <li><a href="gallery.html">Gallery</a></li>
                  <li><a href="ticket.html">Ticket</a></li>
                  <li><a href="albums-details.html">Albums details</a></li>
                  <li><a href="single-blog.html">Blog single</a></li>
                </ul>
              </li>
              <li><a href="blog.html">Blog</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
          <div className="col-lg-2 text-lg-right d-none d-lg-block">
            <a href="#" className="site__btn">Buy tickets</a>
          </div>
        </div>
      </div>
    </header>
    )
  
}

export default React.memo(HeaderBot);  // Sử dụng memo khi mà trang thường xuyên bị re-render những thành phần ko cần thiết.
// React.memo chỉ có thể xác định việc rerender dựa trên sự thay đổi của props
