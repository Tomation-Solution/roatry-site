import React from "react";
import Button from '../components/Button/Button.js'
import ContainerButton from '../components/Button/index.js'
import HeroContainer from "../components/global-component/HeroContainer";
import image from '../assets/Images/young-black.jpg'
import MissionCard from "../components/MissionCards.js";
import Card from "../components/Card.js";

// asstes
import circular from '../assets/Icons/institute.jpeg'
import eye from '../assets/Icons/eye.jpeg'
import badge from '../assets/Icons/badge.jpeg'
import house from '../assets/Icons/house.jpeg'
import blackcard from '../assets/Icons/black-card.jpeg'
import new1 from '../assets/news/1.jpg';
import new2 from '../assets/news/2.png';
import new3 from '../assets/news/3.png';
import new4 from '../assets/news/4.png';
import new5 from '../assets/news/5.png';
import new6 from '../assets/news/6.png';
import new7 from '../assets/news/7.png';
import new8 from '../assets/news/8.png';
import new9 from '../assets/news/9.jpeg';
import new10 from '../assets/news/10.jpg';
import new20 from '../assets/news/20.png';
import img_new from '../assets/news/IMG-20220628-WA0099.jpg';
import img_new2 from '../assets/news/WhatsApp Image 2022-10-06 at 11.40.24 AM.jpeg'
import prince from '../assets/news/prince.jpeg'
import onikepo from '../assets/news/WhatsApp Image 2022-10-06 at 11.30.59 AM.jpeg'

import BiggerPics from '../assets/gallery/BiggerPics.png';
import gallery1 from '../assets/gallery/1.png';
import gallery2 from '../assets/gallery/2.png';
import gallery3 from '../assets/gallery/3.png';
import gallery4 from '../assets/gallery/4.png';
import gallery5 from '../assets/gallery/5.png';
import gallery6 from '../assets/gallery/6.png';
import gallery8 from '../assets/gallery/8.png';
import gallery10 from '../assets/gallery/10.jpeg';
import gallery12 from '../assets/gallery/12.jpeg';
import gallery13 from '../assets/gallery/13.jpeg';
import heroimage from '../assets/Slider/hero.jpg'
// 20.png

