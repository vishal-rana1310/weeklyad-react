import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
var moment = require('moment');
console.log("date",moment().format("DD/MM/YY")); 
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
            const res = await fetch(`http://192.168.1.8:3000/v1/weeklyAd/byStore?storeName=${store}`);
            const data = await res.json();
            console.log(data);
            setAds(data);

        };
        getAds();

        const getStoreInfo = async () => {
            const res = await fetch(`http://192.168.1.8:3000/v1/storename?stName=${store}`);
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
                        <div className="flyer-card" style={{opacity:"0.5"}}>
                            <div className="flyer-img">
                                <img className="expried-tag" src="https://www.offermate.us/img/neaktual-en.png" alt="" style={{width:"100px"}}></img> 
                                <a href={"/"+store+"/"+item.adTitle}>
                                    <img src={item.prevImgLink} alt="" style={{width: "100%", height: "100%", objectFit: "cover", objectPosition: "top"}}/>
                                </a>
                            </div>
                            <div className="card-detail pt-1 text-center">
                                <p style={{margin: "0"}}>
                                    <b>WeeklyAd</b>
                                </p>
                                <span style={{fontSize: "12px"}}>{item.startDate} - {item.endDate}</span>
                                <a href="">
                                    <button className="view-offer">View Offer</button>
                                </a>
                            </div>
                        </div>
                    </div>
                )
            }
            else{
                return (
                    <div className="col-md-4 p-2">
                        <div className="flyer-card" style={{opacity:"1"}}>
                        <div className="flyer-img">
                        
                            <a href={"/"+store+"/"+item.adTitle}>
                                <img src={item.prevImgLink} alt="" style={{width: "100%", height: "100%", objectFit: "cover", objectPosition: "top"}}/>
                            </a>
                        </div>
                        <div className="card-detail pt-1 text-center">
                            <p style={{margin: "0"}}>
                                <b>WeeklyAd</b>
                            </p>
                            <span style={{fontSize: "12px"}}>{item.startDate} - {item.endDate}</span>
                            <a href="">
                                <button className="view-offer">View Offer</button>
                            </a>
                        </div>
                    </div>
                    </div>
                )
            }
        }
        else{
            return (
                <div className="col-md-4 p-2">
                    <div className="flyer-card" style={{opacity:"1"}}>
                        <div className="flyer-img">
                        <img className="expried-tag" src="https://image.shutterstock.com/image-vector/new-red-3d-square-button-260nw-222974095.jpg" alt="" style={{width:"100px"}}></img> 
                            <a href={"/"+store+"/"+item.adTitle}>
                                <img src={item.prevImgLink} alt="" style={{width: "100%", height: "100%", objectFit: "cover", objectPosition: "top"}}/>
                            </a>
                        </div>
                        <div className="card-detail pt-1 text-center">
                            <p style={{margin: "0"}}>
                                <b>WeeklyAd</b>
                            </p>
                            <span style={{fontSize: "12px"}}>{item.startDate} - {item.endDate}</span>
                            <a href="">
                                <button className="view-offer">View Offer</button>
                            </a>
                        </div>
                    </div>
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
                            <h4 className="mb-3">{storeInfo.storeTitle} Circular and weekly ads</h4>
                            
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
                            <h4>{storeInfo.storeTitle} Ad</h4>
                            <hr/>
                            <h6 style={{color: "rgb(146, 146, 146)"}}>Description</h6>
                            <hr/>
                            <div className="store-des">
                                <div className="store-des-img">
                                    <img src={storeInfo.storeLogoImg} alt="" style={{width: "100%", height: "100%", objectFit: "contain", objectPosition: "top"}}/>
                                </div>
                                <div className="store-des-content">
                                    <p>
                                    {storeInfo.storeDescription}
                                    </p>
                                </div>
                            </div>


                            
                        </div>
                        <div className="col-md-3">
                            
                        </div>
                    </div>
                </div>
            </div>
            

        </>
    )
}

export default Store;