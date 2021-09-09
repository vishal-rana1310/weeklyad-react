import { event } from 'jquery';
import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import {Baseurl} from './url'
import {Helmet} from 'react-helmet';
const CategoryStores = () => {

    const {categoryName} = useParams();
    const [store, setStores] = useState([])
    const [categoryPageWeeklyAd, setcategoryPageWeeklyAd] = useState([])
    useEffect(() => {
        const getStores = async () => {
            const res = await fetch(`${Baseurl}/v1/catStore?catName=${categoryName}`);
            const data = await res.json();
            setStores(data);

        };
        
        getStores();
        
        
        const getCategoryPageAds = async () => {
            const res = await fetch(`${Baseurl}/v1/popweeklyad`);
            const data = await res.json();
            
            
            setcategoryPageWeeklyAd(data);
        

        };
        getCategoryPageAds();
        
    }, [])
   let emailInput  = React.createRef();
   const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      console.log(emailInput.current.value);
      fetch(`${Baseurl}/v1/subs`, {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
              "email":emailInput.current.value
        })
     });
    }
    }
   function handleClick() {
    console.log(emailInput.current.value);

    
    fetch(`${Baseurl}/v1/subs`, {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
              "email":emailInput.current.value
        })
     });

  }
  

    


    return(
        <>
            <div className="container-fluid pt-5 pb-5" style={{background: "#f2fdfc"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 sidebar">
                            <div className="categorywise-store-list">
                                <h5>{categoryName}</h5>
                                <ul>
                                    {
                                        store.map((item) => {
                                            return(
                                                <li><a href={"/"+item.storeTitle}>{item.storeTitle}</a></li>

                                            )
                                        })
                                    }
                                    
                        
                                </ul>
                            </div>
                            <div className="subscription-form mt-3 pt-5 pb-5">
                                
                                <i class="fa fa-envelope-o" aria-hidden="true" style={{fontSize:"100px"}}></i>
                                <p>Subscribe to our offers</p>
                                <input ref={emailInput} onKeyPress={handleKeyPress} type="email" placeholder="Enter email.."/>
                                <button onClick={handleClick} className="subscribe mt-3">
                
                                      Subscribe
                                </button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h4 className="mb-3">Best offers from category {categoryName}</h4>
                            <div className="row top-stores-row">
                                {
                                    store.map((item) => {
                                        return(
                                            <div className="store-name col-md-3 pt-3 text-center" style={{width: "23%"}}>
                                                <a href={"/"+item.storeTitle}>
                                                <img src={item.storeLogoImg} alt="#!" style={{width: "80%", objectFit: "contain", height: "60%"}}/>
                                                <p className="text-center mt-1">{item.storeTitle}</p>
                                                </a>
                                                
                                            </div>
                                        )
                                    })
                                }
                                

                            
                            </div>
                            <br/>

                            <h4 className="mb-3">Top weekly ads from top stores</h4>
                            <div className="row flyer-card-row">
                                {
                                    categoryPageWeeklyAd.map((item) => {
                                        return(
                                            <div className="col-md-4 p-2">
                                                <a href={"/"+item.storeName+"/"+item.adTitle}>
                                                    <div className="flyer-card">
                                                        
                                                                
                                            
                                                        <div className="flyer-img">
                                                            <img src={item.prevImgLink} alt="#!" style={{width: "100%", height: "100%", objectFit: "cover", objectPosition: "top"}}/>
                                                        </div>
                                                        <div className="card-detail pt-1 text-center">
                                                            <p style={{margin: "0"}}>
                                                                <b>{item.storeName}</b>
                                                            </p>
                                                            <span style={{fontSize:"12px"}}>Weekly Ad</span><br/>
                                                            <span style={{fontSize: "12px"}}>{item.startDate} - {item.endDate}</span>
                                                            <a href={"/"+item.storeName+"/"+item.adTitle}>
                                                                <button className="view-offer">View Offer</button>
                                                            </a>
                                                        </div>
                                                    </div>
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
                <Helmet>
                    <meta charSet="utf-8" />
                    <meta name="description" content="Category wise stores"/>
                    <title>{categoryName} Stores</title>

                </Helmet>
            </div>
            

        </>
    )
}

export default CategoryStores;