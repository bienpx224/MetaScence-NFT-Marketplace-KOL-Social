import React, { useState } from 'react';

const Footer = () => {
    return (
        <footer className="pt-5 pb-5 footer">
            {/*Container*/}
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-md-6">
                        <small className="small"><span>© 2021 all rights reserved - a product of</span> Metascenes.</small>
                    </div>
                    <div className="col-md-6 text-md-right">
                        <ul className="list-inline small">
                            <li className="list-inline-item">
                                <a href="#">Privacy Policy</a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#">Terms of Use</a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#">About</a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#">Legal</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/*End container*/}
        </footer>
    )
}
export default Footer