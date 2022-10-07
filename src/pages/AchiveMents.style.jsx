import styled from "styled-components";





export const AchiveMentsMainContainer = styled.div`
    
`



export const AchiveMentsHeroSection = styled.div`
  @media screen and (min-width: 800px){
      display: flex;
        flex-direction: row-reverse;
        align-items:center;
        max-width: 1200px;
        justify-content: space-between;
        /* border: 1px solid yellow; */
        margin: 0 auto;
  }
`

export const AchiveHeroContent = styled.h1`
text-align: center;
padding: 1rem .9rem;
font-weight: 700;
/* border: 1px solid red; */

& >span{
    color: #f9a07d;
}    
@media screen and (min-width: 800px){
    font-size: 3rem;
    width: 40%;
    text-align: left;
}
`

export const AchiveHeroImageContainer = styled.div`
    display: none;
   img{
    object-fit: contain;
   } 

   @media screen and (min-width: 800px){
    display: flex;
    flex-direction: row-reverse;
    width: 50%;
    img{
        height: 100%;
    }
    .achive_hero_image1{
        width: 70%;
    }
    .achive_hero_image2{
        width: 30%;
        transform: translateY(80px);
    }
    
   }
`