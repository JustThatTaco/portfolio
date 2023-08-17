import React from 'react';

import './Footer2.css';

import wechat from '../assets/wechat_draw.png';
import email from '../assets/email_draw.png';
import ins from '../assets/ins_draw.png';

const Footer = () => {
    return (
      <div className="footer-container">
        <div className="footer-content">
          <div className="item">
            <img className="foot_pic" src= {wechat} alt="Picture 1" />
            <p className="text"> catoywen </p>
          </div>
          <div className="item">
            <img src= {email} className="foot_pic" alt="Picture 2" />
            <p className="text"> cyw6944@nyu.edu </p>
          </div>
          <div className="item">
            <img src= {ins} className="foot_pic" alt="Picture 3" />
            <p className="text"> cato.wen </p>
          </div>
        </div>
      </div>
    );
  };

export default Footer;