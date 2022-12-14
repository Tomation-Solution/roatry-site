import styled from 'styled-components';






export const GalleryMainContainer = styled.div`


display: flex;
  padding: 2px;
  transition: 0.3s;
  

&:hover .gallery__image {
  filter: grayscale(1);
}
& .gallery__column {
  display: flex;
  flex-direction: column;
  width: 50%;
}
& .gallery__link {
  margin: 2px;
  overflow: hidden;
}
& .gallery__link:hover .gallery__image {
  filter: grayscale(0);
}
& .gallery__link:hover .gallery__caption {
  opacity: 1;
}
& .gallery__thumb {
  position: relative;
  margin: unset;
}
& .gallery__image {
  display: block;
  width: 100%;
  transition: 0.3s;
  border-radius: unset !important;
}
& .gallery__image:hover {
  transform: scale(1.1);
}
& .gallery__caption {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 25px 15px 15px;
  width: 100%;
  font-family: "Raleway", sans-serif;
  font-size: 16px;
  color: white;
  opacity: 0;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(255, 255, 255, 0) 100%);
  transition: 0.3s;
}


`