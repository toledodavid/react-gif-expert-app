import React from 'react';
import PropTypes from 'prop-types';


const GifGridItem = ({title, imgUrl}) => {

  return(
    <div className="card animate__animated animate__fadeIn">
      <img src={imgUrl} alt={title} />
      <p>{title}</p>
    </div>
  );
}


GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired
}


export default GifGridItem;