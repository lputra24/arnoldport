import React from 'react';
import './navbar.scss'
import Navburger from './navburger.js';

const Navbar = (props) => {

    const colorScheme=props.colorScheme;

    return(
        <div className="parent">
            <div className="navigation">
                <div className="logo">
                    <h4>UI & UX Design</h4>
                    <h4>by Arnold Angelo</h4>
                </div>
                <div className="navbar">
                    <div className="container"><a href="#">Web UX</a></div>
                    <div className="container"><a href="#">Mobile UX</a></div>
                    {/* <div className="container"><a href="#">UX</a></div> */}
                </div>
                <div className="nav-burger">
                    <Navburger colorScheme={colorScheme}></Navburger>
                </div>
            </div>
        </div>
    )
}

export default Navbar;