import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MainSlider from './MainSlider';
import BlockSearchForm from './BlockSearchForm';
import Navigate from './Navigate';

const Header = () => {

    return (
        <div className="wrapper">
            <BlockSearchForm />
            <MainSlider />
        </div>
    )

}

export default React.memo(Header);  // Sử dụng memo khi mà trang thường xuyên bị re-render những thành phần ko cần thiết.
// React.memo chỉ có thể xác định việc rerender dựa trên sự thay đổi của props
