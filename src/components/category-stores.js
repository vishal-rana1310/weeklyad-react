import { event } from 'jquery';
import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import {Baseurl} from './url'
import {Helmet} from 'react-helmet';
import Modal from 'react-bootstrap/Modal'
import ModalDialog from 'react-bootstrap/ModalDialog'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import Button from 'react-bootstrap/Button'
import Verticalad from './verticalad';
import Horizontalad from './horizontalad';
import Horizontaldeskad from './horizontalDesktopAd';


const CategoryStores = () => {

    const {categoryName} = useParams();
    const [store, setStores] = useState([])
    const [category, setCategory] = useState([])
    const [categoryPageWeeklyAd, setcategoryPageWeeklyAd] = useState([])
    useEffect(() => {
        const getStores = async () => {
            const res = await fetch(`${Baseurl}/v1/catStore?catName=${categoryName}`);
            const data = await res.json();
            setStores(data);

        };
        
        getStores();
        const getCategory = async () => {
            const res = await fetch(`${Baseurl}/v1/category?catName=${categoryName}`);
            const data = await res.json();
            console.log(data);
            setCategory(data[0]);

        };
        
        getCategory();
        
        
        const getCategoryPageAds = async () => {
            const res = await fetch(`${Baseurl}/v1/popweeklyad`);
            const data = await res.json();
            
            
            setcategoryPageWeeklyAd(data);
        

        };
        getCategoryPageAds();
        
    }, [])
   let emailInput  = React.createRef();
//    let invalidMessage = React.createRef();
   
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
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    
   function handleClick() {
    console.log(emailInput.current.value);

    
    fetch(`${Baseurl}/v1/subs`, {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
              "email":emailInput.current.value
        })
     }).then(res =>{
        // var elem = ''
        // invalidMessage.current.append(elem);
         if(res.status == 201){
            emailInput.current.value = ""
            
            // invalidMessage.current.append(elem);
            setShow(true);
            
         }
         else{
             setShow(false)
            //  elem = 'Please enter a valid email!'
            //  invalidMessage.current.append(elem);
             emailInput.current.value = ""
             

         }
         
     });
     


  }
  

    


    return(
        <>
            <div className="container-fluid pt-5 pb-5" style={{background: "#F9F9F9"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 pt-3 sidebar">
                            <div className="categorywise-store-list">
                                <h5>{categoryName}</h5>
                                <ul>
                                    {
                                        store.map((item) => {
                                            return(
                                                <li><a href={"/"+item.storeUrlName}>{item.storeTitle}</a></li>

                                            )
                                        })
                                    }
                                    
                        
                                </ul>
                            </div>
                            <div className="subscription-form mt-3 pt-5 pb-5">
                                
                                <i class="fa fa-envelope-o" aria-hidden="true" style={{fontSize:"100px"}}></i>
                                <p>Subscribe to our offers</p>
                                <input ref={emailInput} onKeyPress={handleKeyPress} type="email" placeholder="Enter email.."/>
                                <p style={{color:"red", fontSize:"12px"}} className="invalid-email-msg mt-2"></p>
                                <Button variant="primary" onClick={handleClick} className="subscribe">
                
                                      Subscribe
                                </Button>
                                <Modal show={show} onHide={handleClose}>
                                    <ModalHeader style={{justifyContent:"center"}}>
                                    <ModalTitle>
                                        
                                        <h4 className="text-center">Email Subscription</h4>
                                        
                                    </ModalTitle>
                                    </ModalHeader>
                                    <ModalBody>
                                        <div className="text-center">
                                            <img className="text-center" src="/images/icon-01.png" alt="logo"></img>
                                        </div>
                                        <h2 className="text-center" style={{color:"#F18749"}}>Congratulations!!</h2>
                                        <p className="text-center">You have subscribed to our latest offers</p>
                                    </ModalBody>
                                    <ModalFooter>
                                    <Button style={{background:"#2874F0", border:"none", width:"120px"}} variant="success" onClick={handleClose}>
                                        Close
                                    </Button>
                                    
                                    </ModalFooter>
                                </Modal>
                            
                            </div>
                            <div className="ad-for-desk pt-3 mb-4" style={{position:"-webkit-sticky", position:"sticky", top:"0",}}>
                                    <Verticalad/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="ad-for-desk pt-3 mb-4">
                                    <Horizontaldeskad/>
                            </div>
                            <div className="ad-for-mobile mb-4">
                                    <Horizontalad/>
                            </div>
                            <h4 className="mb-3 text-center">Best offers from category {categoryName}</h4>
                            
                            <div className="row top-stores-row">
                                {
                                    store.map((item) => {
                                        return(
                                            <div className="store-name col-md-3 pt-3 text-center" style={{width: "23%"}}>
                                                <a href={"/"+item.storeUrlName}>
                                                <img src={item.storeLogoImg} alt="#!" style={{width: "80%", objectFit: "contain", height: "60%"}}/>
                                                <p className="text-center mt-1">{item.storeTitle}</p>
                                                </a>
                                                
                                            </div>
                                        )
                                    })
                                }
                                

                            
                            </div>
                            <br/>
                            <div className="ad-for-desk mt-2 mb-4">
                                <Horizontaldeskad/>
                            </div>
                            <div className="ad-for-mobile mb-4">
                                <Horizontalad/>
                            </div>

                            <h4 className="mb-3 text-center">Top weekly ads from top stores</h4>
                            <div className="row flyer-card-row">
                                {
                                    categoryPageWeeklyAd.map((item) => {
                                        return(
                                            <div className="col-md-4 p-2">
                                                <a href={"/"+item.storeName+"/"+item.adTitle}>
                                                    <div className="flyer-card">
                                                        
                                                                
                                            
                                                        <div className="flyer-img">
                                                            <img src={item.prevImgLink} alt="#!" style={{width: "100%", height: "100%", objectFit: "cover", objectPosition: "left"}}/>
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
                            <div className="ad-for-desk mt-3 mb-4">
                                <Horizontaldeskad/>
                            </div>
                            
                        </div>
                        <div className="col-md-3">
                            <div className="ad-for-desk pt-3 pb-3" style={{position:"-webkit-sticky", position:"sticky", top:"0"}}>
                                <Verticalad/>
                            </div>
                            <div className="ad-for-mobile mt-4 mb-4">
                                <Horizontalad/>
                            </div>
                        <div className="categorywise-store-list mobile-elem">
                            
                            
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
                        </div>
                    </div>
                </div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <meta name="description" content={category.metaDiscriptions}/>
                    <meta name="keywords" content={category.metaKeywords}/>
                    <title>{categoryName} Stores</title>

                </Helmet>
            </div>
            

        </>
    )
}

export default CategoryStores;