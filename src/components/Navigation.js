import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from '../img/logo.svg';



const Navigation = () => {
    const [screen, setScreen] = useState(0);
    const [show, setShow] = useState(false);
    const [lastScroll, setLastScroll] = useState(0)

    const controlNavbar = () => {
        if (window.scrollY >=lastScroll && window.scrollY >= 100) {
            setShow(true)
            document.getElementById('navigation').style.boxShadow = "0px 0px 15px #232323"
        }else{
          setShow(false)
          document.getElementById('navigation').style.boxShadow = "none "
        }
    }

    const scrollNav = () => {
        setLastScroll(window.scrollY)
        controlNavbar()
    }

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    window.addEventListener('scroll', scrollNav )

    return (
        <div id="navigation" className={show ? "showNav" : ""} >
            <div id="logo">
                <Link to="/"><Logo fill="#7510f7" height="50" width="45"/></Link>
            </div>
            <div id="navLinks">
            <Link to="/"><a className={screen === 0 ? "screen" : ""} onClick={() => {setScreen(0);scrollToTop()}} href="#">Home</a></Link>
            <a className={screen === 1 ? "screen" : ""} onClick={() => {setScreen(1)}} href="/showcasePortfolio/#servicesHomePage">Services</a>
            <Link to="/work"><a className={screen === 2 ? "screen" : ""} onClick={() => {setScreen(2); scrollToTop()}}>My Work</a></Link>
            <a className={screen === 3 ? "screen" : ""} onClick={() => {setScreen(3)}} href="/showcasePortfolio/#testimonials">Testimonials</a>
            <a className={screen === 4 ? "screen" : ""} onClick={() => {setScreen(4)}} href="/showcasePortfolio/#contact">Contact</a>
            </div>
        </div>
    )
}

export default Navigation
