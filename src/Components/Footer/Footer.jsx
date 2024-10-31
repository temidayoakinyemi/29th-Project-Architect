import React from "react";
import "../Footer/Footer.css";
import Portal from "../../assets/Portal.png";
import Lin from "../../assets/lin.png";
import facebook from "../../assets/facebook.png"
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";

const Footer = () => {
  return (
    <div className="footer container">
      <div className="logopbtn">
        <div className="logo-p">
          <img src={Portal} alt="" className="logo" />
          <p className="ptag">
            Portal
            <br />
            Architecture
          </p>
        </div>
        <div className="pbtn">
          <p className="footpp">Ready to get started?</p>
          <button className="footbtn">Get Started</button>
        </div>
      </div>
      <img src={Lin} alt="" className="footlin" />
      <div className="allfooth1inputulli">
        <div className="allfooth1input">
          <h1 className="footh1">
            Subscribe to our <br /> newsletter
          </h1>
          <input
            type="text"
            placeholder="Email address"
            className="footinput"
          />
        </div>
        <div className="footulli">
          <ul>
            <li className="footul">Services</li>
            <li className="footli">Email Marketing</li>
            <li className="footli">Campaigns</li>
            <li className="footli">Branding</li>
            <li className="footli">Offline</li>
          </ul>
          <ul>
            <li className="footul1">About</li>
            <li className="footli1">Our Story</li>
            <li className="footli1">Benefits</li>
            <li className="footli1">Team</li>
            <li className="footli1">Careers</li>
          </ul>
          <ul>
            <li className="footul1">Help</li>
            <li className="footli1">FAQs</li>
            <li className="footli1">Contact Us</li>
          </ul>
        </div>
      </div>
      <div className="footimgpp">
          <div className="footppp">
            <p className="footterms">Terms & Conditions</p>
            <p className="footterms">Privacy Policy</p>
          </div>
          <div className="footimg12">
              <img src={facebook} alt="" className="footimg1" />
              <img src={twitter} alt="" className="footimg2" />
              <img src={instagram} alt="" className="footimg3" />
          </div>
      </div>
      {/*  */}
    </div>
  );
};

export default Footer;
