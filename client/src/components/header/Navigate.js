import React, { useState } from 'react';

const Navigate = () => {
    return (
        <header className="header default">
            <div className=" left-part">
                <a className="logo scroll" href="#wrapper">
                    <h2 className="mb-0 uppercase">mousiqua.</h2>
                </a>
            </div>
            <div className="right-part">
                <nav className="main-nav">
                    <div className="toggle-mobile-but">
                        <a href="#" className="mobile-but">
                            <div className="lines" />
                        </a>
                    </div>
                    <ul className="main-menu list-inline">
                        <li><a className="btn-s uppercase btn btn-primary with-ico border-2" href="#"><i className="icon-ticket" />Limited</a></li>
                        <li><a className="scroll list-inline-item" href="#wrapper">Home</a></li>
                        <li><a className="scroll list-inline-item" href="#about">about</a></li>
                        <li><a className="scroll list-inline-item" href="#discography">discography</a></li>
                        <li><a className="scroll list-inline-item" href="#band">Band</a></li>
                        <li className="dropdown"><a className="scroll list-inline-item" href="#tour">Tours</a>
                        </li>
                        <li><a className="scroll list-inline-item" href="#gallery">Gallery</a></li>
                        <li><a className="scroll list-inline-item " href="#news">News</a>
                        </li>
                        <li><a className="scroll list-inline-item" href="#contact">Contact</a></li>
                        <li className="block-helper">
                            <a href="#album" className="scroll"><span><i className="icon-cd-2" /></span></a>
                        </li>
                        <li className="block-helper">
                            <span className="icon search-ico"><i className="icon-search" /></span>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Navigate;