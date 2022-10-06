import { Carousel } from "react-responsive-carousel"
import Image1 from '../../assets/Slider/1.png'
import Image2 from '../../assets/Slider/2.png'
import React from "react"
import ReactDOM from 'react-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css";
const SliderLayout = (props)=>{

    return (
        <div>
            <Carousel showArrows={true}
            //  onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}
            >
                 <div>
                    <img src={Image1} />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src={Image2}/>
                    {/* <p className="legend">Legend 2</p> */}
                </div>
            </Carousel>

                {props.children}
        </div>
    )
}

export default SliderLayout