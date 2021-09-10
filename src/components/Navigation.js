import React, {useState} from 'react';
import { useTransition, animated } from 'react-spring';
import {Baseurl} from './url'
const Navigation = () => {
    const [showMenu, setShowMenu] = useState(false)
    const maskTransitions = useTransition(showMenu, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })
    const menuTransitions = useTransition(showMenu, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)'},
        leave: { opacity: 0, transform: 'translateX(-100%)' },
    })

    
    // className="mobile-navigation"
    // className="menu-mask"
    

    return(
        <>
            <nav>
                <i 
                    style={{paddingTop:"8px"}}
                    className="burger fa fa-bars" 
                    aria-hidden="true"
                    onClick={() => setShowMenu(!showMenu)}>

                </i>
                {
                    maskTransitions(
                        (styles, item) => item && 
                        <animated.div 
                            style = {styles}
                            className="menu-mask"
                            onClick = {() => setShowMenu(false)}
                            >
                            
                        </animated.div>
                    )
                }
                {
                    menuTransitions(
                        (styles, item) => item && 
                        <animated.div 
                            style = {styles}
                            className="mobile-navigation"
                            >
                        <div className="mobile-menu-header p-3">
                            <a href="/">
                            <h4 style={{color:"white"}}>AvmFlyers</h4>
                            </a>
                            <a href="/">
                            <img src="/images/icon-01.png" style={{width:"30px", height:"30px"}}/>
                            </a>
                        </div> 
                        <div className="mobile-menu-lists">
                            <ul className= "mobile-main-menu-list">
                                <a href="/">
                                    <li className="menu-list-item">
                                        <a href="/" className="menu-list-item-link"><i className="fa fa-home" aria-hidden="true"></i>Home</a>
                                    </li>
                                </a>
                                <a href="/stores">
                                    <li className="menu-list-item">
                                        <a href="/stores" className="menu-list-item-link"><i className="fa fa-shopping-bag" aria-hidden="true"></i>Stores</a>
                                    </li>
                                </a>
                                <a href="/categories">
                                    <li className="menu-list-item">
                                        <a href="/categories" className="menu-list-item-link"><i className="fa fa-crosshairs" aria-hidden="true"></i>Catgories</a>
                                    </li>
                                </a>
                                
                                
                            </ul>
                            <hr style={{background:"rgb(150, 150, 150)"}}></hr>
                            <ul className="dropdown-cat-list"> 
                            
                                    <div class="dropdown">
                                        <button class="btn btn-secondary" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            Grocery
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="/acme">Acme</a></li>
                                            <li><a class="dropdown-item" href="/walgreens">Walgreens</a></li>
                                            <li><a class="dropdown-item" href="/hyVee">HyVee</a></li>
                                            <li><a class="dropdown-item" href="/wegmans">Wegmans</a></li>
                                            <li><a class="dropdown-item" href="/lidl">Lidl</a></li>
                                            <li><a class="dropdown-item" href="/lucky">Lucky</a></li>
                                            <li><a class="dropdown-item" href="/homeland">Homeland</a></li>
                                            
                                        </ul>
                                    </div>
                                
                                <div class="dropdown">
                                    <button class="btn btn-secondary  " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        Electronics
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a class="dropdown-item" href="/verizon">Verizon</a></li>
                                        <li><a class="dropdown-item" href="/boost-mobile">Boost Mobile</a></li>
                                        <li><a class="dropdown-item" href="/brandsmart-usa">BrandsMart USA</a></li>
                                    </ul>
                                </div>
                                
                                <div class="dropdown">
                                    <button class="btn btn-secondary  " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        Food
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" href="/walgreens">Walgreens</a></li>
                                    </ul>
                                </div>
                                <div class="dropdown">
                                    <button class="btn btn-secondary  " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        Entertainment
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        
                                    </ul>
                                </div>
                                <div class="dropdown">
                                    <button class="btn btn-secondary  " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        Fitness
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a class="dropdown-item" href="/cvs-pharmacy">CVS Pharmacy</a></li>
                                        <li><a class="dropdown-item" href="/dicks-sporting-goods">Dicks Sporting Goods</a></li>
                                        
                                    </ul>
                                </div>
                                <div class="dropdown">
                                    <button class="btn btn-secondary  " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        Fashion
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a class="dropdown-item" href="/dsw">DSW</a></li>
                                        <li><a class="dropdown-item" href="/kohls">Kohl's</a></li>
                                        <li><a class="dropdown-item" href="/belk">Belk</a></li>
                                    </ul>
                                </div>
                                
                                
                                
                                
                            </ul>
                            <hr style={{background:"rgb(150, 150, 150)"}}></hr>
                            <ul className= "mobile-legal-menu-list dropdown-cat-list">
                                <a href="/terms">
                                    <li className="drop-down-catlist-item">
                                        <a className="menu-list-item-link">Terms & Conditions</a>
                                    </li>
                                </a>
                                <a href="/privacy-policy">
                                    <li className="drop-down-catlist-item">
                                        <a className="menu-list-item-link">Privacy Policy</a>
                                    </li>
                                </a>
                                <a href="/about">
                                    <li className="drop-down-catlist-item">
                                        <a className="menu-list-item-link">About Us</a>
                                    </li>
                                </a>
                                
                                
                            </ul>
                        </div>   
                        


                        </animated.div>
                    )
                }
            </nav>
            
        </>
    )
}
export default Navigation;