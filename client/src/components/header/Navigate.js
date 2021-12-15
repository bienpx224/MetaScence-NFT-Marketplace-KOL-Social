import React, { useState } from 'react';

const Navigate = () => {
    return (
        <header>
            <div className="header__warp">
                <div className="row">
                    <div className="col-lg-2">
                        <a href="index.html" className="site__logo">
                            <img src="data:image/webp;base64,UklGRuQEAABXRUJQVlA4TNgEAAAvrAAPEPdAmG1UqfNHu+cUBAJJ/qhLPP8CAcKC/0gJEvyjWIBBmoCICMOSZKtucw5cxIWLdPe/Xh6SsJ3KZ0T/J4CWbdtx2+jK6dt6IEF0jzjznydByHJQ/xH9nwC8744/clMRIfNfyHPgtPyBEhfj36dw2f9ZbM5VtV5r51LCpjGsq1Ft5mSfygpKnAXfJEHdVhXBbQKpI+VagM4aNs0AxdYkhzJjI0ZfqJOCrXBbFscEjhHTQhtlbEZbkgF0m9CJLPggYd/QBxzLokyUSVmAdNdGCj7IK5JfCDMbRawmkgFbH8tLt8qSkpS9wiCtyBjmOxHLlWTaSyfQbWHtjq4ZSd3MgaqF+ZdpwP5/dZFSNsvgWlmeXYOy5uRh+6WlxZkP7FbaLcG+sqK38m4RbGFNT7Vb2rZzLWx7zm8VbL4trep1x262tOMDyF/CnhPcov8R5Lg+Qvs7lLnrKdsOe0U6mrftn0mDlMoFwH5BBzjt38jEi5Nkqj/hYOj/Srggso/HE+0z9hfUEfuH23JUxgY6GAdVtTarHyAnvqDf1PLBzCFn1/BaGgeRXMzsIFncH3B/bYtxe4fEpN2YfYTgAOcN0r3bQeRQrdbcB5nheiNpqwAtNW95n9j6zD4q9PC61Bnmm/jaNGTVUusRSeY3cmL+uLGTWb/UEyiv2p3bm8J9pQBXIEl544Tu3i+95pxG5sybFDqAvygzeRP3CJKrOQC0TgdXkRC+/n0GskkJqKbJwnyTpP2SByF57zU8tTvPVe6YazOzhuFBsgLwg8O3X0/0XZIcyJrM3PdLuqgChySrDHt8IjM/Oh6IosXMrHR2uvtp5pifJA2wwOnb37kiSbk38InNRx7PeomDDYhS7Nz2MBOcd5EHUsPQu4IHA+koXP06lyVFUpqyzjVHpZZm1MGUmK0TqXN7+lQNpCTV2IXAXr1rnT4h5JW5/HnCuFhvioDdFIC+7wo9xksaOYTCtN8lxnU3yc4JwB2AsxdclgMZKwB7TMlIMmTzq8x+D+KgsslmYu9ekknypkEdZTiBXqKFdLdLOhjWTdfE1HAGwJVknqSHyFAwzI/H44f08+8gQdFG1lzy/Sy7pEKUdaDbHfSkYQGSdAQp9ItHXa1CfwXQhCxonTxRSapjbI/H23/68UtDB1ftNhdzjS1IOqiSYgfcLgeQTeMI3ZSipAZQdLXcqbvC+Qp4Jqs/dqXQMK+Px9f/vv3QuBc8kCVFcA1LSdUlbb2bJG0n0KOk0Pqu+wOqlSQpAiRJ2nKn7ZLk73JMgMJgXXjipj4en9++aWwceCKM6qiV5N2UOoeGljuw69kM3oskFcDNQmpwHhp6fQ9dQKF09A0en/+bojeN0iiV5uSTFjV5FC/vgdvFue9Jt+5z5z0kbvPlP915BPIlQxhZ41r0rL1HM12PmzOZbo0nbFCW2ib+47cmzTcgXhpV9/uRc9LLLe26jcW9pl2z72RLkMH51k1zAw5JG2wTK4wQXqUD24sAFEmFoqUecLwqD9pmdkI37Zy2lgz1VXHgW8l3B1rqfdNyznfwJWMfsXctlWHSethm/AEXklE3Sz1d+qEVHc8Ewc1yOnbf6EANWu4B5BmkIHLrIxvgWvAOpKnLkfIX2Falk25TAIp+ARVIS9rqpqfPb2Bp08oB" alt="" />
                        </a>
                    </div>
                    <div className="col-sm-8">
                        <ul className="main__menu">
                            <li><a href="index.html" className="menu--active">Home</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="albums.html">Albums</a></li>
                            <li><a href="tours.html">Tours</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 text-lg-right d-none d-lg-block">
                        <a href="#" className="site__btn">Buy tickets</a>
                    </div>
                </div>

                <div className="slicknav_menu"><a href="#" aria-haspopup="true" role="button" tabIndex={0} className="slicknav_btn slicknav_collapsed" style={{ outline: 'none' }}><span className="slicknav_menutxt">MENU</span><span className="slicknav_icon"><span className="slicknav_icon-bar" /><span className="slicknav_icon-bar" /><span className="slicknav_icon-bar" /></span></a><ul className="slicknav_nav slicknav_hidden" aria-hidden="true" role="menu" style={{ display: 'none' }}>
                    <li><a href="index.html" className="menu--active" role="menuitem" tabIndex={-1}>Home</a></li>
                    <li><a href="about.html" role="menuitem" tabIndex={-1}>About</a></li>
                    <li><a href="albums.html" role="menuitem" tabIndex={-1}>Albums</a></li>
                    <li><a href="tours.html" role="menuitem" tabIndex={-1}>Tours</a></li>
                    <li className="slicknav_collapsed slicknav_parent"><a href="#" role="menuitem" aria-haspopup="true" tabIndex={-1} className="slicknav_item slicknav_row" style={{ outline: 'none' }} /><a href="#" tabIndex={-1}>Pages</a>
                        <span className="slicknav_arrow"><i className="fa fa-angle-right" /></span><ul className="sub__menu slicknav_hidden" role="menu" aria-hidden="true" style={{ display: 'none' }}>
                            <li><a href="gallery.html" role="menuitem" tabIndex={-1}>Gallery</a></li>
                            <li><a href="ticket.html" role="menuitem" tabIndex={-1}>Ticket</a></li>
                            <li><a href="albums-details.html" role="menuitem" tabIndex={-1}>Albums details</a></li>
                            <li><a href="single-blog.html" role="menuitem" tabIndex={-1}>Blog single</a></li>
                        </ul>
                    </li>
                    <li><a href="blog.html" role="menuitem" tabIndex={-1}>Blog</a></li>
                    <li><a href="contact.html" role="menuitem" tabIndex={-1}>Contact</a></li>
                </ul></div>

            </div>

        </header>
    )
}
export default Navigate;