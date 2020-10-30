import React from 'react';


const GifGridItem = ({title, imgUrl}) => {

  return(
    <div className="card">
      <img src={imgUrl} alt={title} />
      <p>{title}</p>
    </div>
  );
}


export default GifGridItem;