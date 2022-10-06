
import React from "react"
import img2 from '../assets/about/2.png'
import img4 from '../assets/about/4.png'
import FlexCard from '../components/FlexCard/FlexCard'


const HistoryDetail = ()=>{

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
            <p style={{'textAlign':'center','padding':'1rem','maxWidth':'500px','margin':'20px auto'}}>
            Rotn Chris Ugokwe of the Rotary Club of Ogba who was the DGSR and many of the officers and members of the sponsoring club, Rotary Club of Ogba, were also present at the ceremony.

The first project of the Rotary Club of Ogudu GRA was the donation of food items and household items to the Little Saints Orphanage, Ogudu GRA in 2005, which was repeated in a bigger scale in December 2006.
The second project of the club was the provision of a borehole for water supply to the residents of Ogudu Ori-Oke community in January, 2007 in collaboration with Rotarians from District 7820, Canada. This water project was commissioned by then DG Rotn (Chief) Yomi Adewunmi, and a Rotary Community Corps (RCC) was also established at the Ogudu Ori-Oke, which assisted the Club tremendously as its members arranged the supervision and protection of the borehole water equipment and facility.
            </p>

            <img src={img4} alt="" style={{'maxWidth':'700px','width':'80%','margin':'.6rem auto','display':'block'}} />
            <p  style={{'textAlign':'center','padding':'1rem','maxWidth':'500px','margin':'20px auto'}}>
            By July 2007, the membership of the club had grown to 22 of which 5 were female. The club had 9 PAUL HARRIS FELLOWS, six attended the 2007 district conference while 4 attended the 98th RI Convention held in Salt Lake City in Utah, USA, in 2007-2008 Rotary year.
            </p>
            <p  style={{'textAlign':'center','padding':'1rem','maxWidth':'500px','margin':'20px auto'}}>
                
        The club achieved an all-PH membership status, including the non-Rotarian Admin. Assistant Mr. Moshood Salawu, two honorary members were elected, namely: Dr. Wale Babalakin and Prince Nduka Obiagbena. The club had three Rotary Foundation (RF) Major Donors by the mid-year of 2008. Till date we have been executing projects every Rotary year in line with the Rotary areas of Service. Also, the club has been able to produce a district governor in the person of Rt. Olajide Akeredolu in the 2019-2020 Rotary year.
            </p>

        </div>
    )
}

export default HistoryDetail