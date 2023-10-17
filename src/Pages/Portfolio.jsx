import React from 'react'
import Home from '../Component/Home/Home'
import "./Portfolio.css"
import profile from "../Assets/Profile.png"
import { BsFacebook } from 'react-icons/bs';
import { AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';

const Portfolio = () => {
  return (
    <div className='Portfolio'>
        <div className='SideNavBar'>
          <div className='navProfile'>
            <img src={profile} alt="" />
            <h1> Aashik Shihaab</h1>
            <h2> Aashik Shihaab</h2>
          </div>
          <div className="navMenu">
            <p>Home</p>
            <p>About</p>
            <p>Work</p>
            <p>Contact</p>
            <p>Portfolio</p>
            <p>Blog</p>


          </div>
         <div className="navSocialMedia">
          <div className="socialMediaIcons">
            <BsFacebook className='socialMediaIcon'/>
            <AiFillLinkedin className='socialMediaIcon'/>
            <AiFillTwitterCircle className='socialMediaIcon'/>
          </div>
            <p>Copyright © 2023 Aashik Shihaab.</p>
            <p>All rights reserved.</p>
         </div>

        </div>
        <Home/>
    </div>
  )
}

export default Portfolio