import React from 'react';

import './Footer2.css';

import wechat from '../assets/wechat.png';
import email from '../assets/email.png';
import ins from '../assets/ins.png';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="item">
          <img src= {wechat} alt="Wechat" />
          <p> catoywen </p>
        </div>
        <div className="item">
          <img src= {email} alt="Email" />
          <p> cyw6944@nyu.edu </p>
        </div>
        <div className="item">
          <img src = {ins} alt="Ins" />
          <p>cato.wen</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;