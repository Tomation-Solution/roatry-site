import SliderLayout from "../components/global-component/SliderLayout"
import React from "react"
import Card from "../components/Card"
import new1 from '../assets/news/1.jpg';
import new2 from '../assets/news/2.png';
import new3 from '../assets/news/3.png';
import new4 from '../assets/news/4.png';
import new5 from '../assets/news/5.png';
import new6 from '../assets/news/6.png';
import new7 from '../assets/news/7.png';
import new8 from '../assets/news/8.png';
import new20 from '../assets/news/20.png';
import Button from "../components/Button/Button";
import { activities } from "./LandingPage";







const News = ()=>{

  
    return (
        <SliderLayout>
            <br/>
            <br/>
            <div className="body-padding">
                    <div >
                        <h2>Latest News</h2>
                        <div className="display-flex content-between m-b m-t activities">
                            {activities.slice(0,3).map(item => 
                                (<Card image={item.img} date={item.date} location={item.location} contentTitle={item.title} contentText={item.text} />))}
                        </div> 

                        <div className="display-flex content-between m-b activities">
                            {activities.slice(3,6).map(item => 
                                (<Card image={item.img} date={item.date} location={item.location} contentTitle={item.title} contentText={item.text} />))}
                        </div> 
                        {/* <div className="display-flex content-between m-b activities">
                            {activities.slice(3,6).map(item => 
                                (<Card image={item.img} date={item.date} location={item.location} contentTitle={item.title} contentText={item.text} />))}
                        </div> */}
                        <div className="display-flex content-center body-padding">
                        <Button class="btn-a" text='View all events' />
                        </div>
                    </div>
                </div>
        </SliderLayout>
    )
}

export default News