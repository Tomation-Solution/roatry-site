
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
import memberDirPage from '../assets/RC Ogudu Members Directory 2022-1.jpg'
import memberDirPage2 from '../assets/RC Ogudu Members Directory 2022-2.jpg'
import memberDirPage3 from '../assets/RC Ogudu Members Directory 2022-3.jpg'
import memberDirPage4 from '../assets/RC Ogudu Members Directory 2022-4.jpg'

import RCOgudu1 from '../assets/da.jpg'
import RCOgudu2 from '../assets/cray.jpg'
// 

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


        <h4 style={{'textAlign':'center','color':'#0632B6'}}>Members Directory</h4>
        {/* */}
        <div>
          <img src={memberDirPage} alt="" style={{'width':'50%'}}/>
          <img src={memberDirPage2} alt="" style={{'width':'50%'}}/>
        </div>

        <div>
          <img src={memberDirPage3} alt="" style={{'width':'50%'}}/>
          <img src={memberDirPage4} alt="" style={{'width':'50%'}}/>
        </div>

        <h4 style={{'textAlign':'center','color':'#0632B6'}}>RC Ogudu Club Committee</h4>
        <div>
          <img src={RCOgudu2} alt="" style={{'width':'50%'}}/>
          <img src={RCOgudu1} alt="" style={{'width':'50%'}}/>
        </div>
        </div>
    )
}

export default OurDirectors