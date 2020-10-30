

export const getGifs = async(category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=FMH46HzHk8wFS4OcWPBUXvpm7eYt14bF`;

  const response = await fetch(url);
  const {data} = await response.json();

  const gifs = data.map(img => {
    return {
      id: img.id,
      title: img.title,
      imgUrl: img.images?.downsized_medium.url
    }
  });
  return gifs;
}