import React from 'react';
import '../../gallery.css'
import gallery1 from '../../assets/gallery/1.png';
import gallery2 from '../../assets/gallery/2.png';
import gallery3 from '../../assets/gallery/3.png';
import gallery4 from '../../assets/gallery/4.png';
import gallery5 from '../../assets/gallery/5.png';
import gallery6 from '../../assets/gallery/6.png';
import gallery8 from '../../assets/gallery/8.png';
import gallery10 from '../../assets/gallery/10.jpeg';
import gallery12 from '../../assets/gallery/12.jpeg';
import gallery13 from '../../assets/gallery/13.jpeg';
import heroimage from '../../assets/Slider/hero.jpg'
import aimage from '../../assets/b.jpeg'
import bimage from '../../assets/b.jpeg'
import news11 from '../../assets/news/weding.jpeg'
import {GalleryMainContainer} from './Gallery.style'
import gallery17 from '../../assets/gallery/zeroEvent (1).jpg';
import gallery14 from '../../assets/gallery/zeroEvent (1).jpg';
import gallery15 from '../../assets/gallery/zeroEvent (2).jpg';
import gallery16 from '../../assets/gallery/zeroEvent (3).jpg';

const GalleryComponent = ()=>{

    const galleryImagesData =[
        [gallery16,gallery17],
        [gallery15,gallery14],
            [gallery1,gallery2],
            [gallery3,gallery4],
            [gallery5,gallery6],
            [gallery8,gallery10],
            [gallery12,gallery13],
            [heroimage]
    ]
    return (
        <GalleryMainContainer >
  {
            galleryImagesData.map(eachImages=>{

                return (
                    <div className="gallery__column">
                        {
                            eachImages.map(data=>{
                                return (
                                    <a  className="gallery__link">
                                        <figure className="gallery__thumb">
                                        <img src={data} alt="gallery image" className="gallery__image" />
                                        {/* <figcaption className="gallery__caption">Image Caption</figcaption> */}
                                        </figure>
                                </a>
                                )
                            })
                        }
                    
                    </div>
                )
            })
        }
        </GalleryMainContainer>
    )
}

export default GalleryComponent