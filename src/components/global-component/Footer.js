import React from 'react';
import {FaFacebook,FaInstagram, FaTwitter} from 'react-icons/fa'


import logo from '../../assets/logo.jpeg'
const Footer = () => {
    return(
        <div className='body-padding footer display-flex content-start'>
            <div className='col'>
                <img height='40px' src={logo}/>
                {/* Logo Here */}
            </div>
            <div className='col'>
                <div>
                    <h1 className="footer-col-title">Quick Link</h1>
                </div>
                <ul className='routes'> 
                    <li><a>Home</a></li>
                    <li><a>News</a></li>
                    <li><a>Club Directory</a></li>
                    <li><a>Activities & Programmes</a></li>
                    <li><a>About Rotary</a></li>
                    <li><a>Contact</a></li>
                    <li><a>Blog</a></li>
                </ul>
            </div>
            <div className='col'>
                <div>
                    <h1 className="footer-col-title">Connect With Us</h1>
                </div>
                <ul className='social-links display-flex routes row-direction content-between'> 
                    <li><a><FaInstagram /></a></li>
                    <li><a><FaFacebook /></a></li>
                    <li><a><FaTwitter/></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer