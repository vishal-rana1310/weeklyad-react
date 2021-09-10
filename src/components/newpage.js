import {useEffect, useState} from "react";
import ReactPaginate from 'react-paginate';
import { Router, useParams, useRouteMatch } from "react-router-dom";
import  '../App.css';
import {Baseurl} from './url'
import InnerImageZoom from 'react-inner-image-zoom'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import {Helmet} from 'react-helmet';
const NewPage = () => {
    

    const{page} = useParams()
  
    const [items, setItems] = useState([])

    let {path , url} = useRouteMatch()


    const [data,setData] = useState([])
    const [currentp,setCurrent] = useState(1)
    const [totalPage,setTotalPages] = useState(1)
    useEffect(() => {
        const getFlyers = async () => {
            var arr = url.split('/'); 

             const adName = arr[arr.length-2]
            const res = await fetch(`${Baseurl}/v1/weeklyAd?adName=${adName}&limit=${page}`);
            const json = await res.json();
            setData(json.data)
            console.log(json.data)
            setTotalPages(json.data.fullImageLink.length)
            setItems(json.url);
            

        };
        getFlyers();
    }, [])

   
    const handlePageClick = async (datas) => {
        let currentPage = datas.selected + 1;
        const imageUrl = url.substring(0, url.lastIndexOf("/") + 1);
        window.location.replace(imageUrl+currentPage);
    }
    return(
        <>


            <div className="container-fluid pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">

                        </div>
                        
                        <div className="col-md-6" style={{margin:"auto", justifyContent:"center"}}>
                            <h4 className="text-center">{data.storeName} Weekly Ad</h4>
                            <p className="mb-4 text-center"> from {data.startDate} to {data.endDate}</p>
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
