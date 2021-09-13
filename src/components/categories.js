import React, {useState, useEffect} from 'react';
import {Baseurl} from './url'
import {Helmet} from 'react-helmet';
const Categories = () => {
    const [allCategories, setAllCategories] = useState([])
    
    useEffect(() => {
        const getAllCategories = async () => {
            const res = await fetch(`${Baseurl}/v1/category`);
            const data = await res.json();
            setAllCategories(data);

        };
        
        getAllCategories();
        
    }, [])
    return(
        
        <React.Fragment>
            <div className="container-fluid pt-5 pb-5" style={{background: "#F9F9F9"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">

                        </div>
                        <div className="col-md-6">
                            <h4 className="mb-3 text-center">All Categories</h4>
                            <div className="row top-stores-row top-categories-row">
                            <div className="col-md-3 store pt-2 text-center" style={{width: "23%"}}>
                                <a href="/categories/home-garden">
                                    <img src="/images/home.webp" alt="" style={{width: "80%", objectFit: "contain", height: "60%"}}/>
                                        <p className="text-center mt-1">Home, Garden</p>
                                </a>
                            </div>
                            <div className="col-md-3 store pt-2 text-center" style={{width: "23%"}}>
                                <a href="/categories/office-supplies">
                                    <img src="/images/office.webp" alt="" style={{width: "80%", objectFit: "contain", height: "60%"}}/>
                                        <p className="text-center mt-1">Office Supplies</p>
                                </a>
                            </div>
                            <div className="col-md-3 store pt-2 text-center" style={{width: "23%"}}>
                                <a href="/categories/food">
                                    <img src="/images/Food-01-01.webp" alt="" style={{width: "80%", objectFit: "contain", height: "60%"}}/>
                                        <p className="text-center mt-1">Food</p>
                                </a>
                            </div>
                            <div className="col-md-3 store pt-2 text-center" style={{width: "23%"}}>
                                <a href="/categories/electronics">
                                    <img src="/images/Electronics-01-01.webp" alt="" style={{width: "80%", objectFit: "contain", height: "60%"}}/>
                                        <p className="text-center mt-1">Electronics</p>
                                </a>
                            </div>
                            
                            <div className="col-md-3 store pt-2 text-center" style={{width: "23%"}}>
                                <a href="/categories/fitness">
                                    <img src="/images/Fitness-01-01.webp" alt="" style={{width: "80%", objectFit: "contain", height: "60%"}}/>
                                        <p className="text-center mt-1">Fitness</p>
                                </a>
                            </div>
                            <div className="col-md-3 store pt-2 text-center" style={{width: "23%"}}>
                                <a href="/categories/finance">
                                    <img src="/images/Finance-01-01.webp" alt="" style={{width: "80%", objectFit: "contain", height: "60%"}}/>
                                        <p className="text-center mt-1">Finance</p>
                                </a>
                            </div>
                            <div className="col-md-3 store pt-2 text-center" style={{width: "23%"}}>
                                <a href="/categories/grocery">
                                    <img src="/images/Supermarts-01-01.webp" alt="" style={{width: "80%", objectFit: "contain", height: "60%"}}/>
                                        <p className="text-center mt-1">Grocery</p>
                                </a>
                            </div>
                            <div className="col-md-3 store pt-2 text-center" style={{width: "23%"}}>
                                <a href="/categories/fashion">
                                    <img src="/images/Fashion.webp" alt="" style={{width: "80%", objectFit: "contain", height: "60%"}}/>
                                        <p className="text-center mt-1">Fashion</p>
                                </a>
                            </div>
                            <div className="col-md-3 store pt-2 text-center" style={{width: "23%"}}>
                                <a href="/categories/games">
                                    <img src="/images/Game-01-01.webp" alt="" style={{width: "80%", objectFit: "contain", height: "60%"}}/>
                                        <p className="text-center mt-1">Games</p>
                                </a>
                            </div>
                            <div className="col-md-3 store pt-2 text-center" style={{width: "23%"}}>
                                <a href="/categories/entertainment">
                                    <img src="/images/Entertainment-01.webp" alt="" style={{width: "80%", objectFit: "contain", height: "60%"}}/>
                                        <p className="text-center mt-1">Entertainment</p>
                                </a>
                            </div>
                            
                            
                            
                            </div>
                        </div>
                        <div className="col-md-3">
                            
                        </div>
                    </div>
                </div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Categories - Avm Flyers</title>
                    
                </Helmet>
                
            </div>

        </React.Fragment>
    )
}

export default Categories;