export const getGifs = async (category) => {

  const url = `https://api.giphy.com/v1/gifs/search?api_key=TWATHZNIt5pwBK10sOwulYoKm2M1wt3d&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.fixed_width_small.url
  })
  );

  // console.log(gifs);
  return gifs;
};
