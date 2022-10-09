import React, { useEffect, useState } from 'react';
import { Link,useLocation } from 'react-router-dom'
import {FaBars, FaTimes, FaAngleDown ,FaAngleUp} from 'react-icons/fa'
import Button from '../Button/Button';
import {FaFacebook,FaInstagram, FaTwitter} from 'react-icons/fa'

// Assets
import logo from '../../assets/logo.jpeg'
import NavDropDown from '../NavDropDown/NavDropDown';
export const subLinks = [
    {
        title:'Club Directory',
        url:'/members',
        content:``
    },
    {
        title:'Club Executive/Board Members',
        url:'/club-directory',
        content:''
    }
]
export const about_drop_link = [
    {
        title:'Our History',
        url:'/history',
        content:''
    },
    {
        title:'Our Bye Law',
        url:'/our-law',
        content:''
    }
]
const MobileMenu = (props) => {
    const [linkdrop, setLinkdrop] = useState();
    const [d,setD] =useState(props.path)
    const handleDropDown = (e,id)=>{
        e.preventDefault()
        console.log('sfe')
        if(e.target.id == id){
          if(linkdrop==id){
            setLinkdrop('')
          }else{
            setLinkdrop(id)
          }
        }
      }
    console.log({linkdrop})
    useEffect(()=>{
        setLinkdrop(value=>'')
    },[d])
    console.log({d})
    return(
        <div id='mobile-menu' className='display-flex column-direction'>
            <div className='nav'>
                <li className={props.path === '' ? "active-link" : "links"}><Link to='/'>Home</Link></li>
                <li className={props.path === 'news' ? "active-link" : "links"}><Link to='/news'>News/Blog</Link></li>
                <li className={props.path === 'club-directory' ? "active-link" : "links"}>
                    {/* <Link to='/club-directory'>Club Directory</Link> */}
                    <a 
                    id='club-directory'
                    onClick={(e)=>handleDropDown(e,'club-directory')} 
                    // to='/club-directory'
                    href=''
                    >
                        Club Directory
                    </a>
                <NavDropDown submenus={subLinks} dropdown={linkdrop=='club-directory'} />
                </li>
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
            {/* <Button class='btn-a m-b_2' text="Member login"/> */}
            {/* <Button class='btn-a' text="Join Rotary"/> */}
        </div>
    )
}


const Menu = () => {
    const location = useLocation();
    const {pathname} = location
  const [linkdrop, setLinkdrop] = useState();

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

    const handleDropDown = (e,id)=>{
        e.preventDefault()
        console.log('sfe')
        setTimeout(()=>{
            setLinkdrop('')
        },1000)
        if(e.target.id == id){
          if(linkdrop==id){
            setLinkdrop('')
          }else{
            setLinkdrop(id)
          }
        }
      }
    //   console.log({linkdrop})
    return(
        <nav className="body-padding menu display-flex row-direction content-between">
            <div className='display-flex left-header-container row-direction'>
            <div className='logo'>
                <img height='40px' src={logo}   alt=''/>
                {/* <p className='logo-title'>Rotary of<br/>Ogudu</p> */}
            </div>
            <ul className='display-flex nav-container margin-left routes row-direction content-between'>
                <li className={splitPathName[1] === '' ? "active-link" : "links"}><Link to='/'>Home</Link></li>
                <li className={splitPathName[1] === 'news' ? "active-link" : "links"}><Link to='/news'>News/Blog</Link></li>
                <li 
                className={splitPathName[1] === 'club-directory' ? "active-link" : "links"}
                >
                    <NavDropDown submenus={subLinks} dropdown={linkdrop=='club-directory'} />
                    <a 
                    id='club-directory'
                    onClick={(e)=>handleDropDown(e,'club-directory')} 
                    // to='/club-directory'
                    href=''
                    color='#653096'
                    >
                        Club Directory
                    </a>
                    </li>
                <li className={splitPathName[1] === 'activities' ? "active-link" : "links"}><Link to='/activities'>Activities & Programmes</Link></li>
                <li className={splitPathName[1] === 'about' ? "active-link" : "links"}>
                <NavDropDown submenus={about_drop_link} dropdown={linkdrop=='about'} />
                    <a href='#' id='about'
                    onClick={(e)=>handleDropDown(e,'about')} 
                    >About</a>
                    </li>
                <li className={splitPathName[1] === 'contact' ? "active-link" : "links"}>
                    <Link to='/contact'>Contact</Link></li>
            </ul></div>
            <div className='right-hader-container display-flex row-direction content-between'>
                {/* <a className='btn-a'>Member login</a> */}
                {/* <a className='btn-a'>Join Rotary</a> */}
                <ul className='social-links display-flex routes row-direction content-between' style={{'width':'40px'}}> 
                    <li><a  target={'_blank'} style={{'color':'#551a8b'}}   href='https://www.instagram.com/rotaryclubogudu.gra/?igshid=YmMyMTA2M2Y%3D'><FaInstagram /></a></li>
                    <li><a target={'_blank'}  style={{'color':'#551a8b'}}  href='https://mobile.facebook.com/story.php?story_fbid=pfbid02WL5mdJXQv3KeT8bVphvkbvDMdH6ssCm4sSkrMdY3yAQHpV2rLFDkb4tKNtci4MzSl&id=483630081720933&_rdc=1&_rdr'><FaFacebook /></a></li>
                </ul>
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