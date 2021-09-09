import React, {useState, useEffect} from 'react';
import {Baseurl} from './url'
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
            <div className="container-fluid pt-5 pb-5" style={{background: "#f2fdfc"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">

                        </div>
                        <div className="col-md-6">
                            <h4 className="mb-3 text-center">All Categories</h4>
                            <div className="row top-stores-row top-categories-row">

                            {
                                allCategories.map((item) => {
                                    return(
                                        <div className="store-name col-md-3 pt-3 text-center" style={{width: "23%"}}>
                                           <a href={"/"+"categories" + "/" + item.cateTitle}>
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

        </React.Fragment>
    )
}

export default Categories;