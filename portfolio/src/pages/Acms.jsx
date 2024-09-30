import React from 'react';
import './Acms.css'; // Import the CSS file
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Logo from './logo';
import './all.css';
import { Link } from 'react-router-dom';


export const Acms = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="acms-container">
      {/* Back arrow */}
      <div className="image-container"><Link to='/'><Logo/></Link></div>


      <div className="acms-title">
        Assistive Content Management System for Electronic Hobbyists
      </div>

      <div className="acms-description">
        This is a website where an electronic project developer can get all the needed information and services from one place.
        <br/><br/>
        <b><h3>Key Contents :</h3></b>
        
        ✔️ Resources - Standard information and knowledge about electronic components and topics categorized into different categories like Sensors, Data sheets, PCB, Communication modules, etc. Registered users can add posts to this content and interact with them.
        <br/><br/>
        ✔️ Blogs - Blogs written by registered users about IoT topics.
        <br/><br/>
        ✔️ Projects - Step-by-step guides on completed projects done by registered users, including circuit diagrams, PCB diagrams, and videos.
        <br/><br/>
        ✔️ Shop - Classified website where registered users can post advertisements to sell their electronic products.
        <br/><br/>
        ✔️ Forum - Questions and answers forum where registered users can contribute.
        <br/><br/><br/>
        <b><h3>Key Features :</h3></b>
        
        ✔️ Google authenticated sign in and username/password sign in
        <br/><br/>
        ✔️ Multilingual support for Sinhala, Tamil, and English
        <br/><br/>
        ✔️ Email notifications on necessary parts
        <br/><br/>
        ✔️ Search feature for easy content discovery
        <br/><br/>
        ✔️ Admin panel exclusive for the admin
        <br/><br/><br/>



        <b><h3>Technologies :</h3></b>
        
        MERN Stack - MongoDB, Express.js, React.js, Node.js
        <br/><br/>
        API - Postman, ThunderClient, Google Translate, NodeMailer, etc.
        <br/><br/>
        Registered users can contribute to the website by creating posts, liking, unliking, reacting, commenting, deleting, updating, and sharing content.
        <br/><br/>
        <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/QKtcWL_JXAU?si=U8O3xp1HWmRb9dz6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      </div>

      
    </div>
  );
}

export default Acms;
