import React from 'react';
import Verticalad from './verticalad';
import Horizontalad from './horizontalad';
import Horizontaldeskad from './horizontalDesktopAd';
const Error = () => {
    return(
        <div className="container-fluid pt-5 pb-5" style={{background: "#F9F9F9"}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="ad-for-desk pt-3 mb-4" style={{position:"-webkit-sticky", position:"sticky", top:"0",}}>
                            <Verticalad/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="error-msg text-center">
                            <img src="/images/404-error.webp" alt="error" style={{width:"80%", objectFit:"cover"}}/>
                            <h2>Oops! Page not found</h2>
                            <p>The page you are looking for might have been removed, had its name changed or is temporary unavailable</p>
                            <a href="/">
                                <button style={{background:"#2874F0", color:"white", padding:"0.5rem 1.5rem", border:"none", borderRadius:"30px", fontSize:"15px", fontWeight:"700"}}>GO TO HOMEPAGE</button>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="ad-for-desk pt-3 mb-4" style={{position:"-webkit-sticky", position:"sticky", top:"0",}}>
                            <Verticalad/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Error;