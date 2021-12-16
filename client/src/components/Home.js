import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Banner from './banner/Banner';
import Albums from './Body/Albums';
import AboutUs from './Body/AboutUs';
import BlockSearchForm from './header/BlockSearchForm';
import Header from "./header/Header"
import Discovery from './Body/Discovery';
import UpComing from './Body/UpComing';
import Members from './Body/Members';
import UpComingTour from './Body/UpComingTour';
import Gallery from './Body/Gallery';
import Block from './Body/Blog';
import Contact from './Body/Contact';
import Footer from './Footer/Footer';

const Home = () => {
  const [user, setUser] = useState("bieneibe")

  return (
    <div className="wrapper">
      <BlockSearchForm />
      <Header />
      <Albums />
      <AboutUs />
      <Discovery />
      <UpComing />
      <Members />
      <UpComingTour />
      <Gallery />
      <Block />
      <Contact />

      <Footer />
      
      <a className="block-top scroll" href="#wrapper">
        <i className="icon-angle-up" /></a>
    </div>
  )

}

export default React.memo(Home);  // Sử dụng memo khi mà trang thường xuyên bị re-render những thành phần ko cần thiết.
// React.memo chỉ có thể xác định việc rerender dựa trên sự thay đổi của props
