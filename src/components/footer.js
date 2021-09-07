import React from 'react'

function Footer() {
  return (
    <React.Fragment>
        <footer style={{background: "#140f10"}}>
        <div className="container-fluid pt-5 pb-2">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 p-2">
                        <h4 style={{color: "white"}}>Subscribe to our Offers</h4>
                        <p style={{color: "rgb(211, 211, 211)"}}>Receive the latest offers by e-mail and don´t miss out on any special offer</p>
                        <button className="subscribe mt-3">
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                            Subscribe
                        </button>
                    </div>
                    <div className="col-md-3 p-2">
                        <h3 style={{color: "white"}}>Pages</h3>
                        <ul className="footer-nav-1" style={{listStyle: "disc"}}>
                            
                            <li>
                                <a href="#!">About Us</a>
                            </li>
                            <li>
                                <a href="#!">Contact Us</a>
                            </li>
                            <li>
                                <a href="#!">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#!">Terms</a>
                            </li>
                            <li>
                                <a href="#!">Sitemap</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 p-2">
                        <h3 style={{color: "white"}}>Top Categories</h3>
                        <ul className="footer-nav-1" style={{listStyle: "disc"}}>
                            <li>
                                <a href="#!">Finance</a>
                            </li>
                            <li>
                                <a href="#!">Office Supplies</a>
                            </li>
                            <li>
                                <a href="#!">Food</a>
                            </li>
                            <li>
                                <a href="#!">Fitness</a>
                            </li>
                            <li>
                                <a href="#!">Entertainment</a>
                            </li>
                            <li>
                                <a href="#!">Sitemap</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 p-2">
                        <h3 style={{color: "white"}}>Top Stores</h3>
                        <ul className="footer-nav-1" style={{listStyle: "disc"}}>
                            <li>
                                <a href="#!">Target</a>
                            </li>
                            <li>
                                <a href="#!">Wallgreens</a>
                            </li>
                            <li>
                                <a href="#!">Acme</a>
                            </li>
                            <li>
                                <a href="#!">Lidl</a>
                            </li>
                            <li>
                                <a href="#!">DSW</a>
                            </li>
                        </ul>
                    </div>
                    
                </div>
               
            </div>
            <hr style={{background: "white"}}/>
            <div className="container pb-3">
                <p className="p-2 copyright-p" style={{color: "rgb(124, 124, 124)"}}>Copyright © 2021 AdsAdora.com. All rights reserved. Copying the texts without the written consent of the site operator is prohibited.</p>
            </div>
            
        </div>
        
    </footer>
    </React.Fragment>
  )
}

export default Footer