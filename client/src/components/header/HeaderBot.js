import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const HeaderBot = () => {

  return (
    <section className="hero__section set-bg" data-setbg="img/hero-bg.png">
      <div className="container text-white">
        <div className="hero__slider owl-carousel">
          <div className="hero__items">
            <span>The electro vibe</span>
            <h2>Tailor Lachiri</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua accumsan lacus vel facilisis. </p>
            <a href="#" className="site__btn">Buy tickets</a>
          </div>
          <div className="hero__items">
            <span>The electro vibe</span>
            <h2>Tailor Lachiri</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua accumsan lacus vel facilisis. </p>
            <a href="#" className="site__btn">Buy tickets</a>
          </div>
        </div>
      </div>
    </section>
  )

}

export default React.memo(HeaderBot);  // Sử dụng memo khi mà trang thường xuyên bị re-render những thành phần ko cần thiết.
// React.memo chỉ có thể xác định việc rerender dựa trên sự thay đổi của props
