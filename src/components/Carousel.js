import React, {useEffect, useState} from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import  '../App.css';
import {Baseurl} from './url'
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "white", color:"black", height:"40px", width:"40px", borderRadius:"50%", display:"grid", placeItems:"center", zIndex:"1000", marginRight:"10px", boxShadow:"0px 0px 5px rgba(200,200,200,0.7)" }}
        onClick={onClick}
      />
          
          
    

    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "white", color:"black", height:"40px", width:"40px", borderRadius:"50%", display:"grid", placeItems:"center", zIndex:"1000", marginLeft:"10px", boxShadow:"0px 0px 5px rgba(200,200,200,0.7)"  }}
        onClick={onClick}
      />
    );
  }
 const Carousel = () => {
    const [image, setImage] = useState([])
    useEffect(() => {
        const getAds = async () => {
            const res = await fetch(`${Baseurl}/v1/popweeklyad`);
            const data = await res.json();
            
            
            setImage(data);
           

        };
        getAds();
    }, [])


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            
        ]
      };
     return(
         <>
            <div>
                <Slider {...settings}>
                    {
                        image.map((item) => {
                            return(
                                <div>
                                    <a href={"/"+item.storeName+ "/" + item.adTitle}>
                                    <div className="weekly-ad-banner m-1">
                                        <div className="banner">
                                            <img src={item.prevImgLink} alt="" style={{width: "100%", height: "100%", objectFit: "cover", objectPosition: "top"}}/>
                                        </div>
                                        <div className="banner-detail pt-3 text-center">
                                            <p style={{margin: "0"}}>
                                                <b>{item.storeName}</b>
                                                
                                            </p>
                                            <span style={{fontSize:"12px"}}>Weekly Ad</span><br/>
                                            <span style={{fontSize: "10px"}}>{item.startDate} - {item.endDate}</span>
                                        </div>
                                    </div>
                                    </a>
                                </div>
                            )
                        })
                    }
                
                
                </Slider>
            </div>
            
  

         </>
     )
 }
 export default Carousel;