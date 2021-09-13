import React, {useEffect, useState} from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import  '../App.css';
import Carousel from './Carousel';
import {Baseurl} from './url'
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

const Home = () => {

    

    const [topStore, setTopStore] = useState([])
    useEffect(() => {
        const getTopStores = async () => {
            const res = await fetch(`${Baseurl}/v1/popstore?limit=12`);
            const data = await res.json();
            
            
            setTopStore(data);
           

        };
        getTopStores();
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
    
    
    
    return (
        <React.Fragment>
                
        <div className="container-fluid pt-5 pb-5" style={{background: "#F9F9F9"}}>
            <div className="container carousel-container" style={{margin: "auto", justifyContent: "center"}}>
                <div className="row">
                    <div className="col-md-3">
                        <div className="ad-for-desk pt-3 pb-4" style={{position:"-webkit-sticky", position:"sticky", top:"0"}}>
                        
                            <Verticalad/>
                        
                        
                        </div>
                    </div>
                    <div className="col-md-6" style={{margin: "auto", justifyContent: "center"}}>
                        <div className="ad-for-desk pt-3 mb-3">
                            <Horizontaldeskad/>
                        </div>
                        <div className="text-center ad-for-mobile mb-3">
                            <Horizontalad/>
                        </div>

                        <h4 className="mb-3 text-center">Top Weekly Ads and Flyers</h4>
                        <Carousel/>
                        <br/>
                        <div className="ad-for-desk pt-3 mb-4">
                            <Horizontaldeskad/>
                        </div>
                        <div className="ad-for-mobile text-center mb-4">
                            <Horizontalad/>
                        </div>
                        <h4 className="mb-3 text-center">Top Stores of the Season</h4>
                        <div className="row top-stores-row">
                            {
                                topStore.map((item) => {
                                    return(
                                        <div className="store-name col-md-3 pt-3 text-center" style={{width: "23%"}}>
                                            <a href={"/"+item.storeUrlName}>
                                                <img src={item.storeLogoImg} alt="" style={{width: "80%", objectFit: "contain", height: "60%"}}/>
                                                <p className="text-center mt-1">{item.storeTitle}</p>
                                            </a>
                                        </div>
                                    )
                                })
                            }
                            
                            
                        </div>
                        <div className="ad-for-desk pt-4 mb-4">
                            <Horizontaldeskad/>
                        </div>
                        <div className="text-center ad-for-mobile mb-4">
                            <Horizontalad/>
                        </div>
                        <h4 className="mb-3 text-center">Top Categories of the Season</h4>
                        
                        
                        <div className="row top-categories-row top-stores-row">
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
                            
                            
                            
                        </div>
                        <div className="ad-for-desk pt-4 mb-4">
                            <Horizontaldeskad/>
                        </div>
                        <div className="text-center ad-for-mobile mb-4">
                            <Horizontalad/>
                        </div>
                        
                          
                    </div> 
                    <div className="col-md-3">
                        
                        <div className="ad-for-desk pt-3 pb-3" style={{position:"-webkit-sticky", position:"sticky", top:"0"}}>
                            <Verticalad/>
                        </div>
                        <div className="subscription-form mobile-elem mt-3 pt-5 pb-5">
                                
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
                            <div className="text-center ad-for-mobile mt-4 mb-3">
                                <Horizontalad/>
                            </div>
                    </div>

                    </div>
                    
                    
                
            </div>
        </div>
        
        
        </React.Fragment>)
}
export default Home;


