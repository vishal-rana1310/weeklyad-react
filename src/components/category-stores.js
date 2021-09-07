import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";

const CategoryStores = () => {

    const {categoryName} = useParams();
    const [store, setStores] = useState([])
    
    useEffect(() => {
        const getStores = async () => {
            const res = await fetch(`http://192.168.1.8:3000/v1/catStore?catName=${categoryName}`);
            const data = await res.json();
            setStores(data);

        };
        
        getStores();
        
    }, [])

    


    return(
        <>
            <div className="container-fluid pt-5 pb-5" style={{background: "#f2fdfc"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">

                        </div>
                        <div className="col-md-6">
                            <h4 className="mb-3">{categoryName}</h4>
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
                            <div className="row flyer-card-row">
                                <div className="col-md-4 p-2">
                                    <div className="flyer-card">
                                       
                                            
                        
                                        <div className="flyer-img">
                                            <img src="../images/Screenshot 2021-07-15 at 3.47.44 PM.png" alt="#!" style={{width: "100%", height: "100%", objectFit: "cover", objectPosition: "top"}}/>
                                        </div>
                                        <div className="card-detail pt-1 text-center">
                                            <p style={{margin: "0"}}>
                                                <b>WeeklyAd</b>
                                            </p>
                                            <span style={{fontSize: "12px"}}>01/09/2021 - 01/10/21</span>
                                            <a href="#!">
                                                <button className="view-offer">View Offer</button>
                                            </a>
                                        </div>
                                    </div>
                                
                                </div>
                                <div className="col-md-4 p-2">
                                    <div className="flyer-card">
                                        <div className="flyer-img">
                                            <img src="../images/Screenshot 2021-07-15 at 3.47.44 PM.png" alt="#!" style={{width: "100%", height: "100%", objectFit: "cover", objectPosition: "top"}}/>
                                        </div>
                                        <div className="card-detail pt-1 text-center">
                                            <p style={{margin: "0"}}>
                                                <b>WeeklyAd</b>
                                            </p>
                                            <span style={{fontSize: "12px"}}>01/09/2021 - 01/10/21</span>
                                            <a href="#!">
                                                <button className="view-offer">View Offer</button>
                                            </a>
                                        </div>
                                    </div>
                                
                                </div>
                                <div className="col-md-4 p-2">
                                    <div className="flyer-card">
                                        <div className="flyer-img">
                                            <img src="../images/Screenshot 2021-07-15 at 3.47.44 PM.png" alt="#!" style={{width: "100%", height: "100%", objectFit: "cover", objectPosition: "top"}}/>
                                        </div>
                                        <div className="card-detail pt-1 text-center">
                                            <p style={{margin: "0"}}>
                                                <b>WeeklyAd</b>
                                            </p>
                                            <span style={{fontSize: "12px"}}>01/09/2021 - 01/10/21</span>
                                            <a href="#!">
                                                <button className="view-offer">View Offer</button>
                                            </a>
                                        </div>
                                    </div>
                                
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

export default CategoryStores;