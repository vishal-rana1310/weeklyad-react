import React, {useState, useEffect} from 'react';
import  '../App.css';

import ServerAutoSuggest from '../components/storeSuggestions'
import Navigation from './Navigation';

function Header() {

    
  return (
    <>
        
        <div className="container-fluid pt-1 pb-1" style={{background: "#2874F0"}}>

            <div className="container header-container" style={{color: "white"}}>
                <div className="row">
                    <div className="col-md-3 logo">
                        <a href="/" style={{textDecoration:"none"}}>
                            <img src="/avm-logo.png" style={{width:"160px", height:"50px", objectFit:"contain", marginTop:"2px"}} />
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
                        
                        <a href="/categories/Grocery">
                        <img src="/images/Supermarts-01-01.png" alt="" style={{width: "60px"}}/>
                        
                        <br/>
                        <a>Grocery</a>
                        </a>
                        <div className="dropdown-cate-menu" id="dropdown-1-category">
                            <a href="">
                                <strong>Grocery</strong>
                                
                            </a>
                            <div className="menus mt-3">
                                <ul className="dropdown-submenu">
                                    <li><a href="/Google">Google</a></li>
                                    <li><a href="">Acme</a></li>
                                    <li><a href="">Acme</a></li>
                                    <li><a href="">Acme</a></li>
                                    <li><a href="">Acme</a></li>
                                </ul>
                                <ul className="dropdown-submenu">
                                    <li><a href="">Acme</a></li>
                                    <li><a href="">Acme</a></li>
                                    <li><a href="">Acme</a></li>
                                    <li><a href="">Acme</a></li>
                                    <li><a href="">Acme</a></li>
                                </ul>
                                <ul className="dropdown-submenu">
                                <li><a href="">Acme</a></li>
                                        <li><a href="">Acme</a></li>
                                        <li><a href="">Acme</a></li>
                                        <li><a href="">Acme</a></li>
                                        <li><a href="">Acme</a></li>
                                </ul>
                                <ul className="dropdown-submenu">
                                <li><a href="">Acme</a></li>
                                        <li><a href="">Acme</a></li>
                                        <li><a href="">Acme</a></li>
                                        <li><a href="">Acme</a></li>
                                        <li><a href="">Acme</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="/categories/Electronics">
                        <img src="/images/Electronics-01-01.png" alt="" style={{width: "60px"}}/>
                        <br/>
                        <a className="text-center" href="/categories/Electronics">Electronics</a>
                        </a>
                        <div className="dropdown-cate-menu" id="dropdown-2-category">
                            <a href="/categories/Electronics">
                                <strong>Electronics</strong>
                                
                            </a>
                            <div className="menus mt-3">
                                <ul className="dropdown-submenu">
                                    <li><a href="">Acme</a></li>
                                    <li><a href="">Wallgreens</a></li>
                                    <li><a href="">T-Mobile</a></li>
                                    <li><a href="">Wegmans</a></li>
                                    <li><a href="">Lidl</a></li>
                                </ul>
                                <ul className="dropdown-submenu">
                                    <li><a href="">Acme</a></li>
                                    <li><a href="">Wallgreens</a></li>
                                    <li><a href="">T-Mobile</a></li>
                                    <li><a href="">Wegmans</a></li>
                                    <li><a href="">Lidl</a></li>
                                </ul>
                                <ul className="dropdown-submenu">
                                    <li><a href="">Acme</a></li>
                                    <li><a href="">Wallgreens</a></li>
                                    <li><a href="">T-Mobile</a></li>
                                    <li><a href="">Wegmans</a></li>
                                    <li><a href="">Lidl</a></li>
                                </ul>
                                <ul className="dropdown-submenu">
                                    <li><a href="">Acme</a></li>
                                    <li><a href="">Wallgreens</a></li>
                                    <li><a href="">T-Mobile</a></li>
                                    <li><a href="">Wegmans</a></li>
                                    <li><a href="">Lidl</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="/categories/Fashion">
                        <img src="/images/Fashion.png" alt="" style={{width: "60px"}}/>
                        <br/>
                        <a className="text-center" href="/categories/Fashion">Fashion</a>
                        </a>
                        <div className="dropdown-cate-menu" id="dropdown-3-category">
                            <a href="">
                                <strong>Fashion</strong>
                                
                            </a>
                            <div className="menus mt-3">
                                <ul className="dropdown-submenu">
                                    <li><a href="">Hobby Lobby</a></li>
                                    <li><a href="">Home Depot</a></li>
                                    <li><a href="">Menards</a></li>
                                    <li><a href="">Bi-Mart</a></li>
                                    <li><a href="">Overstock</a></li>
                                </ul>
                                <ul className="dropdown-submenu">
                                    <li><a href="">Hobby Lobby</a></li>
                                    <li><a href="">Home Depot</a></li>
                                    <li><a href="">Menards</a></li>
                                    <li><a href="">Bi-Mart</a></li>
                                    <li><a href="">Overstock</a></li>
                                </ul>
                                <ul className="dropdown-submenu">
                                    <li><a href="">Hobby Lobby</a></li>
                                    <li><a href="">Home Depot</a></li>
                                    <li><a href="">Menards</a></li>
                                    <li><a href="">Bi-Mart</a></li>
                                    <li><a href="">Overstock</a></li>
                                </ul>
                                <ul className="dropdown-submenu">
                                    <li><a href="">Hobby Lobby</a></li>
                                    <li><a href="">Home Depot</a></li>
                                    <li><a href="">Menards</a></li>
                                    <li><a href="">Bi-Mart</a></li>
                                    <li><a href="">Overstock</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="/categories/Finance">
                        <img src="/images/Finance-01-01.png" alt="" style={{width: "60px"}}/>
                        <br/>
                        <a className="text-center" href="/categories/Finance">Finance</a>
                        </a>
                        <div className="dropdown-cate-menu" id="dropdown-4-category">
                            <a href="">
                                <strong>Finance</strong>
                                
                            </a>
                            <div className="menus mt-3">
                                <ul className="dropdown-submenu">
                                    <li><a href="">Kohl's</a></li>
                                    <li><a href="">DSW</a></li>
                                    <li><a href="">Sportsman Warehouse</a></li>
                                    <li><a href="">Cabela</a></li>
                                    <li><a href="">Overstock</a></li>
                                </ul>
                                <ul className="dropdown-submenu">
                                    
                                        <li><a href="">Kohl's</a></li>
                                        <li><a href="">DSW</a></li>
                                        <li><a href="">Sportsman Warehouse</a></li>
                                        <li><a href="">Cabela</a></li>
                                        <li><a href="">Overstock</a></li>
                                    
                                </ul>
                                <ul className="dropdown-submenu">
                                    
                                        <li><a href="">Kohl's</a></li>
                                        <li><a href="">DSW</a></li>
                                        <li><a href="">Sportsman Warehouse</a></li>
                                        <li><a href="">Cabela</a></li>
                                        <li><a href="">Overstock</a></li>
                                    
                                </ul>
                                <ul className="dropdown-submenu">
                                    <li><a href="">Kohl's</a></li>
                                    <li><a href="">DSW</a></li>
                                    <li><a href="">Sportsman Warehouse</a></li>
                                    <li><a href="">Cabela</a></li>
                                    <li><a href="">Overstock</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="/categories/Food">
                            <img src="/images/Food-01-01.png" alt="" style={{width: "60px"}}/>
                            <br/>
                            <a className="text-center">Food</a>
                        </a>
                        <div className="dropdown-cate-menu" id="dropdown-5-category">
                            <a href="">
                                <strong>Food</strong>
                                
                            </a>
                            <div className="menus mt-3">
                                <ul className="dropdown-submenu">
                                    <li><a href="">Hobby Lobby</a></li>
                                    <li><a href="">Home Depot</a></li>
                                    <li><a href="">Menards</a></li>
                                    <li><a href="">Bi-Mart</a></li>
                                    <li><a href="">Overstock</a></li>
                                </ul>
                                <ul className="dropdown-submenu">
                                    <li><a href="">Hobby Lobby</a></li>
                                    <li><a href="">Home Depot</a></li>
                                    <li><a href="">Menards</a></li>
                                    <li><a href="">Bi-Mart</a></li>
                                    <li><a href="">Overstock</a></li>
                                </ul>
                                <ul className="dropdown-submenu">
                                    <li><a href="">Hobby Lobby</a></li>
                                    <li><a href="">Home Depot</a></li>
                                    <li><a href="">Menards</a></li>
                                    <li><a href="">Bi-Mart</a></li>
                                    <li><a href="">Overstock</a></li>
                                </ul>
                                <ul className="dropdown-submenu">
                                    <li><a href="">Hobby Lobby</a></li>
                                    <li><a href="">Home Depot</a></li>
                                    <li><a href="">Menards</a></li>
                                    <li><a href="">Bi-Mart</a></li>
                                    <li><a href="">Overstock</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="/categories/Game">
                        <img src="/images/Game-01-01.png" alt="" style={{width: "60px"}}/>
                        <br/>
                        <a className="text-center" href="">Games</a>
                        </a>
                        <div className="dropdown-cate-menu" id="dropdown-6-category">
                            <a href="">
                                <strong>Games</strong>
                                
                            </a>
                            <div className="menus mt-3">
                                <ul className="dropdown-submenu">
                                    <li><a href="">Acme</a></li>
                                    <li><a href="">Acme</a></li>
                                    <li><a href="">Acme</a></li>
                                    <li><a href="">Acme</a></li>
                                    <li><a href="">Acme</a></li>
                                </ul>
                                <ul className="dropdown-submenu">
                                <li><a href="">Acme</a></li>
                                        <li><a href="">Acme</a></li>
                                        <li><a href="">Acme</a></li>
                                        <li><a href="">Acme</a></li>
                                        <li><a href="">Acme</a></li>
                                </ul>
                                <ul className="dropdown-submenu">
                                <li><a href="">Acme</a></li>
                                        <li><a href="">Acme</a></li>
                                        <li><a href="">Acme</a></li>
                                        <li><a href="">Acme</a></li>
                                        <li><a href="">Acme</a></li>
                                </ul>
                                <ul className="dropdown-submenu">
                                <li><a href="">Acme</a></li>
                                        <li><a href="">Acme</a></li>
                                        <li><a href="">Acme</a></li>
                                        <li><a href="">Acme</a></li>
                                        <li><a href="">Acme</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="/categories/Fitness">
                            <img src="/images/Fitness-01-01.png" alt="" style={{width: "60px"}}/>
                            <br/>
                            <a className="text-center">Fitness</a>
                        </a>
                        <div className="dropdown-cate-menu" id="dropdown-7-category">
                            <a href="">
                                <strong>Fitness</strong>
                                
                            </a>
                            <div className="menus mt-3">
                                <ul className="dropdown-submenu">
                                    <li><a href="">Acme</a></li>
                                    <li><a href="">Wallgreens</a></li>
                                    <li><a href="">T-Mobile</a></li>
                                    <li><a href="">Wegmans</a></li>
                                    <li><a href="">Lidl</a></li>
                                </ul>
                                <ul className="dropdown-submenu">
                                <li><a href="">Acme</a></li>
                                    <li><a href="">Wallgreens</a></li>
                                    <li><a href="">T-Mobile</a></li>
                                    <li><a href="">Wegmans</a></li>
                                    <li><a href="">Lidl</a></li>
                                </ul>
                                <ul className="dropdown-submenu">
                                <li><a href="">Acme</a></li>
                                    <li><a href="">Wallgreens</a></li>
                                    <li><a href="">T-Mobile</a></li>
                                    <li><a href="">Wegmans</a></li>
                                    <li><a href="">Lidl</a></li>
                                </ul>
                                <ul className="dropdown-submenu">
                                <li><a href="">Acme</a></li>
                                    <li><a href="">Wallgreens</a></li>
                                    <li><a href="">T-Mobile</a></li>
                                    <li><a href="">Wegmans</a></li>
                                    <li><a href="">Lidl</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="/categories/Entertainment">
                        <img src="/images/Entertainment-01.png" alt="" style={{width: "60px"}}/>
                        <br/>
                        <a className="text-center">Entertainment</a>
                        </a>
                        <div className="dropdown-cate-menu" id="dropdown-8-category">
                            <a href="">
                                <strong>Entertainment</strong>
                                
                            </a>
                            <div className="menus mt-3">
                                <ul className="dropdown-submenu">
                                    <li><a href="">Hobby Lobby</a></li>
                                    <li><a href="">Home Depot</a></li>
                                    <li><a href="">Menards</a></li>
                                    <li><a href="">Bi-Mart</a></li>
                                    <li><a href="">Overstock</a></li>
                                </ul>
                                <ul className="dropdown-submenu">
                                    <li><a href="">Hobby Lobby</a></li>
                                    <li><a href="">Home Depot</a></li>
                                    <li><a href="">Menards</a></li>
                                    <li><a href="">Bi-Mart</a></li>
                                    <li><a href="">Overstock</a></li>
                                </ul>
                                <ul className="dropdown-submenu">
                                    <li><a href="">Hobby Lobby</a></li>
                                    <li><a href="">Home Depot</a></li>
                                    <li><a href="">Menards</a></li>
                                    <li><a href="">Bi-Mart</a></li>
                                    <li><a href="">Overstock</a></li>
                                </ul>
                                <ul className="dropdown-submenu">
                                    <li><a href="">Hobby Lobby</a></li>
                                    <li><a href="">Home Depot</a></li>
                                    <li><a href="">Menards</a></li>
                                    <li><a href="">Bi-Mart</a></li>
                                    <li><a href="">Overstock</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    
                    <li>
                        <a href="/categories/Home">
                            <img src="/images/home.png" alt="" style={{width: "60px"}}/>
                            <br/>
                            <a className="text-center" href="">Home</a>
                        </a>
                        <div className="dropdown-cate-menu" id="dropdown-9-category">
                            <a href="">
                                <strong>Home, Garden</strong>
                                
                            </a>
                            <div className="menus mt-3">
                                <ul className="dropdown-submenu">
                                    <li><a href="">Kohl's</a></li>
                                    <li><a href="">DSW</a></li>
                                    <li><a href="">Sportsman Warehouse</a></li>
                                    <li><a href="">Cabela</a></li>
                                    <li><a href="">Overstock</a></li>
                                </ul>
                                <ul className="dropdown-submenu">
                                    
                                        <li><a href="">Kohl's</a></li>
                                        <li><a href="">DSW</a></li>
                                        <li><a href="">Sportsman Warehouse</a></li>
                                        <li><a href="">Cabela</a></li>
                                        <li><a href="">Overstock</a></li>
                                    
                                </ul>
                                <ul className="dropdown-submenu">
                                    
                                        <li><a href="">Kohl's</a></li>
                                        <li><a href="">DSW</a></li>
                                        <li><a href="">Sportsman Warehouse</a></li>
                                        <li><a href="">Cabela</a></li>
                                        <li><a href="">Overstock</a></li>
                                    
                                </ul>
                                <ul className="dropdown-submenu">
                                    <li><a href="">Kohl's</a></li>
                                    <li><a href="">DSW</a></li>
                                    <li><a href="">Sportsman Warehouse</a></li>
                                    <li><a href="">Cabela</a></li>
                                    <li><a href="">Overstock</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="/categories/Office-supplies">
                            <img src="/images/office.png" alt="" style={{width: "60px"}}/>
                            <br/>
                            <a className="text-center" href="">Office</a>
                        </a>
                        <div className="dropdown-cate-menu" id="dropdown-9-category">
                            <a href="">
                                <strong>Office</strong>
                                
                            </a>
                            <div className="menus mt-3">
                                <ul className="dropdown-submenu">
                                    <li><a href="">Kohl's</a></li>
                                    <li><a href="">DSW</a></li>
                                    <li><a href="">Sportsman Warehouse</a></li>
                                    <li><a href="">Cabela</a></li>
                                    <li><a href="">Overstock</a></li>
                                </ul>
                                <ul className="dropdown-submenu">
                                    
                                        <li><a href="">Kohl's</a></li>
                                        <li><a href="">DSW</a></li>
                                        <li><a href="">Sportsman Warehouse</a></li>
                                        <li><a href="">Cabela</a></li>
                                        <li><a href="">Overstock</a></li>
                                    
                                </ul>
                                <ul className="dropdown-submenu">
                                    
                                        <li><a href="">Kohl's</a></li>
                                        <li><a href="">DSW</a></li>
                                        <li><a href="">Sportsman Warehouse</a></li>
                                        <li><a href="">Cabela</a></li>
                                        <li><a href="">Overstock</a></li>
                                    
                                </ul>
                                <ul className="dropdown-submenu">
                                    <li><a href="">Kohl's</a></li>
                                    <li><a href="">DSW</a></li>
                                    <li><a href="">Sportsman Warehouse</a></li>
                                    <li><a href="">Cabela</a></li>
                                    <li><a href="">Overstock</a></li>
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