import React from 'react'
import heroImage from './hero_img.png';

import './hero.scss';

const Hero = () => {
  return (
    <div className="main">
      <div className="main_text">
        <span className="main_text-info">Chase the new Flavour</span>
        <h1 className="main_text-title">The key to Fine dining</h1>
        <p className="main_text-text">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam debitis, optio ab repellendus laborum cum eligendi sequi odit nihil.         
        </p>
        <button className="main_text-btn">Explore Menu</button>
      </div>
      <div className="main_img">
        <img src={heroImage} alt="Kebab" />
      </div>
    </div>
  );
}

export default Hero