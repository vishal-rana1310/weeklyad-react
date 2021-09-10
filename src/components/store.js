import {useState, useEffect} from 'react';
import {Baseurl} from './url'
import { useParams } from "react-router-dom";
import {Helmet} from 'react-helmet';
var moment = require('moment');

console.log("date",moment().format("dddd")); 
const Store = () => {
    const {store} = useParams();
    const [ads, setAds] = useState([]);
    const [storeInfo, setStoreInfo] = useState([])
    console.log(storeInfo);
    const style = {
        opacity: 0.7
    }
    const initStyle = {
        opacity: 1
    }
    useEffect(() => {
        const getAds = async () => {
            const res = await fetch(`${Baseurl}/v1/weeklyAd/byStore?storeName=${store}`);
            const data = await res.json();
            console.log(data);
            setAds(data);

        };
        getAds();

        const getStoreInfo = async () => {
            const res = await fetch(`${Baseurl}/v1/storename?stName=${store}`);
            const data = await res.json();
            console.log(data);
            setStoreInfo(data);
        }
        getStoreInfo();
    }, [])

    const  compare = (localDate, startDate, endDate,item) => {
        var localDate = moment(localDate,"DD/MM/YYYY");
        var startDate = moment(startDate,"DD/MM/YYYY");
        var endDate = moment(endDate,"DD/MM/YYYY");
        if(localDate > startDate) {
            if(localDate > endDate) {
                return(
                    <div className="col-md-4 p-2">
                        <a href={"/"+store+"/"+item.adTitle}>
                            <div className="flyer-card">
                                <div className="flyer-img">
                                    <img className="expried-tag" src="/images/expired.png" alt="" style={{width:"100px", zIndex:"10"}}></img> 
                                    <a href={"/"+store+"/"+item.adTitle}>
                                        <img src={item.prevImgLink} alt="" style={{width: "100%", height: "100%", objectFit: "cover", objectPosition: "left", opacity:"0.5"}}/>
                                    </a>
                                </div>
                                <div className="card-detail pt-1 text-center">
                                    <p style={{margin: "0"}}>
                                        <b>{item.storeName}</b>
                                    </p>
                                    <span style={{fontSize:"12px"}}>Weekly Ad</span><br/>
                                    <span style={{fontSize: "12px"}}>{item.startDate} - {item.endDate}</span>
                                    <a href={"/"+store+"/"+item.adTitle}>
                                        <button className="view-offer">View Offer</button>
                                    </a>
                                </div>
                            </div>
                        </a>
                    </div>
                )
            }
            else{
                return (
                    <div className="col-md-4 p-2">
                        <a href={"/"+store+"/"+item.adTitle}>
                            <div className="flyer-card" style={{opacity:"1"}}>
                                <div className="flyer-img">
                                
                                    <a href={"/"+store+"/"+item.adTitle}>
                                        <img src={item.prevImgLink} alt="" style={{width: "100%", height: "100%", objectFit: "cover", objectPosition: "left"}}/>
                                    </a>
                                </div>
                                <div className="card-detail pt-1 text-center">
                                    <p style={{margin: "0"}}>
                                        <b>{item.storeName}</b>
                                    </p>
                                    <span style={{fontSize:"12px"}}>Weekly Ad</span><br/>
                                    <span style={{fontSize: "12px"}}>{item.startDate} - {item.endDate}</span>
                                    <a href={"/"+store+"/"+item.adTitle}>
                                        <button className="view-offer">View Offer</button>
                                    </a>
                                </div>
                            </div>
                        </a>
                    </div>
                )
            }
        }
        else{
            return (
                <div className="col-md-4 p-2">
                    <a href={"/"+store+"/"+item.adTitle}>
                        <div className="flyer-card" style={{opacity:"1"}}>
                            <div className="flyer-img">
                            <img className="expried-tag" src="/images/upcoming.png" alt="" style={{width:"100px"}}></img> 
                                <a href={"/"+store+"/"+item.adTitle}>
                                    <img src={item.prevImgLink} alt="" style={{width: "100%", height: "100%", objectFit: "cover", objectPosition: "left"}}/>
                                </a>
                            </div>
                            <div className="card-detail pt-1 text-center">
                                <p style={{margin: "0"}}>
                                    <b>{item.storeName}</b>
                                </p>
                                <span style={{fontSize:"12px"}}>Weekly Ad</span><br/>
                                <span style={{fontSize: "12px"}}>{item.startDate} - {item.endDate}</span>
                                <a href={"/"+store+"/"+item.adTitle}>
                                    <button className="view-offer">View Offer</button>
                                </a>
                            </div>
                        </div>
                    </a>
                </div>
            )
        }
    }

    
    return(
        <>
            <div className="container-fluid pt-5 pb-5" style={{background: "#f2fdfc"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            
                        </div>
                        <div className="col-md-6">
                            <h4 className="mb-3 text-center">{storeInfo.storeTitle} Circular and weekly ads</h4>
                            
                            <div className="row flyer-card-row">
                                {
                                    ads.map((item) => {
                                        
                                        return(
                                            compare(moment().format("DD/MM/YY"),item.startDate,item.endDate,item)
                                            
                                        )
                                    })
                                }
                                
                            </div>
                            <br/>
                            <h4 className="text-center">{storeInfo.storeTitle}</h4>
                            <hr/>
                            <h6 style={{color: "rgb(146, 146, 146)"}}>Description</h6>
                            <hr/>
                            <div className="store-des">
                                <div className="store-des-img">
                                    <img src={storeInfo.storeLogoImg} alt="" style={{width: "100%", height: "100%", objectFit: "contain", objectPosition: "top"}}/>
                                </div>
                                <div className="store-des-content">
                                    <div dangerouslySetInnerHTML={{ __html: storeInfo.storeDescription }} />
                                </div>
                            </div>


                            
                        </div>
                        <div className="col-md-3">
                            
                        </div>
                    </div>
                </div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <meta name="keywords" content={storeInfo.metaKeywords} />
                    <meta name="description" content={storeInfo.metaDiscriptions} />


                    <title>{store} Weekly Ads and Flyers</title>

                </Helmet>
            </div>
            

        </>
    )
}

export default Store;