import React, { useState } from 'react';
import { Link,useLocation } from 'react-router-dom'
import {FaBars, FaTimes, FaAngleDown ,FaAngleUp} from 'react-icons/fa'
import Button from '../Button/Button';

// Assets
import logo from '../../assets/logo.jpeg'

const MobileMenu = (props) => {
    return(
        <div id='mobile-menu' className='display-flex column-direction'>
            <div className='nav'>
                <li className={props.path === '' ? "active-link" : "links"}><Link to='/'>Home</Link></li>
                <li className={props.path === 'news' ? "active-link" : "links"}><Link to='/news'>News</Link></li>
                <li className={props.path === 'club-directory' ? "active-link" : "links"}><Link to='/club-directory'>Club Directory</Link></li>
                <li className={props.path === 'activities' ? "active-link" : "links"}><Link to='/activities'>Activities & Programmes</Link></li>
                <li className={props.path === 'about' ? "active-link" : "links"}><Link to='/about'>About Rotary</Link></li>
                <li className={props.path === 'contact' ? "active-link" : "links"}><Link to='/contact'>Contact</Link></li>
            </div>
        </div>
    )
}

const DropButton = () => {
    return(
        <div id='drop-content' className='display-flex column-direction'>
            <Button class='btn-a m-b_2' text="Member login"/>
            <Button class='btn-a' text="Join Rotary"/>
        </div>
    )
}

const Menu = () => {
    const location = useLocation();
    const {pathname} = location
    const splitPathName = pathname.split('/')

    const [mobileMenu,setMobileMenu] = useState(false)
    const [dropdown,setDropdown] = useState(false)
    
    const toggleMenu = () => {
        setMobileMenu(!mobileMenu)
        const el = document.getElementById('mobile-menu')
        if(!mobileMenu){
            el.style.display = 'flex'
            el.style.animationName = 'mobile-intro'
            el.style.right = "20px"
        }else{
            el.style.animationName = 'mobile-out'
            el.style.right = "-200px"
            el.style.display = 'none'
        }
    }

    const toggleDropdown = () => {
        setDropdown(!dropdown)
        const el = document.getElementById('drop-content');
        if(!dropdown){
            el.style.display = 'flex'
        }else{
            el.style.display = 'none'
        }
    }
    return(
        <nav className="body-padding menu display-flex row-direction content-between">
            <div className='display-flex left-header-container row-direction'>
            <div className='logo'>
                <img height='40px' src={logo} />
                {/* <p className='logo-title'>Rotary of<br/>Ogudu</p> */}
            </div>
            <ul className='display-flex nav-container margin-left routes row-direction content-between'>
                <li className={splitPathName[1] === '' ? "active-link" : "links"}><Link to='/'>Home</Link></li>
                <li className={splitPathName[1] === 'news' ? "active-link" : "links"}><Link to='/news'>News</Link></li>
                <li className={splitPathName[1] === 'club-directory' ? "active-link" : "links"}><Link to='/club-directory'>Club Directory</Link></li>
                <li className={splitPathName[1] === 'activities' ? "active-link" : "links"}><Link to='/activities'>Activities & Programmes</Link></li>
                <li className={splitPathName[1] === 'about' ? "active-link" : "links"}><Link to='/about'>About Rotary</Link></li>
                <li className={splitPathName[1] === 'contact' ? "active-link" : "links"}><Link to='/contact'>Contact</Link></li>
            </ul></div>
            <div className='right-hader-container display-flex row-direction content-between'>
                <a className='btn-a'>Member login</a>
                <a className='btn-a'>Join Rotary</a>
            </div>
            <div id='dropdown' onClick={() => toggleDropdown() }>
                {!dropdown ? <FaAngleDown /> : <FaAngleUp /> }
                <DropButton />
            </div>
            <div id='mobile-bar' onClick={() => toggleMenu()}>
                {!mobileMenu ? <FaBars  /> : <FaTimes />}
            </div>
            <MobileMenu path={splitPathName[1]}/>
        </nav>
    )
}

export default Menu