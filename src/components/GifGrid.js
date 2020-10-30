import React, {useEffect, useState} from 'react';
import GifGridItem from './GifGridItem';


const GifGrid = ({category}) => {

  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async() => {
    const url = 'https://api.giphy.com/v1/gifs/search?q=Dragon+ball&limit=10&api_key=FMH46HzHk8wFS4OcWPBUXvpm7eYt14bF';

    const response = await fetch(url);
    const {data} = await response.json();

    const gifs = data.map(img => {
      return {
        id: img.id,
        title: img.title,
        imgUrl: img.images?.downsized_medium.url
      }
    });
    console.log(gifs);
    setImages(gifs);
  }


  return(
    <>
      <h3>{category}</h3>
    
      <div className="card-grid">
      {
        images.map(img => <GifGridItem key={img.id} {...img} />)
      }
      </div>
    </>
  );
}


export default GifGrid;