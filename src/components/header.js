import React, {useState, useEffect} from 'react';
import  '../App.css';

import ServerAutoSuggest from '../components/storeSuggestions'
import Navigation from './Navigation';
import {Baseurl} from './url'
import { HeaderStores } from './dropdownmenu';

function Header() {
    
    console.log(HeaderStores[2].catStores);

    

    
  return (
    <>
        
        <div className="container-fluid pt-1 pb-1" style={{background: "#2874F0"}}>

            <div className="container header-container" style={{color: "white"}}>
                <div className="row">
                    <div className="col-md-3 logo">
                        <a href="/" style={{textDecoration:"none"}}>
                            <img src="/avm-logo.webp" style={{width:"160px", height:"50px", objectFit:"contain", marginTop:"2px"}} />
                        </a>
                        <div className="hamburger-menu">
                            <Navigation/>
                        </div>
                    </div>
                    <div className="col-md-6 pt-2 pb-2 search-bar-desk">
                        <ServerAutoSuggest/>
                    </div>
                    <div className="col-md-3 pt-1 menu">
                        <ul className="header-menu d-flex" style={{listStyle: "none"}}>
                            <li>
                                <a href="/stores">Stores</a>
                            </li>
                            <li>
                                <a href="">Blogs</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="container-fluid categories-fluid" style={{background: "white"}}>
            <div className="container">
                <ul className="categories" style={{paddingLeft: "0"}}>
                    <li>
                        
                        <a href="/categories/grocery">
                        <img src="/images/Supermarts-01-01.webp" alt="" style={{width: "60px"}}/>
                        
                        <br/>
                        <a>Grocery</a>
                        </a>
                        <div className="dropdown-cate-menu" id="dropdown-1-category">
                            <a href="/categories/grocery">
                                <strong>Grocery</strong>
                                
                            </a>
                            <div className="menus mt-3" style={{columnCount:"4", columnGap:"2rem"}}>
                                <ul className="dropdown-submenu">
                                    {
                                        HeaderStores[0].catStores.map((item) => {
                                            return(
                                                <li><a href={"/"+item.storeUrlName}>{item.storeTitle}</a></li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="/categories/electronics">
                        <img src="/images/Electronics-01-01.webp" alt="" style={{width: "60px"}}/>
                        <br/>
                        <a className="text-center" href="/categories/electronics">Electronics</a>
                        </a>
                        <div className="dropdown-cate-menu" id="dropdown-2-category">
                            <a href="/categories/electronics">
                                <strong>Electronics</strong>
                                
                            </a>
                            <div className="menus mt-3">
                                <ul className="dropdown-submenu" style={{columnCount:"4", columnGap:"2rem"}}>
                                {
                                        HeaderStores[1].catStores.map((item) => {
                                            return(
                                                <li><a href={"/"+item.storeUrlName}>{item.storeTitle}</a></li>
                                            )
                                        })
                                    }
                                    
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="/categories/fashion">
                        <img src="/images/Fashion.webp" alt="" style={{width: "60px"}}/>
                        <br/>
                        <a className="text-center" href="/categories/fashion">Fashion</a>
                        </a>
                        <div className="dropdown-cate-menu" id="dropdown-3-category">
                            <a href="/categories/fashion">
                                <strong>Fashion</strong>
                                
                            </a>
                            <div className="menus mt-3">
                                <ul className="dropdown-submenu" style={{columnCount:"4", columnGap:"2rem"}}>
                                {
                                        HeaderStores[2].catStores.map((item) => {
                                            return(
                                                <li><a href={"/"+item.storeUrlName}>{item.storeTitle}</a></li>
                                            )
                                        })
                                    }
                                    
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="/categories/finance">
                        <img src="/images/Finance-01-01.webp" alt="" style={{width: "60px"}}/>
                        <br/>
                        <a className="text-center" href="/categories/finance">Finance</a>
                        </a>
                        <div className="dropdown-cate-menu" id="dropdown-4-category">
                            <a href="/categories/finance">
                                <strong>Finance</strong>
                                
                            </a>
                            <div className="menus mt-3">
                                <ul className="dropdown-submenu" style={{columnCount:"4", columnGap:"2rem"}}>
                                {
                                        HeaderStores[3].catStores.map((item) => {
                                            return(
                                                <li><a href={"/"+item.storeUrlName}>{item.storeTitle}</a></li>
                                            )
                                        })
                                    }
                                    
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="/categories/food">
                            <img src="/images/Food-01-01.webp" alt="" style={{width: "60px"}}/>
                            <br/>
                            <a className="text-center">Food</a>
                        </a>
                        <div className="dropdown-cate-menu" id="dropdown-5-category">
                            <a href="/categories/food">
                                <strong>Food</strong>
                                
                            </a>
                            <div className="menus mt-3">
                                <ul className="dropdown-submenu">
                                {
                                        HeaderStores[4].catStores.map((item) => {
                                            return(
                                                <li><a href={"/"+item.storeUrlName}>{item.storeTitle}</a></li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="/categories/game">
                        <img src="/images/Game-01-01.webp" alt="" style={{width: "60px"}}/>
                        <br/>
                        <a className="text-center">Games</a>
                        </a>
                        <div className="dropdown-cate-menu" id="dropdown-6-category">
                            <a href="/categories/game">
                                <strong>Games</strong>
                                
                            </a>
                            <div className="menus mt-3">
                                <ul className="dropdown-submenu">
                                {
                                        HeaderStores[5].catStores.map((item) => {
                                            return(
                                                <li><a href={"/"+item.storeUrlName}>{item.storeTitle}</a></li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="/categories/fitness">
                            <img src="/images/Fitness-01-01.webp" alt="" style={{width: "60px"}}/>
                            <br/>
                            <a className="text-center">Fitness</a>
                        </a>
                        <div className="dropdown-cate-menu" id="dropdown-7-category">
                            <a href="/categories/fitness">
                                <strong>Fitness</strong>
                                
                            </a>
                            <div className="menus mt-3">
                                <ul className="dropdown-submenu" style={{columnCount:"4", columnGap:"2rem"}}>
                                {
                                        HeaderStores[6].catStores.map((item) => {
                                            return(
                                                <li><a href={"/"+item.storeUrlName}>{item.storeTitle}</a></li>
                                            )
                                        })
                                    }
                                    
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="/categories/entertainment">
                        <img src="/images/Entertainment-01.webp" alt="" style={{width: "60px"}}/>
                        <br/>
                        <a className="text-center">Entertainment</a>
                        </a>
                        <div className="dropdown-cate-menu" id="dropdown-8-category">
                            <a href="/categories/entertainment">
                                <strong>Entertainment</strong>
                                
                            </a>
                            <div className="menus mt-3">
                                <ul className="dropdown-submenu">
                                {
                                        HeaderStores[7].catStores.map((item) => {
                                            return(
                                                <li><a href={"/"+item.storeUrlName}>{item.storeTitle}</a></li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </li>
                    
                    <li>
                        <a href="/categories/home-garden">
                            <img src="/images/home.webp" alt="" style={{width: "60px"}}/>
                            <br/>
                            <a className="text-center">Home</a>
                        </a>
                        <div className="dropdown-cate-menu" id="dropdown-9-category">
                            <a href="/categories/home-garden">
                                <strong>Home, Garden</strong>
                                
                            </a>
                            <div className="menus mt-3">
                                <ul className="dropdown-submenu" style={{columnCount:"4", columnGap:"2rem"}}>
                                {
                                        HeaderStores[8].catStores.map((item) => {
                                            return(
                                                <li><a href={"/"+item.storeUrlName}>{item.storeTitle}</a></li>
                                            )
                                        })
                                    }
                                    
                                    
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="/categories/office-supplies">
                            <img src="/images/office.webp" alt="" style={{width: "60px"}}/>
                            <br/>
                            <a className="text-center">Office</a>
                        </a>
                        <div className="dropdown-cate-menu" id="dropdown-9-category">
                            <a href="/categories/office-supplies">
                                <strong>Office</strong>
                                
                            </a>
                            <div className="menus mt-3">
                                <ul className="dropdown-submenu" style={{columnCount:"4", columnGap:"2rem"}}>
                                    
                                    
                                {
                                        HeaderStores[9].catStores.map((item) => {
                                            return(
                                                <li><a href={"/"+item.storeUrlName}>{item.storeTitle}</a></li>
                                            )
                                        })
                                    }
                                    
                                        
                                    
                                
                                    
                                       
                                    
                              
                                    
                                </ul>
                            </div>
                        </div>
                    </li>
                    
                </ul>
            </div>
            
        </div>
        </>
  )
}

export default Header