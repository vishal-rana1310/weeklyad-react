import {useEffect, useState} from "react";
import ReactPaginate from 'react-paginate';
import  '../App.css';
const NewPagination = () => {
    
    const [items, setItems] = useState([])
    const[backgroundPosition,setBackground] = useState('0% 0%')
    const state = {
        backgroundImage: `url(${items})`,
        backgroundPosition: backgroundPosition
    }
    const handleMouseMove = e => {
        const { left, top, width, height } = e.target.getBoundingClientRect()
        const x = (e.pageX - left) / width * 100
        const y = (e.pageY - top) / height * 100
        setBackground( `${x}% ${y}%` )
    }
    const [data,setData] = useState([])
    const [currentp,setCurrent] = useState(1)
    const [totalPage,setTotalPages] = useState(1)
    useEffect(() => {
        const getFlyers = async () => {
            const res = await fetch(`http://192.168.1.8:3000/v1/weeklyAd?adName=Weekly-ad-21-21-2`);
            const data = await res.json();
            setData(data)
            setTotalPages(data.fullImageLink.length)
            setItems(data.fullImageLink[0]);
            

        };
        getFlyers();
    }, [])

   
    const handlePageClick = async (datas) => {
        let currentPage = datas.selected + 1;
        setCurrent(currentPage)
        const sendImageToFetch = data.fullImageLink[currentPage -1]
        setItems(sendImageToFetch);
    }
    return(
        <>


            <div className="container-fluid pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">

                        </div>
                        
                        <div className="col-md-6" style={{margin:"auto", justifyContent:"center"}}>
                            <h4>{data.storeName} Weekly Ad</h4>
                            <p className="mb-4"> from Sunday {data.startDate} to Monday {data.endDate}</p>
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
                            
                                
                                    
                                    
                                            <div onClick={handleMouseMove} style={state}  className="flyer-full-ad text-center">
                                                
                                                    <img src={items} alt="" style={{width:"100%"}}></img>
                                                
                                                
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
            </div>
        </>
    )
    
}
export default NewPagination;
