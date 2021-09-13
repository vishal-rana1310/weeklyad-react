import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import ModalDialog from 'react-bootstrap/ModalDialog'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import Button from 'react-bootstrap/Button'
import {Baseurl} from './url'

function Footer() {

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
        <footer style={{background: "#140f10"}}>
        <div className="container-fluid pt-5 pb-2">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 p-2">
                        <h4 style={{color: "white"}}>Subscribe to our Offers</h4>
                        <p style={{color: "rgb(211, 211, 211)"}}>Receive the latest offers by e-mail and don´t miss out on any special offer</p>
                        <div className="subscription-form footer-form" style={{background:"none", border:"0", padding:"0"}}>
                                
                
                        
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
                    </div>
                    <div className="col-md-3 p-2">
                        <h3 style={{color: "white"}}>Pages</h3>
                        <ul className="footer-nav-1" style={{listStyle: "disc"}}>
                            
                            <li>
                                <a href="/about">About Us</a>
                            </li>
                            
                            <li>
                                <a href="/privacy-policy">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="/terms">Terms</a>
                            </li>
                            
                        </ul>
                    </div>
                    <div className="col-md-3 p-2">
                        <h3 style={{color: "white"}}>Top Categories</h3>
                        <ul className="footer-nav-1" style={{listStyle: "disc"}}>
                            <li>
                                <a href="/categories/Finance">Finance</a>
                            </li>
                            <li>
                                <a href="/categories/Office">Office Supplies</a>
                            </li>
                            <li>
                                <a href="/categories/Food">Food</a>
                            </li>
                            <li>
                                <a href="/categories/Fitness">Fitness</a>
                            </li>
                            <li>
                                <a href="/categories/Entertainment">Entertainment</a>
                            </li>
                           
                        </ul>
                    </div>
                    <div className="col-md-3 p-2">
                        <h3 style={{color: "white"}}>Top Stores</h3>
                        <ul className="footer-nav-1" style={{listStyle: "disc"}}>
                            <li>
                                <a href="/Target">Target</a>
                            </li>
                            <li>
                                <a href="/Wallgreens">Wallgreens</a>
                            </li>
                            <li>
                                <a href="/Acme">Acme</a>
                            </li>
                            <li>
                                <a href="/lidl">Lidl</a>
                            </li>
                            <li>
                                <a href="/dsw">DSW</a>
                            </li>
                        </ul>
                    </div>
                    
                </div>
               
            </div>
            <hr style={{background: "white"}}/>
            <div className="container pb-3">
                <p className="p-2 copyright-p" style={{color: "rgb(124, 124, 124)"}}>Copyright © 2021 avmnewslive.com All rights reserved. Copying the texts without the written consent of the site operator is prohibited.</p>
            </div>
            
        </div>
        
    </footer>
    </React.Fragment>
  )
}

export default Footer