import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from '../img/logo.svg';
import {FaArrowLeft} from "react-icons/fa"


const MobileNavigation = () => {

    const [menuToggleState, setMenuToggleState] = useState(false);
  const menuToggle = () => {
    setMenuToggleState(!menuToggleState);
  };

  const [show, setShow] = useState(false);
  const [lastScroll, setLastScroll] = useState(0)
  const [overflow, setOverflow] = useState(true)

  const overflowToggle = () => {
    if(overflow === true){
      document.body.style.overflow = "hidden"
    }
    else{
      document.body.style.overflow = "visible"
    }
  }

    const controlNavbar = () => {
        if (window.scrollY >=lastScroll && window.scrollY >= 200) {
            setShow(true)
        }else{
          setShow(false)
        }
    }

    const scrollNav = () => {
        setLastScroll(window.scrollY)
        controlNavbar()
    }

    window.addEventListener('scroll', scrollNav )
  

  const [screen, setScreen] = useState(0)

    return (
      <div>
        <div id="navigation"  className={show ? "showNav" : ""}>
            <div id="logo">
                <Link to="/"><Logo fill="#7510f7" height="45" width="40"/></Link>
            </div>
            <div id="burgerWrapper">
            <div id="nav-icon3" className={menuToggleState ? "open" : ""} onClick={() => {menuToggle(); setOverflow(!overflow); overflowToggle() }} >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div id="mobileNavLinks" className={menuToggleState ? "navOpen" : ""}>
          <Link to="/"><a onClick={() => {setScreen(0); menuToggle(); setOverflow(!overflow); overflowToggle()}} href="#">Home {screen === 0 ? (<FaArrowLeft fill="#fff" className="arrow" />) : null }</a></Link>
          <a onClick={() => {setScreen(1); menuToggle(); setOverflow(!overflow); overflowToggle()}} href="/showcasePortfolio/#servicesHomePage">Services {screen === 1 ? (<FaArrowLeft fill="#fff" className="arrow" />) : null }</a>
          <Link to="/work"><a onClick={() => {setScreen(2); menuToggle(); setOverflow(!overflow); overflowToggle()}}>My Work {screen === 2 ? (<FaArrowLeft fill="#fff" className="arrow" />) : null }</a></Link>
          <a onClick={() => {setScreen(3); menuToggle(); setOverflow(!overflow); overflowToggle()}} href="/showcasePortfolio/#testimonials">Testimonials {screen === 3 ? (<FaArrowLeft fill="#fff" className="arrow" />) : null }</a>
          <a onClick={() => {setScreen(4); menuToggle(); setOverflow(!overflow); overflowToggle()}} href="/showcasePortfolio/#contact">Contact {screen === 4 ? (<FaArrowLeft fill="#fff" className="arrow" />) : null }</a>
          </div>
        </div>
        <div className={menuToggleState ? "blur" : ""} id="blur"></div>
        </div>
    )
}

export default MobileNavigation
