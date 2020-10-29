import React, {useEffect} from 'react';


const GifGrid = ({category}) => {

  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async() => {
    const url = 'https://api.giphy.com/v1/gifs/search?q=Rick&limit=10&api_key=FMH46HzHk8wFS4OcWPBUXvpm7eYt14bF';

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
  }


  return(
    <div>
      <h3>{category}</h3>
    </div>
  );
}


export default GifGrid;