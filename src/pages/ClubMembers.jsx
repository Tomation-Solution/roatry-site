
import React from "react"
import { ClubMemberCOntainer, ClubMembersMainContainer } from "./ClubMemberCOntainer.style"
import balaYes from '../assets/PAG Bala Yesufu.jpeg';
import tundeOjo from '../assets/PP Fikayo Tunde-Ojo.jpeg';
import franca from '../assets/Rotarian Franca Nwosa.jpeg';

const memebers = [
    {
        name:'Rotn PP.  Olajide Akeredolu',
        job:'Medical Practice Surgery'
    },
    {
        name:`Rotn Marcus Ani`,
        job:`Chemical Distributor`
    },
    {
        name:`Rotn Mary Edgal`,
        job:`Bakery & Confectionery`
    },
    {
        name:`Rotn PP Sina Ojemuyiwa`,
        job:`Public Relation`
    },
    {
        name:`Rotn PP Beatrice Ojo`,
        job:`Medical Equipment`
    },
    {
        name:`Rotn PP Fikayo Tunde-Ojo`,
        job:`Entrepreneur`,
        img:tundeOjo
    },
    {
        name:`Rotn Vivian Chinyere Ohiaeri`,
        job:`Beautician / Fashion Designer`
    },
    {
        name:`Rotn Chibuzo Okpala`,
        'job':`Customer service`        
    },
    {
        name:`Rotn PP Ojinika Okeke`,
        'job':`Accountancy`        
    },
    {
        name:`Rotn PAG Onikepo Oshodi`,
        'job':`Public Administration`        
    },
    {
        name:`Rotn PP Oscar Ossai`,
        'job':`Clergy`        
    },
    {
        name:`Rotn PP Aliyu Umaru`,
        'job':`Shipping / Contracting`        
    },
    {
        name:`Rotn PP Bala Yesufu`,
        'job':`Beverage Export Marketing` ,
        img:balaYes      
    },
    {
        name:`Rotn PP Fidel Ogwuazor`,
        'job':`Travels & Tours`        
    },
    {
        name:`Rotn Hakeem Adesanya`,
        'job':`Accounting & Taxation Practice`        
    },
    {
        name:`Rotn (AG) Dele Alimi`,
        'job':`Administration`        
    },
    {
        name:`Rotn Tokunbo Opanubi`,
        'job':`Stockbroker / Investment Banker`        
    },
    {
        name:`Rotn Evelyn Chukwurah`,
        'job':``        
    },
    {
        name:`Rotn Evelyn Chukwurah`,
        'job':`IT CONSULTANCY`        
    },
    {
        name:`Rotn PP Tolulope Onalaja`,
        'job':`Real Estate`        
    },
    {
        name:`Rotn Gbemileke Afolabi`,
        'job':`Pharmacist / Brand Mgt`        
    },

    {
        name:`Rotn Debo Adebayo`,
        'job':`Management Consultant`        
    },

    {
        name:`Rotn Nonyelum Nwokolo`,
        'job':`Banking`        
    },
    {
        name:`Rotn Joy Uzoho`,
        'job':`Guidance Counsellor `        
    },
    {
        name:`Rotn Anthonia Nicol`,
        'job':`Animator`        
    },
    {
        name:`Rotn Franca Nwosa`,
        'job':`Hospitality` ,
        img:franca
    },
    {
        name:`Rotn Wasiu Paramole `,
        'job':`Accounting `        
    },
    {
        name:`Rotn Egwuatu Tina`,
        'job':`Entrepreneur`        
    },
    {
        name:`Rotn Hassan Mariam`,
        'job':`Engineering`        
    },
    {
        name:`Rotn Isibor Keneth`,
        'job':`Accounting`        
    },
    {
        name:`Rotn Michael Oluwabukola`,
        'job':`Lawyer `        
    },
    {
        name:`Rotn Shonde Akeem`,
        'job':`Security Expert`        
    },
    {
        name:`Rotn Obasohan Nosa Fred`,
        'job':`Auto Sales`        
    },
    {
        name:`Rotn Adetunji Adeniyi`,
        'job':`Engineering`        
    },
    {
        name:`Rotn PP Abiodun Ademosun`,
        'job':`Accounting`        
    },
    {
        name:`Rotn. Rita Ekwueme-Ike`,
        'job':`Entrepreneur`        
    },
    {
        name:`Rotn. Ozioma Anajekwu`,
        'job':`Entrepreneur `        
    },
    {
        name:`Akinmusire, Itunu Meshach`,
        'job':`Accounting`        
    },
    {
        name:'Akuidolo, Orevaoghene  ',
        job:'Comedian '
    },
    {
        name:'Atilade, Adeyinka',
        job:'Information Technology'
    },
    {
        name:'Daada, Tunde ',
        job:'Finance'
    },
    {
        name:'Egwuatu, Tina Chinyere',
        job:'Auto Dealer'
    },
    {
        name:'Hassan, Mariam ',
        job:'Engineering'
    },
    {
        name:'Nwufor, Nkechi Ann',
        job:'Customer Experience Management'
    },
    {
        name:'Odufa, Rosetta  Sadadi',
        job:'Legal Services'
    },
    {
        name:'Okogbenin, Maxwell Ehiano',
        job:'Pharmacist'
    },
    {
        name:'Okoh, Mary Ochefije',
        job:'Caterer'
    },
    {
        name:'Olomola, Daisy Erhunmwunse',
        job:''
    },
    {
        name:'Thompson, Freda Tega',
        job:'Business'
    },
    {
        name:'Uzoho, Joy',
        job:''
    },
    {
        name:'Uzoho, Joy',
        job:'Business Development'
    },
    {
        name:'Osawe, Eniozede ',
        job:'Medical'
    },
    {
        name:'Oshinubi, Oluwayemisi Ayokunmi',
        job:'Caterer'
    },
    {
        name:'Osimen, Odigie E.',
        job:'Pension Fund Administrator'
    },
        {
        name:'Oyewole, Ebenezer Bidemi',
        job:'Professional Security Services'
    },
    {
        name:'Shonde (JP), Akeem ',
        job:'Business'
    },
    {
        name:'Solanke, Tomiwa ',
        job:'Legal Services/Business'
    },
    {
        name:'Temola, Oluwatoyosi Joshua',
        job:'Civil Servant/Business'
    },

]



const ClubMembers = ()=>{
    return (
        <div>
    <h1 style={{'textAlign':'center','color':'rgb(6, 50, 182)'}}>Members Directory & Classifications of Members</h1>
              <ClubMembersMainContainer style={{'padding':'1rem'}}>
{
   memebers.map(({name,job,img},index)=>(
        <ClubMemberCOntainer key={index}>
        <img src={img?img:"https://statinfer.com/wp-content/uploads/dummy-user.png"} alt="" />
        <h2>{name}</h2>
        <p><small>{job}</small></p>
    </ClubMemberCOntainer>
    ))
}
    </ClubMembersMainContainer>
        </div>
    )
}

export default ClubMembers