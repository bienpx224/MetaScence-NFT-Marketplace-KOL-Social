
import React, { useState } from 'react';
import { showNotification } from '../../utils/util';
const Subscribe = () => {


    const [mail, setMail] = useState("")
    const subscribe = () => {
        if (validateEmail(mail)) {
            showNotification("success", "Thank you", "You have subcribed success")
            setMail("")
        } else {
            showNotification("warning", "Opps!!", "You input wrong email")
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
        <div className="container">
            {/*Row*/}
            <div className="row justify-content-center ">
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
        </div>
    )
}

export default Subscribe