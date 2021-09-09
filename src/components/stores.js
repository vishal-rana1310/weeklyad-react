import React, {useState, useEffect} from 'react';
import {Baseurl} from './url'
import {Helmet} from 'react-helmet';
const Stores = () => {
    const [allStores, setAllStores] = useState([])
    
    useEffect(() => {
        const getAllStores = async () => {
            const res = await fetch(`${Baseurl}/v1/allStores`);
            const data = await res.json();
            setAllStores(data);
            console.log(data);

        };
        
        getAllStores();
        
    }, [])
    return(
        <React.Fragment>
            <div className="container-fluid pt-5 pb-5" style={{background: "#f2fdfc"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">

                        </div>
                        <div className="col-md-6">
                            <h4 className="mb-3 text-center">All Stores</h4>
                            <div className="row top-stores-row">
                                {
                                    allStores.map((item) => {
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
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Stores Avm Flyers</title>

                </Helmet>
            </div>

        </React.Fragment>
    )
}

export default Stores;