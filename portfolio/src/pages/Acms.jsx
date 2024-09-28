import React from 'react';
import './Acms.css'; // Import the CSS file
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaVideo } from "react-icons/fa";

export const Acms = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="acms-container">
      {/* Back arrow */}
      

      <div className="acms-title">
        Assistive Content Management System for Electronic Hobbyists
      </div>

      <div className="acms-description">
        This is a website where an electronic project developer can get all the needed information and services from one place.
        <br/><br/>
        <b>Key Contents :</b>
        <br/><br/>
        Resources - Standard information and knowledge about electronic components and topics categorized into different categories like Sensors, Data sheets, PCB, Communication modules, etc. Registered users can add posts to this content and interact with them.
        <br/><br/>
        Blogs - Blogs written by registered users about IoT topics.
        <br/><br/>
        Projects - Step-by-step guides on completed projects done by registered users, including circuit diagrams, PCB diagrams, and videos.
        <br/><br/>
        Shop - Classified website where registered users can post advertisements to sell their electronic products.
        <br/><br/>
        Forum - Questions and answers forum where registered users can contribute.
        <br/><br/><br/>
        <b>Key Features :</b>
        <br/><br/>
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
        <b>Technologies :</b>
        <br/><br/>
        MERN Stack - MongoDB, Express.js, React.js, Node.js
        <br/><br/>
        API - Postman, ThunderClient, Google Translate, NodeMailer, etc.
        <br/><br/>
        Registered users can contribute to the website by creating posts, liking, unliking, reacting, commenting, deleting, updating, and sharing content.
        <br/><br/>
        To view the full demonstration click <a href='https://www.linkedin.com/posts/janani-lasindu_webdevelopment-teamtrivia-activity-7218228185656700928-RKuO?utm_source=share&utm_medium=member_desktop'><FaVideo style={{fontSize:'12px'}}/></a> 
      </div>

      
    </div>
  );
}

export default Acms;
