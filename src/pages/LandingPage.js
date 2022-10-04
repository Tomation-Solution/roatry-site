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

const HeroBody = () => {
    return (
        <div style={{ backgroundImage: `url(${image})`, backgroundPosition: 'center' }} className="hero-landing-container column-direction display-flex">
            <div className="upper-landing-hero">
                <h1 className="main-text bold-font secondary-color">We are an <span className="primary-color">Organization</span> aimed at helping
                    our society become a <span className="primary-color">Better Place</span></h1>
            </div>
            <div className="content-between bottom-landing-hero">
                <div>
                    <p className="regular-font secondary-color">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt nisl sit amet tellus sollicitudin pharetra. Etiam convallis magna non efficitur facilisis. Curabitur euismod velit vel nisl euismod porta. Cras erat est, vulputate eget consequat a, congue id dui. Nulla rhoncus pharetra turpis vel molestie.
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
const LandingPage = () => {

    const activities = [
        {
            date: 'September 27th 2022', 
            location: 'Lagos', 
            title:'Lorem Ipsum',
            text: "To ensure good fellowship amongst our member based on our club tradition",
            img: image
        },
        {
            date: 'September 27th 2022', 
            location: 'Lagos', 
            title:'Lorem Ipsum',
            text: "To ensure good fellowship amongst our member based on our club tradition",
            img: image
        },
        {
            date: 'September 27th 2022', 
            location: 'Lagos', 
            title:'Lorem Ipsum',
            text: "To ensure good fellowship amongst our member based on our club tradition",
            img: image
        },
        {
            date: 'September 27th 2022', 
            location: 'Lagos', 
            title:'Lorem Ipsum',
            text: "To ensure good fellowship amongst our member based on our club tradition",
            img: image
        },
        {
            date: 'September 27th 2022', 
            location: 'Lagos', 
            title:'Lorem Ipsum',
            text: "To ensure good fellowship amongst our member based on our club tradition",
            img: image
        },
        {
            date: 'September 27th 2022', 
            location: 'Lagos', 
            title:'Lorem Ipsum',
            text: "To ensure good fellowship amongst our member based on our club tradition",
            img: image
        }
    ]

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
                        <div className="display-flex body-padding content-between">
                            <MissionCard src={circular} text="To execute service project in the Rotary Seven Area
                                    satisfaction of our community."/>
                            <MissionCard src={eye} text="To execute large and on
                            -goin Servie Projects that would impact
                            on our community and increase our visibility."/>
                        </div>
                        <div className="display-flex content-center">
                            <MissionCard src={blackcard} style={{textAlign: 'center'}} text="To be a full PHF Club." />
                        </div>
                        <div className="display-flex body-padding content-between">
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
                    <div>
                        <h2>Recent Activities</h2>
                        <div className="display-flex content-between m-b m-t activities">
                            {activities.slice(0,3).map(item => 
                                (<Card image={item.img} date={item.date} location={item.location} contentTitle={item.title} contentText={item.text} />))}
                        </div> 

                        <div className="display-flex content-between m-b activities">
                            {activities.slice(3,6).map(item => 
                                (<Card image={item.img} date={item.date} location={item.location} contentTitle={item.title} contentText={item.text} />))}
                        </div> 
                        <div className="display-flex content-between m-b activities">
                            {activities.slice(3,6).map(item => 
                                (<Card image={item.img} date={item.date} location={item.location} contentTitle={item.title} contentText={item.text} />))}
                        </div>
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
                        <img className="container-radius" src={image}/>
                    </div>
                </div>
            </div>
            <div className="gallery-section body-padding">
                <div className="gallery-text-intro">
                    <h1 className="bold-font" style={{textAlign: 'center'}}>Our Gallery</h1>
                    <p className="regular-font" style={{textAlign: 'center'}}>To ensure good fellowship amongst our member based on our club tradition and  guided by priniciples,policies and best practice of Rotary international.</p>
                </div>
                <div className="gallery-holder display-flex content-between">
                    <div className="col-2 display-flex content-between wrap">
                        <img className="gallery-img container-radius" height="130px" src={image}/>
                        <img height="130px" className=" container-radius gallery-img " src={image}/>
                        <img height="130px" className="container-radius gallery-img " src={image}/>
                        <img height="130px" className=" container-radius gallery-img" src={image}/>
                        <img height="130px" className="container-radius gallery-img " src={image}/>
                    </div>
                    <div className="col-2"><img height="250" className="image container-radius" src={image} /></div>
                    <div className="col-2 display-flex content-between wrap">
                        <img className="gallery-img container-radius" height="130px" src={image}/>
                        <img height="130px" className=" container-radius gallery-img " src={image}/>
                        <img height="130px" className="container-radius gallery-img " src={image}/>
                        <img height="130px" className=" container-radius gallery-img" src={image}/>
                        <img height="130px" className="container-radius gallery-img " src={image}/>
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