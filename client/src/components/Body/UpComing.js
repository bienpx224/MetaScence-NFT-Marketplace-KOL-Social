
import React, { useState } from 'react';

const UpComing = () => {
    return (

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
    )
}
export default UpComing