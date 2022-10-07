import React from "react"
import { AchiveHeroContent, AchiveHeroImageContainer, AchiveMentsHeroSection, AchiveMentsMainContainer } from "./AchiveMents.style"
import achive_hero_image1 from '../assets/activites/Pexels Photo by Matthias Groeneveld.png'
import achive_hero_image2 from '../assets/activites/Pexels Photo by Nataliya Vaitkevich.png'
import AchivementDetail from "../components/AchivementDetail/AchivementDetail"

import image1 from '../assets/activites/1.png'
import image2 from '../assets/activites/2.png'
import image3 from '../assets/activites/3.png'
import image4 from '../assets/activites/5.png'
import image5 from '../assets/activites/5.png'

import image6 from '../assets/activites/6.png'
import image7 from '../assets/activites/7.png'
import image8 from '../assets/activites/8.png'
import image9 from '../assets/activites/9.png'


import image10 from '../assets/activites/10.png'
import image11 from '../assets/activites/11.png'

import image12 from '../assets/activites/12.png'
import image13 from '../assets/activites/13.png'
import image14 from '../assets/activites/14.png'
import image15 from '../assets/activites/15.png'



const AchiveMents = (props)=>{

    return (
        <AchiveMentsMainContainer>
                <AchiveMentsHeroSection>
                    <AchiveHeroImageContainer>
                        <img className="achive_hero_image1" src={achive_hero_image1} alt="" />
                        <img className="achive_hero_image2" src={achive_hero_image2} alt="" />
                    </AchiveHeroImageContainer>
                    <AchiveHeroContent>
                        Club  <span>Projects and Achievment</span> in the last 5 years
                    </AchiveHeroContent>

                </AchiveMentsHeroSection>

                <br /><br />
                <br /><br />
                <br /><br />
                <AchivementDetail
                image1={image1}
                image2={image2}
                image3={image3}
                image4={image4}
                image5={image5}
                title='Rotary Year 2017-2018(Project)'

                points={[
'Donation of exercise books and Career talk at Ojota senior secondary school',
'Empowerment of men and women in Ogudu community',
'Renovation of toilet facility, Cell room at Ogudu Police station',' Donation of tissue papers, food items and books to little saints Orphanage Ogudu',
' Family Health Day Project','Polio plus Immunization','Donation of Desk and chairs to Ogudu Grammar school ','Sponsorship of two children at little Saints Orphanage Ogudu'
                ]}
                />
                <br /><br />
                <AchivementDetail
                image1={image6}
                image2={image7}
                image3={image8}
                image5={image9}
                // image4={image4}//special
                title='Rotary Year 2018-2019(Project)'

                points={[
'Donation of a Medical Check facility to Ogudu GRA Community',
'Provision of a Library and facilities to Ogudu Nursery and Primary School ',
' Sponsorship of two (2) orphans at Little Saints Orphanage',
' Donation of maternity kits at Kosofe Health center Ogudu',
' Donation of mosquito repel but treated nets at Binukonu Market Ojota / Ogudu Road',
'Micro finance empowerment for men and women in Ogudu community',
' Polio plus Immunization',
'Sponsorship of 8 participants to 2018/2019 RYLA','Sponsorship of Inter-House Sports at Ogudu Primary School'
                ]}
                />


<br /><br />
                <AchivementDetail
                image1={image10}
                image2={image11}
                image3={''}
                image5={''}
                // image4={image4}//special
                title='Rotary Year 2019-20120(Project)'

                points={[
'Donation of a Medical Check facility to Ogudu GRA Community',
'Provision of a Library and facilities to Ogudu Nursery and Primary School ',
'Sponsorship of two (2) orphans at Little Saints Orphanage',
'Donation of maternity kits at Kosofe Health center Ogudu','Donation of mosquito repel but treated nets at Binukonu Market Ojota / Ogudu Road',
'Micro finance empowerment for men and women in Ogudu community',
'Polio plus Immunization','Sponsorship of 8 participants to 2018/2019 RYLA','Sponsorship of Inter-House Sports at Ogudu Primary School'
                ]}
                />
<br /><br />
                <AchivementDetail
                image1={image12}
                image2={image13}
                image3={image14}
                image5={image15}
                // image4={image4}//special
                title='Rotary Year 2020-2021(Project)'

                points={[
                    ' August - Road walk',
                    ' September- Donation of books and talk at Ogudu Senior Grammar school ',
                    'October: Commissioning of Administrative block at Area H Police Command Ogudu. ',
'Micro Credit','Cervical Cancer Donation ','Little Saints orphanageAA7. December: Hepatitis B screening and Vaccine','January: Appreciate of 4 people from different Vocations ',
' February: Town hall meeting ','March: Refurbish of Borehole at Anglican Primary school Ogudu. ',
'April: Donation of Maternity kits at Ogudu health Center','May: A talk on sexual abuse at Ogudu Senior Grammar school. ','June: Novelty match between RC Ogudu GRA, RC Ikeja airport, RC Anthony GOLDEN.'
              ]}
                />

<br /><br />
                <AchivementDetail
                image1={image1}
                image2={image2}
                image3={image3}
                image4={image4}
                image5={image5}
                title='Rotary Year 2021-2022(Project)'

                points={[
'September, 2020, Basic education/Family Health ','October, 2020, Economic and community developmentLeadership training for Rotaractors –',
`December, 2020, Disease Prevention and Treatment
Upgrading of Rotary Club of Ogudu GRA Health Facility.`,`March, 2021, Water and Sanitation
Construction Of Two Jetties at Agboyi & Boat House/Toilet
Renovation Of Toilet Facilities and Portable Water Supply System At Agboyi`,`April, 2021. Maternity and Child Health
Save The Girl Child Project`,`Zero Hunger Project
Bill Board at Ogudu Gardens `,` AUGUST (Membership New Club Dev.
    Membership Drive Based Seminar/Outing `,`SEPTEMBER-District Governor’s Visit`,`OCTOBER (Economic and community development) 
    BPM Certificate Course Free basic employment skills acquisition programme for 5`
                ]}
                />



<br />
<br />
<br />
<h2 style={{'textAlign':'center'}}>Achievments</h2>

<br />
<ul style={{'textAlign':'center'}}>
{
    [
        `Overall best in Rotary Foundation`,`2nd best overall Club `,`Overall best in membership`,
        `Best Club in Public Relations `,`Rotarian of the year Award`,
`Community Project Award`,`Excellent Service Award`,`Won 3rd position in Projects Exhibition at the District conference
`,`Best Club in Bulletin Exhibition`,`Won Presidential citation yearly`,`The Club has produced a District Governor 
`,`The Club produced the 2nd Rotarian in District 9110 to be decorated as an Arch Klumph Society member
`,`Adoption of 2 orphans at the little saint orphanage Ogudu
`,`Micro credit scheme for over 10 beneficiaries yearly
`,`Sponsorship of youths to RYLA for 14 years now
`,`Weekly publication of Club’s bulletin`,`It has produced a magazine where historical account of club achievements and activities in the first 10 years were published
`,`The current membership is 52  `
    ].map(data=>(
        <>
        <li>{data}</li><br />
        </>
    ))
}
</ul>

{/* 






















*/}
        </AchiveMentsMainContainer>
    )
}

export default AchiveMents