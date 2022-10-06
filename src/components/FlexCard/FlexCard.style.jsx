import styled from 'styled-components';


export const FlexCardContainer= styled.div`

display: flex;

flex-direction: ${props=>props.isVariant?' column-reverse':' column'};
padding: 1rem;


@media screen and (min-width: 800px){
    /* border: 1px solid red; */
    /* flex-direction: row;
    text-align: left; */
flex-direction: ${props=>props.isVariant?'row':'row-reverse'};
text-align: ${props=>props.isVariant?'left':'right'};

    max-width: 800px;
    align-items: center;
    margin: 0 auto;
}
`


export const FlexCardContentContainer= styled.div`

h3{
    font-weight: 100;
}
h2{
    color: #0632B6;
    padding: 1rem 0;
}
a{
    color: #0632B6;

}

@media screen and (min-width: 800px){
    width: 50%;

}
`


export const FlexCardImgContainer= styled.div`
    width: 200px;
    margin:  0 auto;
img{
    width: 100%;
    height: 100%;
}

@media screen and (min-width: 800px){
    width: 40%;

}
`