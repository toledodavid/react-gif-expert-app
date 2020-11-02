import React from 'react';


const GifGridItem = ({title, imgUrl}) => {

  return(
    <div className="card animate__animated animate__fadeIn">
      <img src={imgUrl} alt={title} />
      <p>{title}</p>
    </div>
  );
}


export default GifGridItem;