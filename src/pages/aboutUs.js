import React from "react"
import FlexCard from '../components/FlexCard/FlexCard'
import img1 from '../assets/about/1.png'
import img2 from '../assets/about/2.png'
import img3 from '../assets/about/3.png'

const about_dat = [
    
]

const AboutUs = ()=>{

    return (
        <div>

            <FlexCard
                heading={'About Us'}
                subHeding={'Brief History'}
                text={
                    'Rotary Club of Ogudu GRA was chartered on 9th May 2006 and the Charter Certificate was presented by Rotn. PDG Michael Olawale-Cole to the Club’s Charter President, Rotn Onikepo Oshodi on 30th May 2006. '}
                img={img2}
            isVariant={true}
            />
            <br/>
            
            <br/>
            <p style={{'textAlign':'center','padding':'1rem','maxWidth':'500px','margin':'20px auto'}}>
            Rotn Chris Ugokwe of the Rotary Club of Ogba who was the DGSR and many of the officers and members of the sponsoring club, Rotary Club of Ogba, were also present at the ceremony.
            </p>
            <FlexCard
            
            heading={'About Us'}
                subHeding={'Constitution'}
                text={
                    `
                    The governing body of this club shall be the board consisting of 15 members of this club, namely, the president
                    `
                }
                img={img3}
            isVariant={false}/>
            <br/>
            <br/>
            <p style={{'textAlign':'center','padding':'1rem','maxWidth':'500px','margin':'20px auto'}}>
            vice-president, president-elect (or president-nominee, if no successor has been elected), secretary, treasurer, and the sergeant-at-arms. At the discretion of the board, also added can be 9 directors elected in accordance with article 3, section 1 of these bylaws, and the immediate past president. 
            </p>
            <h2 style={{'color':'#0632B6','textAlign':'center'}}>
            Our Board of Directors
            </h2>
            <br/>
            
            <FlexCard
            
            heading={''}
                subHeding={''}
                text={
                    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec 
                    `
                }
                img={img1}
            isVariant={true}/>
            <br/>
        </div>


    )
}

export default AboutUs