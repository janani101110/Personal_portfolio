import React from 'react';
import { Link } from 'react-router-dom';
import './Details.css'; // External CSS for further control
import me from "./me.jpg";
import { IoMdSchool } from "react-icons/io";
import { FaMedal } from "react-icons/fa6";
import { PiBagFill } from "react-icons/pi"; 
import html from "./html.png";
import css from "./css.png";
import js from "./js.png";
import react from "./react.png";
import node from "./node.png";
import mdb from "./mdb.png";
import mysql from "./mysql.png";
import python from "./python.png";
import c from "./c.png";
import cc from "./cc.png";
import git from "./git.png";
import figma from "./figma.png";
import arduino from "./arduino.png";
import Logo from './logo';


export const Details = () => {
    return (
        <div className="details-container">
      <div className="image-container"><Link to='/'><Logo/></Link></div>
           
            <div className="section-title" style={{fontSize:32}}>Janani Lasindu</div>
            <div className="section1">
                <div className='photo'>
                <img className="profile-picture" src={me} alt="Profile" />
                </div>
                <div className='quote'>
                    <p>A highly motivated, self-taught software development enthusiast with a strong foundation in leadership, communication, and relationship-building. While deeply engaged in software development, my true passion lies in cyber-security, where I am committed to safeguarding digital environments. As a full-time undergraduate, I work hard to balance my personal growth and mental well-being, striving to become a better person each day while maintaining my sense of fulfillment.</p>
                    <IoMdSchool /> Devi Balika Vidyalaya, Colombo   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <IoMdSchool /> University of Moratuwa, Faculty of IT<br/>
                    <FaMedal /> Duke of Edinburgh International Award, Gold Award Holder<br/>
                    <PiBagFill /> Special Project Pillar, MoraSpirit
                </div>

            </div>
        








            <div className="section-title">As a Full Stack Developer</div>

            <div className="section">
                <h2 className="section-subtitle">Projects</h2>
                <div className="card">
                    <h3>Assistive Content Management System for Electronic Hobbyists - MERN Stack</h3>
                    <p>Developed by Team Trivia. Worked as the Leader.</p>
                    <Link to={`/acms`}><button className="more-info-btn">More info</button></Link>
                </div>

                <h2 className="section-subtitle">Certifications</h2>
                <div className="card">
                    <p>Programming in Python- Python for Beginners | Open-UOM Courses</p>
                    <p>Web Development- Web Design for Beginners | Open-UOM Courses
                    </p>
                    <p>Foundational C# with Microsoft Certification
                    </p>
                    


                </div>
            </div>
            <div className="section-title">As a Cyber-Security Enthusiast</div>

            <div className="section">
            <h2 className="section-subtitle">Projects</h2>
            <div className="card">
                    <h3>Packet Sniffer</h3>
                    <p>Developed a packet sniffer to capture and analyze network traffic. <br/><br/>Technologies used:<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; • Python<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; • Scapy library.</p>
                </div>
                <h2 className="section-subtitle">Certifications</h2>
                <div className="card">
                    <p>Digital Forensics Essentials (DFE) | EC Council</p>
                    <p>Google Certificate for Foundations of Cybersecurity</p>
                    <p>ISC2 Certified in Cybersecurity (CC) Online Self-Paced Training</p>
                </div>
            </div>

            <div className="section-title">IOT Projects</div>

            <div className="section">
            
            <div className="card">
                    <h3>Adjustable P10 LED Display Controller</h3>
                    <p>Engineered a versatile controller for P10 LED displays utilizing an ESP32 Microcontroller. Enabled text display via WiFi, Ethernet, and SD card, with adjustable configurations for the number of connected LED displays. Implemented user controls for font selection and text scrolling speed, providing customizable display options.
                    <br/>• Arduino IDE</p>
                </div>
                
            </div>

            <div className="section">
                <h2 className="section-subtitle">Technical Skills</h2>
                <div className="skills-grid">
                    <div className="skill-item"><img src={html} alt='' style={{width:'100px'}}/></div>
                    <div className="skill-item"><img src={css} alt='' style={{width:'100px'}}/></div>
                    <div className="skill-item"><img src={js} alt='' style={{width:'100px'}}/></div>
                    <div className="skill-item"><img src={react} alt='' style={{width:'100px'}}/></div>
                    <div className="skill-item"><img src={node} alt='' style={{width:'100px'}}/></div>
                    <div className="skill-item"><img src={mdb} alt='' style={{width:'100px'}}/></div>
                    <div className="skill-item"><img src={mysql} alt='' style={{width:'100px'}}/></div>
                    <div className="skill-item"><img src={python} alt='' style={{width:'100px'}}/></div>
                    <div className="skill-item"><img src={c} alt='' style={{width:'100px'}}/></div>
                    <div className="skill-item"><img src={cc} alt='' style={{width:'100px'}}/></div>
                    <div className="skill-item"><img src={git} alt='' style={{width:'100px'}}/></div>
                    <div className="skill-item"><img src={figma} alt='' style={{width:'100px'}}/></div>
                    <div className="skill-item"><img src={arduino} alt='' style={{width:'100px'}}/></div>
                </div>
            </div>
  
           

            
        </div>
    );
};

export default Details;
