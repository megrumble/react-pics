import './ImageList.css'
import React from 'react';
import ImageCard from './ImageCard';
const ImageList = (props) => {
   const images = props.images.map((image) => {
       //img is the root jsx tag that is being returned
       //add key prop so that each item being returned is unique
        return <ImageCard key={image.id} image={image} />
    });

    return <div className="image-list">{images}</div>
};

export default ImageList;