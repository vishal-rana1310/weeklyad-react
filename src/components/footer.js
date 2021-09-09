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
                        <div className="subscription-form" style={{background:"none", border:"0", padding:"0"}}>
                                
                
                        
                                <input style={{width:"100%"}} type="text" placeholder="Enter email.."/>
                                <button className="subscribe mt-3" style={{width:"100%"}}>
                
                                      Subscribe
                                </button>
                            </div>
                    </div>
                    <div className="col-md-3 p-2">
                        <h3 style={{color: "white"}}>Pages</h3>
                        <ul className="footer-nav-1" style={{listStyle: "disc"}}>
                            
                            <li>
                                <a href="/about">About Us</a>
                            </li>
                            <li>
                                <a href="/contact">Contact Us</a>
                            </li>
                            <li>
                                <a href="/privacy">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="/terms">Terms</a>
                            </li>
                            <li>
                                <a href="/sitemap">Sitemap</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 p-2">
                        <h3 style={{color: "white"}}>Top Categories</h3>
                        <ul className="footer-nav-1" style={{listStyle: "disc"}}>
                            <li>
                                <a href="/categories/Finance">Finance</a>
                            </li>
                            <li>
                                <a href="/categories/Office">Office Supplies</a>
                            </li>
                            <li>
                                <a href="/categories/Food">Food</a>
                            </li>
                            <li>
                                <a href="/categories/Fitness">Fitness</a>
                            </li>
                            <li>
                                <a href="/categories/Entertainment">Entertainment</a>
                            </li>
                            <li>
                                <a href="/categories/sitemap">Sitemap</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 p-2">
                        <h3 style={{color: "white"}}>Top Stores</h3>
                        <ul className="footer-nav-1" style={{listStyle: "disc"}}>
                            <li>
                                <a href="/Target">Target</a>
                            </li>
                            <li>
                                <a href="/Wallgreens">Wallgreens</a>
                            </li>
                            <li>
                                <a href="/Acme">Acme</a>
                            </li>
                            <li>
                                <a href="/lidl">Lidl</a>
                            </li>
                            <li>
                                <a href="/dsw">DSW</a>
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