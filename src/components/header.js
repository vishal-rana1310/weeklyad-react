import React, {useState, useEffect} from 'react';
import  '../App.css';

import ServerAutoSuggest from '../components/storeSuggestions'
import Navigation from './Navigation';

function Header() {

    const value = 3;
    console.log(value);

    
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
                                    <li><a href="/Target">Target</a></li>
                                    <li><a href="/Wallgreens">Wallgreens</a></li>
                                    <li><a href="/Acme">Acme</a></li>
                                    <li><a href="/lidl">Lidl</a></li>
                                    <li><a href="/HyVee">HyVee</a></li>
                                    <li><a href="/Save Mart">Save Mart</a></li>
                                    <li><a href="/Lucky">Lucky</a></li>
                                    <li><a href="/El Rancho">El Rancho</a></li>
                                    <li><a href="/Shaw's">Shaw's</a></li>
                                    <li><a href="/King Soopers">King Soopers</a></li>
                                    <li><a href="/Homeland">Homeland</a></li>
                                    <li><a href="/Dollar Tree">Dollar Tree</a></li>
                                    <li><a href="/Sprouts">Sprouts</a></li>
                                    <li><a href="/Wegmans">Wegmans</a></li>
                                    <li><a href="/QFC">QFC</a></li>
                                    <li><a href="/Fresh Thyme">Fresh Thyme</a></li>
                                    
                                </ul>
                                <ul className="dropdown-submenu">
                                    <li><a href="/Winn Dixie">Winn Dixie</a></li>
                                    <li><a href="/Albertsons">Albertsons</a></li>
                                    <li><a href="/Meijer">Meijer</a></li>
                                    <li><a href="/Sams Club">Sams Club</a></li>
                                    <li><a href="/El Super">El Super</a></li>
                                    <li><a href="/IGA">IGA</a></li>
                                    <li><a href="/Cash Wise">Cash Wise</a></li>
                                    <li><a href="/Fareway">Fareway</a></li>
                                    <li><a href="/H-E-B">H-E-B</a></li>
                                    <li><a href="/Mariano's">Mariano's</a></li>
                                    <li><a href="/Five Below">Five Below</a></li>
                                    <li><a href="/Giant">Giant</a></li>
                                    <li><a href="/Basha's">Basha's</a></li>
                                    <li><a href="/BJ's">BJ's</a></li>
                                    <li><a href="/Family Dollar">Family Dollar</a></li>
                                    <li><a href="/Family Fare">Family Fare</a></li>
                                </ul>
                                <ul className="dropdown-submenu">
                                        <li><a href="/Jewel Osco">Jewel Osco</a></li>
                                        <li><a href="/Food Lion">Food Lion</a></li>
                                        <li><a href="/Ingles">Ingles</a></li>
                                        <li><a href="/Ollie's">Ollie's</a></li>
                                        <li><a href="/Rouses">Rouses</a></li>
                                        <li><a href="/Lowes Foods">Lowes Foods</a></li>
                                        <li><a href="/Price Chopper">Price Chopper</a></li>
                                        <li><a href="/Price Rite">Price Rite</a></li>
                                        <li><a href="/Dollar General">Dollar General</a></li>
                                        <li><a href="/Publix">Publix</a></li>
                                        <li><a href="/Costco">Costco</a></li>
                                        <li><a href="/Walmart">Walmart</a></li>
                                        <li><a href="/Kroger">Kroger</a></li>
                                        <li><a href="/H mart">H mart</a></li>
                                        <li><a href="/Star Market">Star Market</a></li>
                                </ul>
                                <ul className="dropdown-submenu">
                                        <li><a href="/Safeway">Safeway</a></li>
                                        <li><a href="/Aldi">Aldi</a></li>
                                        <li><a href="/Stater Bros">Stater Bros</a></li>
                                        <li><a href="/Save a Lot">Save a Lot</a></li>
                                        <li><a href="/Ralphs">Ralphs</a></li>
                                        <li><a href="/Vons">Vons</a></li>
                                        <li><a href="/Festival Food">Festival Food</a></li>
                                        <li><a href="/Kmart">Kmart</a></li>
                                        <li><a href="/Grocery Outlet">Grocery Outlet</a></li>
                                        <li><a href="/Joann">Joann</a></li>
                                        <li><a href="/Sears">Sears</a></li>
                                        <li><a href="/Cub Foods">Cub Foods</a></li>
                                        <li><a href="/Market Basket">Market Basket</a></li>
                                        <li><a href="/Trader Joe's">Trader Joe's</a></li>
                                        <li><a href="/Coborn's">Coborn's</a></li>
                                        <li><a href="/99 Ranch Market">99 Ranch Market</a></li>
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
                                    <li><a href="/Verizon">Verizon</a></li>
                                    <li><a href="/Boost Mobile">Boost Mobile</a></li>
                                    
                                    
                                </ul>
                                <ul className="dropdown-submenu">
                                    <li><a href="/BrandsMart USA">BrandsMart USA</a></li>
                                    
                                </ul>
                                <ul className="dropdown-submenu">
                                    <li><a href="/Best Buy">Best Buy</a></li>
                                    
                                </ul>
                                <ul className="dropdown-submenu">
                                    <li><a href="/T mobile">T mobile</a></li>
                                    
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
                                    <li><a href="/DSW">DSW</a></li>
                                    <li><a href="/Kohl's">Kohl's</a></li>
                                    <li><a href="/Belk">Belk</a></li>
                                    
                                </ul>
                                <ul className="dropdown-submenu">
                                    <li><a href="/Mary Kay">Mary Kay</a></li>
                                    <li><a href="/JCPenney">JCPenney</a></li>
                                    
                                </ul>
                                <ul className="dropdown-submenu">
                                    <li><a href="/Avon">Avon</a></li>
                                    <li><a href="/Macy's">Macy's</a></li>
                                    
                                </ul>
                                <ul className="dropdown-submenu">
                                    <li><a href="/Victoria Secret">Victoria Secret</a></li>
                                    <li><a href="/Bass Pro">Bass Pro</a></li>
                                    
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
                                    <li><a href="/Paypal">Paypal</a></li>
                                    <li><a href="/Chase">Chase</a></li>
                                    
                                </ul>
                                <ul className="dropdown-submenu">
                                    
                                        <li><a href="/Wells fargo">Wells fargo</a></li>
                                        
                                    
                                </ul>
                                <ul className="dropdown-submenu">
                                    
                                        <li><a href="/Bank Of America">Bank Of America</a></li>
                                        
                                    
                                </ul>
                                <ul className="dropdown-submenu">
                                    <li><a href="/Capital One">Capital One</a></li>
                                    
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
                        <div className="dropdown-cate-menu" style={{display:"none"}} id="dropdown-5-category">
                            <a href="">
                                <strong>Food</strong>
                                
                            </a>
                            <div className="menus mt-3">
                                <ul className="dropdown-submenu">
                                    
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="/categories/Game">
                        <img src="/images/Game-01-01.png" alt="" style={{width: "60px"}}/>
                        <br/>
                        <a className="text-center">Games</a>
                        </a>
                        <div className="dropdown-cate-menu" style={{display: "none"}} id="dropdown-6-category">
                            <a href="">
                                <strong>Games</strong>
                                
                            </a>
                            <div className="menus mt-3">
                                <ul className="dropdown-submenu">
                                    
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
                                    <li><a href="/Dunham's Sports">Dunham's Sports</a></li>
                                    
                                </ul>
                                <ul className="dropdown-submenu">
                                <li><a href="/CVS Pharmacy">CVS Pharmacy</a></li>
                                    
                                </ul>
                                <ul className="dropdown-submenu">
                                <li><a href="/Dicks Sporting Goods">Dicks Sporting Goods</a></li>
                                    
                                </ul>
                                <ul className="dropdown-submenu">
                                <li><a href="/Sportsman's Warehouse">Sportsman's Warehouse</a></li>
                                    
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
                                    
                                </ul>
                            </div>
                        </div>
                    </li>
                    
                    <li>
                        <a href="/categories/Home-Garden">
                            <img src="/images/home.png" alt="" style={{width: "60px"}}/>
                            <br/>
                            <a className="text-center">Home</a>
                        </a>
                        <div className="dropdown-cate-menu" id="dropdown-9-category">
                            <a href="">
                                <strong>Home, Garden</strong>
                                
                            </a>
                            <div className="menus mt-3">
                                <ul className="dropdown-submenu">
                                    <li><a href="/Bi-Mart">Bi-Mart</a></li>
                                    <li><a href="/World Market">World Market</a></li>
                                    
                                </ul>
                                <ul className="dropdown-submenu">
                                    
                                        <li><a href="/Menards">Menards</a></li>
                                        <li><a href="/Home Depot">Home Depot</a></li>
                                        
                                    
                                </ul>
                                <ul className="dropdown-submenu">
                                    
                                        <li><a href="/Big Lots">Big Lots</a></li>
                                        <li><a href="/Harbor Freight">Harbor Freight</a></li>
                                        
                                    
                                </ul>
                                <ul className="dropdown-submenu">
                                    <li><a href="/IKEA">IKEA</a></li>
                                    
                                    
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="/categories/Office-supplies">
                            <img src="/images/office.png" alt="" style={{width: "60px"}}/>
                            <br/>
                            <a className="text-center">Office</a>
                        </a>
                        <div className="dropdown-cate-menu" id="dropdown-9-category">
                            <a href="">
                                <strong>Office</strong>
                                
                            </a>
                            <div className="menus mt-3">
                                <ul className="dropdown-submenu">
                                    <li><a href="/Staples">Staples</a></li>
                                    
                                </ul>
                                <ul className="dropdown-submenu">
                                    
                                        
                                    
                                </ul>
                                <ul className="dropdown-submenu">
                                    
                                       
                                    
                                </ul>
                                <ul className="dropdown-submenu">
                                    
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