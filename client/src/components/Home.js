import React from 'react';
import AboutUs from './Body/AboutUs';
import BlockSearchForm from './header/BlockSearchForm';
import Header from "./header/Header"
import Members from './Body/Members';
import UpComingTour from './Body/UpComingTour';
import Gallery from './Body/Gallery';
import Block from './Body/Blog';
import Contact from './Body/Contact';
import Footer from './Footer/Footer';
import Subscribe from './Footer/Subcribe';
import ListForm from './ListForm';

const Home = () => {

  return (
    <div className="wrapper">
      {/* <ListForm /> */}
      <BlockSearchForm />
      <Header />
      {/* <Albums /> */}
      <AboutUs />
      <Block />
      {/* <Discovery /> */}
      <UpComingTour />
      <Gallery />
      {/* <UpComing /> */}
      <Members />
      <Contact />
      <Subscribe />
      <Footer />

      <a className="block-top scroll" href="#wrapper">
        <i className="icon-angle-up" /></a>
    </div>
  )

}

export default React.memo(Home);  // Sử dụng memo khi mà trang thường xuyên bị re-render những thành phần ko cần thiết.
// React.memo chỉ có thể xác định việc rerender dựa trên sự thay đổi của props
