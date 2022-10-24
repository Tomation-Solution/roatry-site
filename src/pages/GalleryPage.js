import GalleryComponent from "../components/Gallery/Gallery"
import React from "react"




const GalleryPage = ()=>{



    return (
        <div>
        <h1 style={{'textAlign':'center',fontSize:'2.5rem'}}>Gallery</h1>
        <br/>
        <br/>
            <GalleryComponent/>
        </div>
    )
}

export default GalleryPage