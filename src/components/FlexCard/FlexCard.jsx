
import React from "react"
import { FlexCardContainer, FlexCardContentContainer, FlexCardImgContainer } from "./FlexCard.style";
import Image from '../../assets/about/2.png'


const FlexCard = (props)=>{


    return (
        <FlexCardContainer isVariant={props.isVariant}>
           <FlexCardContentContainer>
           <h3>{props.heading}</h3>
            <h2>{props.subHeding}</h2>
            <p>
                {props.text}
            </p>

            <a href="">more</a>
           </FlexCardContentContainer>

            <FlexCardImgContainer>
                    <img src={props.img} alt="" />
            </FlexCardImgContainer>
        </FlexCardContainer>
    )
}


export default FlexCard