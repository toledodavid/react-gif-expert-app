import React from 'react';


const GifGridItem = ({title, imgUrl}) => {

  return(
    <div>
      <img src={imgUrl} alt={title} />
      <p>{title}</p>
    </div>
  );
}


export default GifGridItem;