import { DropdownContainer } from './NavDropDown.style';
import React from 'react';
import { useNavigate } from "react-router-dom";




const NavDropDown = ({submenus=[], dropdown=false,})=>{

  const route = useNavigate()
  return (
    <DropdownContainer className={`dropdown ${dropdown ? 'show' : ''}`}>
      {submenus.map((submenu, index) => (
        <li key={index} className="menu-items"
         onClick={(e)=> route(submenu.url)}
         >
          <a href={'#'}>{submenu.title}</a>
          <p>{submenu.content}</p>
        </li>
      ))}
    </DropdownContainer>
  )
}


export default NavDropDown