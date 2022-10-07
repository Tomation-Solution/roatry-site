import React from "react"
import { AchivementDetailContainer, AchivementDetailImgContainer } from "./AchivementDetail.style"


const AchivementDetail = ({image1,image2,image3,image4,image5,title,points=[]})=>{


    return (
        <AchivementDetailContainer>
            <h2>{title}</h2>
            <AchivementDetailImgContainer>
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
                <img src={image4}alt="" />
                <img src={image5} alt="" />
            </AchivementDetailImgContainer>
<ol>
        {
            points.map((data,index)=>(
                <li key={index}>{data}</li>
            ))
        }
</ol>



        </AchivementDetailContainer>

    )
}

export default AchivementDetail