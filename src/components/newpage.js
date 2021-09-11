import React, {useEffect, useState} from "react";
import ReactPaginate from 'react-paginate';
import { Router, useParams, useRouteMatch } from "react-router-dom";
import  '../App.css';
import {Baseurl} from './url'
import InnerImageZoom from 'react-inner-image-zoom'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
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
const NewPage = () => {
    

    const{page} = useParams()
  
    const [items, setItems] = useState([])

    let {path , url} = useRouteMatch()


    const [data,setData] = useState([])
    const [currentp,setCurrent] = useState(1)
    const [totalPage,setTotalPages] = useState(1)
    const [newstoreLogo, setnewStoreLogo] = useState([])
    useEffect(() => {
        const getFlyers = async () => {
            var arr = url.split('/'); 

             const adName = arr[arr.length-2]
            const res = await fetch(`${Baseurl}/v1/weeklyAd?adName=${adName}&limit=${page}`);
            const json = await res.json();
            setData(json.data)
            console.log(json.data.storeName)
            setTotalPages(json.data.fullImageLink.length)
            setItems(json.url);
            

        };
        getFlyers();
        
    }, [])
    const getnewStoreLogo = async () => {
        const res = await fetch(`${Baseurl}/v1/storename?stName=${data.storeName}`);
        const logoData = await res.json();
        console.log(logoData);
        setnewStoreLogo(logoData);
    }
    getnewStoreLogo();

   
    const handlePageClick = async (datas) => {
        let currentPage = datas.selected + 1;
        const imageUrl = url.substring(0, url.lastIndexOf("/") + 1);
        window.location.replace(imageUrl+currentPage);
    }


    // Subscription form


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


            <div className="container-fluid pt-5 pb-5" style={{background:"#F9F9F9"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                        <div className="store-logo store-logo-desk text-center mb-4 pt-4 pb-4" style={{background:"white"}}>
                                <a href={"/"+newstoreLogo.storeUrlName}>
                                <img src={newstoreLogo.storeLogoImg} style={{height:"100px", width:"100px",objectFit:"contain", boxShadow:"0px 0px 3px rgba(200,200,200,0.7)", borderRadius:"50%"}}></img>
                                </a>
                                <br></br>
                                <a href={"/"+newstoreLogo.storeUrlName}>
                                <button className="mt-3" style={{background:"#2874F0", border:"none", borderRadius:"25px", padding:"0.2rem 1rem", color:"white", fontSize:"13px"}}>
                                    Latest Offers
                                </button>
                                </a>
                            </div>

                            
                            <div className="ad-for-desk pt-3 pb-3" style={{position:"-webkit-sticky", position:"sticky", top:"0"}}>
                                <Verticalad/>
                        </div>
                        </div>
                        
                        <div className="col-md-6" style={{margin:"auto", justifyContent:"center", marginTop:"1rem"}}>
                            <h4 className="text-center">{data.storeName} Weekly Ad</h4>
                            <p className="mb-4 text-center"> from {data.startDate} to {data.endDate}</p>
                            <div className="ad-for-desk mt-2 mb-4">
                                <Horizontalad/>
                            </div>
                            <div className="ad-for-mobile mt-3 mb-4">
                                <Horizontaldeskad/>
                            </div>
                            <ReactPaginate
                                previousLabel = {'Prev'}
                                nextLabel = {'Next'}
                                breakLabel = {'...'}
                                pageRangeDisplayed = {2}
                                pageCount = {totalPage}
                                marginPagesDisplayed = {1}
                                ReactPaginate = {1}
                                onPageChange = {handlePageClick}
                                containerClassName = {'pagination'}
                                pageClassName = {'page-item'}
                                pageLinkClassName = {'page-link'}
                                previousClassName = {'page-item'}
                                previousLinkClassName = {'page-link'}
                                nextClassName =  {'page-item'}
                                nextLinkClassName = {'page-link'}
                                breakClassName = {'page-item'}
                                breakLinkClassName = {'page-link'}
                                activeClassName = {'active'}
                                forcePage = {page -1 }
                            />
                            
                                
                                    
                                    
                                            <div  className="flyer-full-ad text-center">
                                                
                                                    <InnerImageZoom src={items} alt="" style={{width:"100%"}}></InnerImageZoom>
                                                
                                                
                                            </div>
                                        
                                    
                                

                            <br></br>
                            <div className="ad-for-desk mt-2 mb-4">
                                <Horizontaldeskad/>
                            </div>
                            <div className="ad-for-mobile mt-3 mb-4">
                                <Horizontalad/>
                            </div>
                            <ReactPaginate
                                previousLabel = {'Prev'}
                                nextLabel = {'Next'}
                                breakLabel = {'...'}
                                pageRangeDisplayed = {2}
                                pageCount = {totalPage}
                                marginPagesDisplayed = {1}
                                ReactPaginate = {1}
                                onPageChange = {handlePageClick}
                                containerClassName = {'pagination'}
                                pageClassName = {'page-item'}
                                pageLinkClassName = {'page-link'}
                                previousClassName = {'page-item'}
                                previousLinkClassName = {'page-link'}
                                nextClassName =  {'page-item'}
                                nextLinkClassName = {'page-link'}
                                breakClassName = {'page-item'}
                                breakLinkClassName = {'page-link'}
                                activeClassName = {'active'}
                                forcePage = {page - 1}

                            />
                            
                        </div>
                        <div className="col-md-3">
                        <div className="store-logo store-logo-mobile text-center mb-4 pt-4 pb-4" style={{background:"white"}}>
                                <a href={"/"+newstoreLogo.storeUrlName}>
                                <img src={newstoreLogo.storeLogoImg} style={{height:"100px", width:"100px",objectFit:"contain", boxShadow:"0px 0px 3px rgba(200,200,200,0.7)", borderRadius:"50%"}}></img>
                                </a>
                                <br></br>
                                <a href={"/"+newstoreLogo.storeUrlName}>
                                <button className="mt-3" style={{background:"#2874F0", border:"none", borderRadius:"25px", padding:"0.2rem 1rem", color:"white", fontSize:"13px"}}>
                                    Latest Offers
                                </button>
                                </a>
                        </div>
                        <div className="subscription-form pt-5 pb-5" style={{marginRight:"0"}}>
                                
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
                            <div className="ad-for-mobile mt-3 mb-4">
                                <Horizontalad/>
                            </div>    
                        <div className="ad-for-desk pt-3 pb-3" style={{position:"-webkit-sticky", position:"sticky", top:"0"}}>
                            <Verticalad/>
                        </div>
                        </div>
                    </div>
                </div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{`Weekly ad - ${data.adTitle} ${data.startDate} to ${data.endDate}`}</title>
                    
                </Helmet>
            </div>
        </>
    )
    
}
export default NewPage;
