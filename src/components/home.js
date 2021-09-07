import React, {useEffect, useState} from 'react'
import "@glidejs/glide/src/assets/sass/glide.core.scss";
import "@glidejs/glide/src/assets/sass/glide.theme.scss";

import Glide from "@glidejs/glide";

import  '../App.css';
import InnerImageZoom from 'react-inner-image-zoom';

const config = {
    type: 'carousel',
    perView: 4,
    autoplay: 2000,
    breakpoints: {
        576: {
            perView: 2
        }
    }
}
const Home = () => {
    const ref = React.useRef();
    const wkref = React.useRef();
    const [weeklyAd, setWeeklyAds] = useState([])
    console.log(weeklyAd);

    React.useEffect(() => {
        const slider = new Glide(ref.current, config);
        slider.mount();
        
    }, [ref]);
    React.useEffect(() => {
        const getAds = async () => {
            const res = await fetch(`http://192.168.1.8:3000/v1/popweeklyad`);
            const data = await res.json();
            console.log(data);
            setWeeklyAds(data);
    
    
        };
        getAds();
        
    }, [wkref]);
    
    
    
    return (
        <React.Fragment>
                
        <div className="container-fluid pt-5" style={{background: "#f2fdfc"}}>
            <div className="container" style={{margin: "auto", justifyContent: "center"}}>
                <div className="row">
                    <div className="col-md-3">
                        
                    </div>
                    <div className="col-md-6" style={{margin: "auto", justifyContent: "center"}}>
                        <h4 className="mb-3">Top Weekly Ads and Flyers</h4>
                        <div ref={ref} className="glide">
                            <div className="glide__track" data-glide-el="track">
                              <ul className="glide__slides">
                                <li ref={wkref} className="glide__slide">
                                    <div className="weekly-ad-banner">
                                        <div className="banner">
                                            <img src="./images/Screenshot 2021-07-15 at 3.47.44 PM.png" alt="" style={{width: "100%", height: "100%", objectFit: "cover", objectPosition: "top"}}/>
                                        </div>
                                        <div className="banner-detail pt-3 text-center">
                                            <p style={{margin: "0"}}>
                                                <b>WeeklyAd</b>
                                            </p>
                                            <span style={{fontSize: "12px"}}>01/09/2021 - 01/10/21</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="glide__slide">
                                    <div className="weekly-ad-banner">
                                        <div className="banner">
                                            <img src="./images/Screenshot 2021-07-15 at 3.47.44 PM.png" alt="" style={{width: "100%", height: "100%", objectFit: "cover", objectPosition: "top"}}/>
                                        </div>
                                        <div className="banner-detail pt-3 text-center">
                                            <p style={{margin: "0"}}>
                                                <b>WeeklyAd</b>
                                            </p>
                                            <span style={{fontSize: "12px"}}>01/09/2021 - 01/10/21</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="glide__slide">
                                    <div className="weekly-ad-banner">
                                        <div className="banner">
                                            <img src="./images/Screenshot 2021-07-15 at 3.47.44 PM.png" alt="" style={{width: "100%", height: "100%", objectFit: "cover", objectPosition: "top"}}/>
                                        </div>
                                        <div className="banner-detail pt-3 text-center">
                                            <p style={{margin: "0"}}>
                                                <b>WeeklyAd</b>
                                            </p>
                                            <span style={{fontSize: "12px"}}>01/09/2021 - 01/10/21</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="glide__slide">
                                    <div className="weekly-ad-banner">
                                        <div className="banner">
                                            <img src="./images/Screenshot 2021-07-15 at 3.47.44 PM.png" alt="" style={{width: "100%", height: "100%", objectFit: "cover", objectPosition: "top"}}/>
                                        </div>
                                        <div className="banner-detail pt-3 text-center">
                                            <p style={{margin: "0"}}>
                                                <b>WeeklyAd</b>
                                            </p>
                                            <span style={{fontSize: "12px"}}>01/09/2021 - 01/10/21</span>
                                        </div>
                                    </div>
                                </li>
                              </ul>
                            </div>
                            <div className="glide__arrows" data-glide-el="controls">
                                <button className="glide__arrow glide__arrow--left" data-glide-dir="<">&#10094;</button>
                                <button className="glide__arrow glide__arrow--right" data-glide-dir=">">&#10095;</button>
                            </div>
                            
                            
                            
                        </div>
                        
                          
                    </div> 
                    <div className="col-md-3">
    
                    </div>
                    </div>
                    
                    
                
            </div>
        </div>
        <div className="container-fluid pt-5" style={{background: "#f2fdfc"}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">

                    </div>
                    <div className="col-md-6">
                        <h4 className="mb-3">Top Stores of the Season</h4>
                        <div className="row top-stores-row">
                            <div className="store-name col-md-3 pt-3 text-center" style={{width: "23%"}}>
                                <img src="./images/acme logo.png" alt="" style={{width: "80%", objectFit: "contain", height: "60%"}}/>
                                <p className="text-center mt-1">Acme</p>
                            </div>
                            <div className="col-md-3 pt-3 text-center" style={{width: "23%"}}>
                                <img src="./images/Albertsons.png" alt="" style={{width: "80%", objectFit: "contain", height: "60%"}}/>
                                <p className="text-center mt-1">Albertsons</p>
                            </div>
                            <div className="col-md-3 pt-3 text-center" style={{width: "23%"}}>
                                <img src="./images/avon.png" alt="" style={{width: "80%", objectFit: "contain", height: "60%"}}/>
                                <p className="text-center mt-1">Avon</p>
                            </div>
                            <div className="col-md-3 pt-3 text-center" style={{width: "23%"}}>
                                <img src="./images/Bass Pro.png" alt="" style={{width: "80%", objectFit: "contain", height: "60%"}}/>
                                <p className="text-center mt-1">Bass Pro</p>
                            </div>
                            <div className="col-md-3 pt-3 text-center" style={{width: "23%"}}>
                                <img src="./images/Belk.jpg" alt="" style={{width: "80%", objectFit: "contain", height: "60%"}}/>
                                <p className="text-center mt-1">Belk</p>
                            </div>
                            <div className="col-md-3 pt-3 text-center" style={{width: "23%"}}>
                                <img src="./images/Bi-Mart.png" alt="" style={{width: "80%", objectFit: "contain", height: "60%"}}/>
                                <p className="text-center mt-1">Bi-Mart</p>
                            </div>
                            <div className="col-md-3 pt-3 text-center" style={{width: "23%"}}>
                                <img src="./images/BrandsMart USA.jpeg" alt="" style={{width: "80%", objectFit: "contain", height: "60%"}}/>
                                <p className="text-center mt-1">BrandsMart USA</p>
                            </div>
                            <div className="col-md-3 pt-3 text-center" style={{width: "23%"}}>
                                <img src="./images/CVS Pharmacy.png" alt="" style={{width: "80%", objectFit: "contain", height: "60%"}}/>
                                <p className="text-center mt-1">CVS Pharmacy</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">

                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid pt-5 pb-5" style={{background: "#f2fdfc"}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">

                    </div>
                    <div className="col-md-6">
                        <h4 className="mb-3">Top Categories of the Season</h4>
                        
                        
                        <div className="row top-categories-row top-stores-row">
                            <div className="col-md-3 store pt-2 text-center" style={{width: "23%"}}>
                                <img src="./images/acme logo.png" alt="" style={{width: "80%", objectFit: "contain", height: "60%"}}/>
                                <p className="text-center mt-1">Acme</p>
                            </div>
                            <div className="col-md-3 store pt-2 text-center" style={{width: "23%"}}>
                                <img src="./images/Albertsons.png" alt="" style={{width: "80%", objectFit: "contain", height: "60%"}}/>
                                <p className="text-center mt-1">Albertsons</p>
                            </div>
                            <div className="col-md-3 store pt-2 text-center" style={{width: "23%"}}>
                                <img src="./images/avon.png" alt="" style={{width: "80%", objectFit: "contain", height: "60%"}}/>
                                <p className="text-center mt-1">Avon</p>
                            </div>
                            <div className="col-md-3 store pt-2 text-center" style={{width: "23%"}}>
                                <img src="./images/Bass Pro.png" alt="" style={{width: "80%", objectFit: "contain", height: "60%"}}/>
                                <p className="text-center mt-1">Bass Pro</p>
                            </div>
                            <div className="col-md-3 store pt-2 text-center" style={{width: "23%"}}>
                                <img src="./images/Belk.jpg" alt="" style={{width: "80%", objectFit: "contain", height: "60%"}}/>
                                <p className="text-center mt-1">Belk</p>
                            </div>
                            <div className="col-md-3 store pt-2 text-center" style={{width: "23%"}}>
                                <img src="./images/Bi-Mart.png" alt="" style={{width: "80%", objectFit: "contain", height: "60%"}}/>
                                <p className="text-center mt-1">Bi-Mart</p>
                            </div>
                            <div className="col-md-3 store pt-2 text-center" style={{width: "23%"}}>
                                <img src="./images/BrandsMart USA.jpeg" alt="" style={{width: "80%", objectFit: "contain", height: "60%"}}/>
                                <p className="text-center mt-1">BrandsMart USA</p>
                            </div>
                            <div className="col-md-3 store pt-2 text-center" style={{width: "23%"}}>
                                <img src="./images/CVS Pharmacy.png" alt="" style={{width: "80%", objectFit: "contain", height: "60%"}}/>
                                <p className="text-center mt-1">CVS Pharmacy</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">

                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid pb-5" style={{background: "#f2fdfc"}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">

                    </div>
                    <div className="col-md-6">
                        <h4 className="mb-4">Our Popular Blogs</h4>
                        <div className="mb-4 blog-card d-flex">
                            <div className="thumbnail">
                                <img src="./images/thumb1.jpeg" alt="" style={{width: "100%", objectFit: "cover", height: "120px"}}/>
                            </div>
                            <div className="blog-title">
                                <p className="title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, provident.</p>
                                <p className="date">Published on: 31 Mar, 2021</p>
                            </div>
                        </div>
                        <div className="mb-4 blog-card d-flex">
                            <div className="thumbnail">
                                <img src="./images/thumb2.jpeg" alt="" style={{width: "100%", objectFit: "cover", height: "120px"}}/>
                            </div>
                            <div className="blog-title">
                                <p className="title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, provident.</p>
                                <p className="date">Published on: 31 Mar, 2021</p>
                            </div>
                        </div>
                        <div className="mb-4 blog-card d-flex">
                            <div className="thumbnail">
                                <img src="./images/thumb1.jpeg" alt="" style={{width: "100%", objectFit: "cover", height: "120px"}}/>
                            </div>
                            <div className="blog-title">
                                <p className="title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, provident.</p>
                                <p className="date">Published on: 31 Mar, 2021</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-md-3">

                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>)
}
export default Home;


