import React from "react";
import { useState } from "react"

import logo from './Frame_Logo.svg';

import './navbar.scss';



const Home = () => {


const [menu, setMenu ] = useState(false)

const handleMenu = ()=>{
  return setMenu(!menu)
}


  return (
    <div className="navbar">
      <img className="navbar_img" src={logo} alt="Logo" />
      <div className="navbar_right">
        <ul className={`navbar_menu ${menu ? 'active' : ""}`}>
          <li className="navbar_menu-item">
            <a className="navbar_menu-link" href="#">
              Menu
            </a>
          </li>
          <li className="navbar_menu-item">
            <a className="navbar_menu-link" href="#">
              News
            </a>
          </li>
          <li className="navbar_menu-item">
            <a className="navbar_menu-link" href="#">
              About Us
            </a>
          </li>
          <li className="navbar_menu-item">
            <a className="navbar_menu-link" href="#">
              Contact Us
            </a>
          </li>
        </ul>
        <button className="navbar_btn">Log In</button>
      </div>
      <div onClick={handleMenu} className={`navbar_hamburger ${menu ? 'active' : ""}`}>
        <span className="navbar_hamburger-bar"></span>
        <span className="navbar_hamburger-bar"></span>
        <span className="navbar_hamburger-bar"></span>
      </div>
    </div>
  );
}
export default Home;
 




