const HeroBody = () => {
    return (
        <div style={{ backgroundImage: ` linear-gradient(to bottom, rgba(57, 29, 218, 0.11),black),url(${heroimage})`, backgroundPosition: 'center' }} className="hero-landing-container column-direction display-flex">
            <div className="upper-landing-hero">
                <h1 className="main-text bold-font secondary-color">We are an <span className="primary-color">Organization</span> aimed at helping
                    our society become a <span className="primary-color">Better Place</span></h1>
            </div>
            <div className="content-between bottom-landing-hero">
                <div>
                    <p className="regular-font secondary-color">
                        {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt nisl sit amet tellus sollicitudin pharetra. Etiam convallis magna non efficitur facilisis. Curabitur euismod velit vel nisl euismod porta. Cras erat est, vulputate eget consequat a, congue id dui. Nulla rhoncus pharetra turpis vel molestie. */}
                    </p>
                </div>
                <div className="display-flex content-between inner-bootom-div">
                    <a className="btn-a" style={{ backgroundColor: 'rgb(57, 29, 218)', color: 'white' }}>Join Rotary</a>
                    <a className="btn-a">Become a Volunteer</a>
                </div>
            </div>
        </div>
    )
}
export const activities = [
    {
        date: '', 
        location: 'Lagos', 
        title:'Members birthday celebration',
        text: "Members birthday celebration during one of our regular fellowship",
        img: img_new
    },
    {
        date: '', 
        location: 'Lagos', 
        title:'Literacy Programme',
        text: "At the Rotary Basic Literacy Programme",
        img: img_new2
    },
    {
        date: '', 
        location: 'Lagos', 
        title:'Polo Event',
        text: "At District Polio Event",
        img: new3
    },
    {
        date: '', 
        location: '', 
        title:'ceremony of Prince Akeem Akani Shonde',
        text:`
        At the wedding ceremony of Prince Akeem Akani Shonde, one of our members
        `,
        img: prince
    },
    {
        date: '', 
        location: 'Lagos', 
        title:'Tree Planting',
        text: "Club doing thier part to stay green for the environment",
        img: new5
    },
    {
        date: '', 
        location: 'Lagos', 
        title:' PP Onikepo Oshodi Visit',
        text: "Visit to our Charter President, PP Onikepo Oshodi",
        img: onikepo
    }
    ,
    {
        date: 'September 27th 2022', 
        location: 'Lagos', 
        title:'Lorem Ipsum',
        text: "To ensure good fellowship amongst our member based on our club tradition",
        img: new7
    }
    ,
    {
        date: 'September 27th 2022', 
        location: 'Lagos', 
        title:'Lorem Ipsum',
        text: "To ensure good fellowship amongst our member based on our club tradition",
        img: new10
    }
]
const LandingPage = () => {

 

    return (
        <div>
            <HeroContainer children={<HeroBody />} />
            <div className="inner-container">
                <div className="mission-container">
                    <div>
                        <ContainerButton class="auto-margin display-flex content-between inner-bootom-div">
                            <Button style={{ backgroundColor: 'rgb(57, 29, 218)', color: 'white' }} class="btn-a" text='Our Mission' />
                            <Button style={{ backgroundColor: 'white', color: 'rgb(57, 29, 218)' }} class="btn-a" text='Our Vision' />
                        </ContainerButton>
                    </div>
                    <div className="mission-inner">
                        <div className="display-flex content-between">
                            <MissionCard src={circular} text="To execute service project in the Rotary Seven Area
                                    satisfaction of our community."/>
                            <MissionCard src={eye} text="To execute large and on
                            -goin Servie Projects that would impact
                            on our community and increase our visibility."/>
                        </div>
                        <div className="display-flex content-center">
                            <MissionCard src={blackcard} style={{textAlign: 'center'}} text="To be a full PHF Club." />
                        </div>
                        <div className="display-flex  content-between">
                            <MissionCard src={badge} text="To ensure good fellowship
                            amongst our members based on our Club traditions
                            and guided by priniciples, policies and best
                            practice of Rotary internation."/>
                            <MissionCard src={circular} text="To institute a sound 'we care'
                            programme for our members to ensure sustainability
                            and rentention of our members."/>
                        </div>
                        <div className="display-flex content-center">
                            <MissionCard style={{textAlign: 'center'}} src={house} text="To develop leaders that will serve beyond the Club." />
                        </div>
                    </div>
                </div>
                
                <div className="body-padding">
                    <div >
                        <h2>Recent Activities</h2>
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
            </div>
              
            <div className="display-flex content-between middle-container body-padding">
                <div className="width-half">
                    <div>
                        <h4><span style={{color: 'orange'}}>Together,</span> we can make the world a better place</h4>
                    </div>
                    <div>
                        <p>To ensure good fellowship amongst our members based on our Club traditions and duided by priniciples, policies and best practice of Rotary international.</p>
                        <Button style={{ backgroundColor: 'white', color: 'rgb(57, 29, 218)' }} class="btn-a" text='Volunteer' />
                    </div>
                </div>
                <div className="display-flex content-end width-half">
                    <div className="image">
                        <img className="container-radius" src={new20}/>
                    </div>
                </div>
            </div>
           
            <div className=" body-padding" style={{'max-width':'700px','margin':'0 auto'}} > 
            <h1 className="bold-font" style={{'textAlign':'center'}}>Membership Benefits </h1>
                        <ol>
                            <li>Making friends and getting to know people in different classifications</li><br/>
                            <li>Enjoy awesome fellowship with professionals from different industries  </li><br/>
                            <li>Develop true and helpful friendships</li><br/>
                            <li>An opportunity to serve your community, improve your vocation, and promote international friendship.</li><br/>
                            <li>To meet other Rotarians when you attend District functions or other Clubs meetings </li><br/>
                        </ol>
            </div>

            <div className="gallery-section body-padding">
                <div className="gallery-text-intro">
                    <h1 className="bold-font" style={{textAlign: 'center'}}>Our Gallery</h1>
                    <p className="regular-font" style={{textAlign: 'center'}}>To ensure good fellowship amongst our member based on our club tradition and  guided by priniciples,policies and best practice of Rotary international.</p>
                </div>
                <div className="gallery-holder display-flex content-between">
                    <div className="col-2 display-flex content-between wrap">
                        <img className="gallery-img container-radius" height="130px" src={gallery1}/>
                        <img height="130px" className=" container-radius gallery-img " src={gallery2}/>
                        <img height="130px" className="container-radius gallery-img " src={gallery3}/>
                        <img height="130px" className=" container-radius gallery-img" src={gallery4}/>
                        <img height="130px" className="container-radius gallery-img " src={gallery5}/>
                    </div>
                    <div className="col-2"><img height={'100%'} className="image container-radius"  src={BiggerPics}  /></div>
                    <div className="col-2 display-flex content-between wrap">
                        <img height="130px" className=" container-radius gallery-img " src={gallery6}/>
                        <img className="gallery-img container-radius" height="130px" src={image}/>
                        <img height="130px" className="container-radius gallery-img " src={gallery13}/>
                        <img height="130px" className=" container-radius gallery-img" src={gallery10}/>
                        <img height="130px" className="container-radius gallery-img " src={gallery12}/>
                    </div>
                </div>
                <div className="display-flex content-center">
                    <Button style={{paddingLeft: '45px' , paddingRight: '45px'}} class="btn-a" text='View Gallery'/>
                </div>
            </div>
        </div>
    )
}

export default LandingPage