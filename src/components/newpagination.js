import {useEffect, useState} from "react";
import ReactPaginate from 'react-paginate';
import { useParams, useRouteMatch } from "react-router-dom";
import  '../App.css';
import {Baseurl} from './url'
import InnerImageZoom from 'react-inner-image-zoom'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import {Helmet} from 'react-helmet';
var moment = require('moment');
console.log("date",moment().format("dddd")); 


const NewPagination = () => {
    
    const [items, setItems] = useState([])
    let {path , url} = useRouteMatch()
    const {adname} = useParams()
    const [data,setData] = useState([])
    console.log(data)
    const [currentp,setCurrent] = useState(1)
    const [totalPage,setTotalPages] = useState(1)
    
    useEffect(() => {
        const getFlyers = async () => {
        
            const res = await fetch(`${Baseurl}/v1/weeklyAd?adName=${adname}&limit=1`);
            const json = await res.json();
            console.log(json.data)
            setData(json.data)
            setTotalPages(json.data.fullImageLink.length)
            setItems(json.url);
            

        };
        getFlyers();
        
        
        
    }, [])

   
    const handlePageClick = async (datas) => {
        let currentPage = datas.selected + 1;
        window.location.replace(url+"/"+currentPage);
        
    }

    var startFullDate = moment(data.startDate, "DD/MM/YYYY")
    var endFullDate = moment(data.endDate, "DD/MM/YYYY")
    const startDay = moment(startFullDate).format("dddd")
    const endDay = moment(endFullDate).format("dddd")
    return(
        <>


            <div className="container-fluid pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            
                        </div>
                        
                        <div className="col-md-6" style={{margin:"auto", justifyContent:"center"}}>
                            <h4 className="text-center">{data.storeName} Weekly Ad</h4>
                            <p className="mb-4 text-center"> from {startDay} {data.startDate} to {endDay} {data.endDate}</p>
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
                                forcePage = {currentp -1 }
                            />
                            
                                
                                    
                                    
                                            <div  className="flyer-full-ad text-center">
                                                
                                                    <InnerImageZoom mobileBreakpoint={576} src={items}  zoomSrc={items} alt="" style={{width:"100%"}}></InnerImageZoom>
                                                
                                                
                                            </div>
                                        
                                    
                                

                            <br></br>
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
                                forcePage = {currentp - 1}

                            />
                            
                        </div>
                        <div className="col-md-3">

                        </div>
                    </div>
                </div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{`Weekly ad - ${adname} ${data.startDate} to ${data.endDate}`}</title>
                    
                </Helmet>
            </div>
        </>
    )
    
}
export default NewPagination;
