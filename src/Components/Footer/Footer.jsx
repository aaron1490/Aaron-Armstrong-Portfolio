import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/homelogo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="" />
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2024 Aaron Armstrong. All rights reserved.</p>
      <div className="footer-bottom-right">
        <p>Term of Services</p>
        <p>Privacy Policy</p>
        <p>Connect with me</p>
      </div>
      </div>
    </div>
  );
};

export default Footer;
