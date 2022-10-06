
import React from "react"
import img1 from '../assets/directors/1.png'
import img2 from '../assets/directors/2.png'
import img3 from '../assets/directors/3.png'
import img4 from '../assets/directors/4.png'
import img5 from '../assets/directors/5.png'
import img6 from '../assets/directors/6.png'
import img8 from '../assets/directors/8.png'//oga
import img11 from '../assets/directors/11.png'
import img12 from '../assets/directors/12.png'
import img13 from '../assets/directors/13.png'
import img7 from '../assets/directors/7.png'



const OurDirectors = ()=>{


    return (
        <div>
           <h1 style={{'textAlign':'center','color':'#0632B6'}}>Our Board of Directors</h1>


           <div className="gallery-holder display-flex content-between " style={{'padding':'2rem','textAlign':'center'}}>
                    <div className="col-2 display-flex content-between wrap">
                        <div  className="gallery-img container-radius" height="130px">
                         <img 
                         style={{'width':'100%',}}
                          src={img7}/>
                          <p><strong>Debo Adebayo</strong></p>
                          <p>Immediate Past President</p>
                        </div>

                        <div height="130px" className=" container-radius gallery-img ">
                            <img 
                         style={{'width':'100%',}}
                            src={img2}/>
                            <p><strong>Wasiu Paramole</strong></p>
                          <p>Club Treasurer</p>
                        </div>
                        <div height="130px" className="container-radius gallery-img ">
                        <img  
                         style={{'width':'100%',}}
                        src={img3}/>
                            <p><strong>Akeem Shonde</strong></p>
                          <p>Club Admin</p>
                        </div>
                    <div  height="130px" className=" container-radius gallery-img" >
                        <img
                         style={{'width':'100%',}}
                        src={img1}/>

                        <p><strong>Sharon Onyenekwe</strong></p>
                        <p>Club Secretary</p>
                    </div>

                    <div  height="130px" className="container-radius gallery-img " >
                        <img
                         style={{'width':'100%',}}
                        src={img5}/>
                        <p><strong>Joy Uzoho</strong></p>
                        <p>Youth Service Chair</p>
                    </div>
                    </div>
                    <div className="col-2">
                        <img height={'100%'} className="image container-radius"  src={img8}  />
                        <p><strong>Opanubi Tokunbo </strong></p>
                        <p>Club President</p>
                    </div>
                    <div className="col-2 display-flex content-between wrap">
                        <div height="130px" className=" container-radius gallery-img " >
                        <img
                        style={{'width':'100%',}}
                        src={img11}/>
                          <p><strong>Tolu Onalaja</strong></p>
                          <p>Foundation Chairperson</p>
                        </div>

                        <div height="130px" className=" container-radius gallery-img " >
                        <img
                        style={{'width':'100%',}}
                        src={img6}/>
                          <p><strong>Evelyn Chukwurah</strong></p>
                          <p>President-Elect</p>
                        </div>

                        <div height="130px" className=" container-radius gallery-img " >
                        <img
                        style={{'width':'100%',}}
                        src={img6}/>
                          <p><strong>Tina Egwatuatu</strong></p>
                          <p>Membership Chairperson</p>
                        </div>

                        

                        <div height="130px" className=" container-radius gallery-img " >
                        <img
                        style={{'width':'100%',}}
                        src={img13}/>
                          <p><strong>Dele Alimi</strong></p>
                          <p>Service Chairperson</p>
                        </div>

                        
                        <div height="130px" className=" container-radius gallery-img " >
                        <img
                        style={{'width':'100%',}}
                        src={img4}/>
                          <p><strong>Maxwell Okegbenin</strong></p>
                          <p>Sergent-at-arms</p>
                        </div>
                    </div>
                </div>
        <br />
        <br />
        </div>
    )
}

export default OurDirectors