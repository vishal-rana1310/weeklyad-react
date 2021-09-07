import React, {useState, useEffect} from 'react';
import  '../App.css';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';



function Header() {
    
  return (
    <>
        <div className="mobile-nav">
            <img id="cross" src="../images/cross.png"/>
            <div className="mobile-nav-header mb-4">
                <div className="d-flex">
                    <img src="../images/mobiles.png" alt="" style={{width: "70px", height: "70px"}}/>
                    <div className="mt-2">
                        <h4 style={{margin: "0"}}>Adsadora</h4>
                        <p style={{color: "rgb(109, 109, 109)"}}>Weekly Ads and Flyers</p>
                    </div>
                
                </div>
                
            </div>
            <div className="mobile-nav-menu" style={{paddingLeft: "1rem"}}>
                <span className="navigation-heading" style={{color: "rgb(78, 78, 78)", fontSize: "18px", fontWeight: "700"}}> - Navigation</span>
                <ul className="pages" style={{padding: "14px"}}>
                    <li>
                        <a href="">Home</a>
                        
                    </li>
                    <li>
                        <a href="">Stores</a>
                        
                    </li>
                    
                    <li>
                        <div className="dropdown new-dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                              Supermarkets
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Acme</a></li>
                                <li><a className="dropdown-item" href="#">Wallgreens</a></li>
                                <li><a className="dropdown-item" href="#">T-Mobile</a></li>
                                
                              
                            </ul>
                        </div>
                        
                    </li>
                    <li>
                        <div className="dropdown new-dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                              Fashion
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Acme</a></li>
                                <li><a className="dropdown-item" href="#">Wallgreens</a></li>
                                <li><a className="dropdown-item" href="#">T-Mobile</a></li>
                                
                              
                            </ul>
                        </div>
                        
                    </li>
                    <li>
                        <div className="dropdown new-dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                              Mobiles
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Acme</a></li>
                                <li><a className="dropdown-item" href="#">Wallgreens</a></li>
                                <li><a className="dropdown-item" href="#">T-Mobile</a></li>
                                <li><a className="dropdown-item" href="#">T-Mobile</a></li>
                                <li><a className="dropdown-item" href="#">T-Mobile</a></li>
                                <li><a className="dropdown-item" href="#">T-Mobile</a></li>
                                <li><a className="dropdown-item" href="#">T-Mobile</a></li>
                                <li><a className="dropdown-item" href="#">T-Mobile</a></li>
                                <li><a className="dropdown-item" href="#">T-Mobile</a></li>
                                <li><a className="dropdown-item" href="#">T-Mobile</a></li>
                                <li><a className="dropdown-item" href="#">T-Mobile</a></li>
                                
                              
                            </ul>
                        </div>
                        
                    </li>
                    <li>
                        <div className="dropdown new-dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                              Electronics
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Acme</a></li>
                                <li><a className="dropdown-item" href="#">Wallgreens</a></li>
                                <li><a className="dropdown-item" href="#">T-Mobile</a></li>
                                
                              
                            </ul>
                        </div>
                        
                    </li>
                    <li>
                        <div className="dropdown new-dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                              Travel
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Acme</a></li>
                                <li><a className="dropdown-item" href="#">Wallgreens</a></li>
                                <li><a className="dropdown-item" href="#">T-Mobile</a></li>
                                
                              
                            </ul>
                        </div>
                        
                    </li>
                </ul>
                <span className="navigation-heading" style={{color: "rgb(78, 78, 78)", fontSize: "18px", fontWeight: "700"}}> - Legal</span>
                <ul className="pages" style={{padding: "14px"}}>
                    <li>
                        <a href="">Terms Conditions</a>
                        
                    </li>
                    <li>
                        <a href="">Privacy Policy</a>
                        
                    </li>
                </ul>
            </div>
        </div>
        <div className="container-fluid pt-1 pb-1" style={{background: "#2874F0"}}>

            <div className="container header-container" style={{color: "white"}}>
                <div className="row">
                    <div className="col-md-3 logo">
                        <a href="/" style={{color: "white", textDecoration:"none"}}>
                            <h3 className="mt-1">WeeklyAds</h3>
                        </a>
                        <div className="hamburger-menu">
                            <img id="hamburger" src="../images/menu.png" alt=""/>
                        </div>
                    </div>
                    <div className="col-md-6 pt-1 pb-2 search-bar-desk">
                    
                    </div>
                    <div className="col-md-3 menu">
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
                        
                        <a href="/categories/Gadgets">
                        <img src="../images/topoffers.png" alt="" style={{width: "60px"}}/>
                        
                        <br/>
                        <a>Gadgets</a>
                        </a>
                        <div className="dropdown-cate-menu" id="dropdown-1-category">
                            <a href="">
                                <strong>Gadgets</strong>
                                
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
                        <img src="../images/mobiles.png" alt="" style={{width: "60px"}}/>
                        <br/>
                        <a className="text-center" href="/categories/Gro">Grocery</a>
                        <div className="dropdown-cate-menu" id="dropdown-2-category">
                            <a href="/categories/Gro">
                                <strong>Grocery</strong>
                                
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
                        <img src="../images/appliances.png" alt="" style={{width: "60px"}}/>
                        <br/>
                        <a className="text-center" href="">Home</a>
                        <div className="dropdown-cate-menu" id="dropdown-3-category">
                            <a href="">
                                <strong>Home, Garden</strong>
                                
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
                        <img src="../images/travel.png" alt="" style={{width: "60px"}}/>
                        <br/>
                        <a className="text-center" href="">Travel</a>
                        <div className="dropdown-cate-menu" id="dropdown-4-category">
                            <a href="">
                                <strong>Clothing</strong>
                                
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
                        <img src="../images/home.jpeg" alt="" style={{width: "60px"}}/>
                        <br/>
                        <a className="text-center" href="">Home</a>
                        <div className="dropdown-cate-menu" id="dropdown-5-category">
                            <a href="">
                                <strong>Sports</strong>
                                
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
                        <img src="../images/mobiles.png" alt="" style={{width: "60px"}}/>
                        <br/>
                        <a className="text-center" href="">Mobiles</a>
                        <div className="dropdown-cate-menu" id="dropdown-6-category">
                            <a href="">
                                <strong>Mobiles</strong>
                                
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
                        <img src="../images/grocery.png" alt="" style={{width: "60px"}}/>
                        <br/>
                        <a className="text-center" href="">Grocery</a>
                        <div className="dropdown-cate-menu" id="dropdown-7-category">
                            <a href="">
                                <strong>Grocery</strong>
                                
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
                        <img src="../images/mobiles.png" alt="" style={{width: "60px"}}/>
                        <br/>
                        <a className="text-center" href="">Mobiles</a>
                        <div className="dropdown-cate-menu" id="dropdown-8-category">
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
                        <img src="../images/topoffers.png" alt="" style={{width: "60px"}}/>
                        <br/>
                        <a className="text-center" href="">Other</a>
                        <div className="dropdown-cate-menu" id="dropdown-9-category">
                            <a href="">
                                <strong>Other</strong>
                                
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