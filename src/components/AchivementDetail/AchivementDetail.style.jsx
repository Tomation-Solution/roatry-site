import styled from "styled-components";





export const AchivementDetailContainer= styled.div`
     max-width: 1000px;
    /* border: 1px solid red; */
    margin: 0 auto;
    li{
        padding: 1rem ;
    }

    h2{
        color: #0632B6;
    }

    @media screen and (min-width: 800px) {
        h2{
            font-size: 2rem;
        }
    }

`

export const AchivementDetailImgContainer= styled.div`
     gap: 5px 10px;
    padding: 1.2rem 0;
    display: grid;
    grid-template-areas:
    "firstImage SecondImage  FourthImage"
    "ThirdImage  FifthImage FourthImage"
     ;
     /* gap: 10px 30px; */
    img{
        border-radius: 10px;
        /* object-fit: contain; */
        width: 100%;
    }
    &>img:nth-child(1){
          grid-area: firstImage;
        }
       &> img:nth-child(2){
          grid-area: SecondImage;
        }
      &>  img:nth-child(3){
          grid-area:ThirdImage;
        }

        &>  img:nth-child(4){
          grid-area:FourthImage;
          height: 100%;
          object-fit: cover;
        }
        &>  img:nth-child(5){
          grid-area:FifthImage;
        }


`