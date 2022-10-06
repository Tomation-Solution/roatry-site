import React from "react";
import InputWithLabel from "../components/InputWithLabel/InputWithLabel";
import { LoginContainer, LoginContainerImg, LoginContentContainer, LoginNav } from './contact.style'
import image from '../assets/1.jpg'

const ContactPage = ()=>{
 
     return (
  
        <LoginContainer viewHieght={90}>
          <LoginContainerImg image={image}>
          </LoginContainerImg>
  
          <LoginContentContainer>
            <LoginNav>
              <div>
                <h2>Contact us today</h2>
                <br />
                <p>We{'\''}re available. Call us; we{'\''}re happy to help you meet your HR automation needs.</p>
                <br />
                <p>+1 (504) 499-5921</p>
                <p>N0 2  Ogudu, Lagos</p>
                <br />
              </div>
  
            </LoginNav>
  
            <form  >
              {/* <FlexInput>
  
              </FlexInput> */}
              <InputWithLabel
                label='First Name' 
                placeholder='Enter a First Name' 
              />
              <br />
              <InputWithLabel
                label='Last Name' 
                placeholder='Enter a Last Name' 
              />
              <br />
              <InputWithLabel
                label='Email' 
                placeholder='' 
             />
<br />  
            </form>
            <br />
            <br />
  
          </LoginContentContainer>
        </LoginContainer>
    )
  }
  export default ContactPage