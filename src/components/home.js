import React, {useEffect, useState} from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import  '../App.css';
import Carousel from './Carousel';
import {Baseurl} from './url'

const Home = () => {
//     function downloadImage(url, name){
//         const options = {
//             method: 'GET',
//             headers: new Headers({'content-type': 'image/webp'}),
//             mode: 'no-cors'
//         };
//         fetch(url,options)
//           .then(resp => resp.blob("as"))
//           .then(blob => {
              
//               console.log(url);
//               const a = document.createElement('a');
//               a.href = url;
//               // the filename you want
//               a.download = name;
//               document.body.appendChild(a);
//               a.click();
//               window.URL.revokeObjectURL(url);
//           })
//           .catch((e) => alert('An error sorry'));
//   }
//   downloadImage("https://na001.leafletcdns.com/us/data/2/15047/0.webp?t=1630735566","0.webp");

    const [topStore, setTopStore] = useState([])
    const [topCategory, setTopCategory] = useState([])
    useEffect(() => {
        const getTopStores = async () => {
            const res = await fetch(`${Baseurl}/v1/popstore`);
            const data = await res.json();
            
            
            setTopStore(data);
           

        };
        getTopStores();
        const getTopCategories = async () => {
            const res = await fetch(`${Baseurl}/v1/popcategory`);
            const topCatData = await res.json();
            
            
            setTopCategory(topCatData);
        }
        getTopCategories();
    }, [])
    
    
    
    
    return (
        <React.Fragment>
                
        <div className="container-fluid pt-5" style={{background: "#f2fdfc"}}>
            <div className="container" style={{margin: "auto", justifyContent: "center"}}>
                <div className="row">
                    <div className="col-md-3">
                        
                    </div>
                    <div className="col-md-6" style={{margin: "auto", justifyContent: "center"}}>
                        <h4 className="mb-3">Top Weekly Ads and Flyers</h4>
                        <Carousel/>
                        
                          
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
                            {
                                topStore.map((item) => {
                                    return(
                                        <div className="store-name col-md-3 pt-3 text-center" style={{width: "23%"}}>
                                            <a href={"/"+item.storeTitle}>
                                                <img src={item.storeLogoImg} alt="" style={{width: "80%", objectFit: "contain", height: "60%"}}/>
                                                <p className="text-center mt-1">{item.storeTitle}</p>
                                            </a>
                                        </div>
                                    )
                                })
                            }
                            
                            
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

                            {
                                topCategory.map((item) => {
                                    return(
                                        <div className="col-md-3 store pt-2 text-center" style={{width: "23%"}}>
                                            <a href={"/categories/" + item.cateTitle}>
                                                <img src={item.logoLink} alt="" style={{width: "80%", objectFit: "contain", height: "60%"}}/>
                                                <p className="text-center mt-1">{item.cateTitle}</p>
                                            </a>
                                        </div>
                                    )
                                })
                            }
                            
                            
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


