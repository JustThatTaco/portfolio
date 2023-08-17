import React from 'react';
import './Footer.css';

import wechat from '../assets/wechat.png';
import email from '../assets/email.png';
import ins from '../assets/ins.png';

const Footer = () => {
    return (
        <div>
            <p className="find">
                Find Me At:
            </p>
            {/* <div style={{width: '90vw', margin: '0 auto'}}> */}
            <div style={{width: '90vw', margin: '0 auto', display: 'inline-block'}}>
                <img src={wechat}
                    alt="Wechat Logo"
                    style={{ width: '10vw', height: 'auto', float:'left'}}
                />
                <p className = 'contact'> catoywen </p>
                <img src={email}
                    alt="Email Logo"
                    style={{ width: '10vw', height: 'auto', float:'left'}}
                />
                <p className = 'contact'> cyw6944@nyu.edu </p>
                <img src={ins}
                    alt="Instagram Logo"
                    style={{ width: '10vw', height: 'auto', float:'left'}}
                />
                <p className = 'contact'> cato.wen </p>
            </div>
            {/* </div> */}
        </div>
    );
};
  
export default Footer;