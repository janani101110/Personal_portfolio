import React from 'react';
import me from "./me.png";
import { LuLinkedin } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import "./all.css";
import { Link } from 'react-router-dom';
import { FaMedium } from "react-icons/fa6";
import Logo from './logo';


export const Home = () => {

  return (
    <div className="container">
      <div className="image-container"><Link to='/'><Logo/></Link></div>
      <div className="shape1"></div>
      <div className="shape2"></div>
      <div className="shape3"></div>

      <div className="welcome-text">
        <div className="welcome">Welcome</div>
        <div className="name">I’m Janani</div>
        <Link to={`/details`}>
          <button className="know-button">Click to know me</button>
        </Link>
      </div>

      <div className="social-icons">
      <a href="https://www.linkedin.com/in/janani-lasindu/" target="_blank" rel="noopener noreferrer">
  <LuLinkedin  color='black'/>
</a>
<a href="mailto:jananilasindu@gmail.com">
        <MdOutlineEmail  color='black'/>
      </a>

      
      <a href="https://github.com/janani101110" target="_blank" rel="noopener noreferrer">
        <FiGithub  color='black' />
      </a>
      <a href="https://medium.com/@jananilasindu" target="_blank" rel="noopener noreferrer">
        <FaMedium  color='black' />
      </a>
              
      </div>

      <img className="profile-picture" src={me} alt="Profile" />
    </div>
  );
};

export default Home;
