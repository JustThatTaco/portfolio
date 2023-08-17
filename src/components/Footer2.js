import React from 'react';

import './Footer2.css';

import wechat from '../assets/wechat_draw.png';
import email from '../assets/email_draw.png';
import ins from '../assets/ins_draw.png';
import git from '../assets/github_draw.png';

const Footer = () => {
    return (
      <div className="footer-container">
        <div className="footer-content">
          <div className="item">
            <img className="foot_pic" src= {wechat} alt="Wechat Logo" />
            <p className="text"> catoywen </p>
          </div>
          <div className="item">
            <img src= {email} className="foot_pic" alt="Gmail Logo" />
            <p className="text"> cyw6944@nyu.edu </p>
          </div>
          <div className="item">
            <img src= {ins} className="foot_pic" alt="Instagram Logo" />
            <p className="text"> cato.wen </p>
          </div>
          <div className="item">
            <img src= {git} className="foot_pic" alt="Github Logo" />
            <p className="text"> catoywen </p>
          </div>
        </div>
      </div>
    );
  };

export default Footer;