import React from 'react';
import {FaFacebook,FaInstagram, FaTwitter} from 'react-icons/fa'


import logo from '../../assets/logo.jpeg'
const Footer = () => {
    return(
        <div className='body-padding footer display-flex content-start'>
            <div className='col'>
                <img height='40px' src={logo}  alt=''/>
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
                    <li><a  target={'_blank'} style={{'color':'white'}}   href='https://www.instagram.com/rotaryclubogudu.gra/?igshid=YmMyMTA2M2Y%3D'><FaInstagram /></a></li>
                    <li><a target={'_blank'}  style={{'color':'white'}}  href='https://mobile.facebook.com/story.php?story_fbid=pfbid02WL5mdJXQv3KeT8bVphvkbvDMdH6ssCm4sSkrMdY3yAQHpV2rLFDkb4tKNtci4MzSl&id=483630081720933&_rdc=1&_rdr'><FaFacebook /></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer