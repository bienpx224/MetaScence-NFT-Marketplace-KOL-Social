
import React, { useState } from 'react';
import { showNotification } from '../../utils/util';
import ModalVideo from 'react-modal-video'

const UpComingTour = () => {
  const [isOpen, setOpen] = useState(false)
  const [mail, setMail] = useState("")
  const subscribe = () => {
    if (validateEmail(mail)) {
      showNotification("success", "Thank you", "You have subcribed success")
      setMail("")
    } else {
      showNotification("warning", "Opps!!", "You input wrong")
    }
  }
  const onChangeInput = (event) => {
    setMail(event.target.value)
  }
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  return (

    <section id="tour" className="tour  main bg-secondary">
      <ModalVideo channel='custom' autoplay isOpen={isOpen} url="img/meta/video2.mp4"
        onClose={() => setOpen(false)} />
      {/*Container*/}
      <div className="container">
        {/*Row*/}
        <div className="row justify-content-center ">
          <div className="col-12 col-md-10 col-lg-9">
            <div className="block-content  gap-one-bottom-md text-center">
              <div className="block-title ">
                <h1 className="uppercase">Upcoming tours</h1>
              </div>
            </div>
          </div>
        </div>
        {/*End row*/}
      </div>
      {/*End container*/}
      {/*Container*/}
      <div className="container">
        {/*Row*/}
        <div className="row justify-content-center ">
          <div className="col-12 col-lg-8 col-md-10">

            <ul className="block-tab">
              {/*Tab*/}
              <li className="active ">
                <div className="block-content text-center">
                  <div className="block-video">
                    <img src="img/8.jpg" className="background-img mb-0" alt="" />
                    <a className="video-play-but popup-youtube" onClick={() => setOpen(true)} />
                    <div className="embed-responsive embed-responsive-16by9">
                    </div>
                  </div>
                  <p className=" mt-3"><span className="opc-70">The Big Tour 2021 -</span> <a className="link" href="#"> Ready for all</a> </p>
                </div>
                <div className="block-content gap-one-top-sm text-left">
                  <div className="block-content ">
                    <div className="row">
                      <div className="col-lg-3 col-md-3">
                        <h4 className="switch-fot">14 Mar</h4>
                      </div>
                      <div className="col-lg-4 col-md-4">
                        <h6 className="mb-0 opc-70 uppercase">Melbourne, AU</h6>
                        <span>Rod Laver Arena </span>
                      </div>
                      <div className="col-12 col-lg-5 col-md-5 text-md-right">
                        <a className="btn-s uppercase btn btn-primary with-ico border-2" href="#"><i className="icon-ticket" />Vip</a>
                        <a className="btn-s uppercase btn btn-primary with-ico" href="#"><i className="icon-ticket" />Buy Ticket</a>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="block-content ">
                    <div className="row">
                      <div className="col-lg-3 col-md-3">
                        <h4 className="switch-fot">10 Apr</h4>
                      </div>
                      <div className="col-lg-4 col-md-4">
                        <h6 className="mb-0 opc-70 uppercase">Washington, DC, USA</h6>
                        <span>Capital One Arena</span>
                      </div>
                      <div className="col-12 col-lg-5 col-md-5 text-md-right">
                        <a className="btn-s uppercase btn btn-primary with-ico" href="#"><i className="icon-ticket" />Buy Ticket</a>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
              </li>

            </ul>
          </div>
          <div className="col-12  col-lg-8   col-md-10">
            <div className="block-content  gap-one-top-sm">
              <div className="card  border-dashed">
                <div className="card-body p-5 block-subscribe ">
                  <p className="uppercase text-center mb-4">Subscribe for more events and <br /> news updates</p>
                  <div className="form-row justify-content-center">
                    <div className="col-12 col-md-9 col-lg-8">
                      <div className="form-group">
                        <input value={mail} onChange={onChangeInput} className="form-control form-control-lg" name="email" placeholder="Email Address..." type="email" />
                        <span className="text-small mt-2">* We don’t share your information with anyone.</span>
                      </div>
                    </div>
                    <div className="col-auto">
                      <button onClick={() => { subscribe() }} type="button" className="btn  btn-primary uppercase border-3">
                        Subscribe now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End row*/}
      </div>
      {/*End container*/}
    </section>
  )
}
export default UpComingTour