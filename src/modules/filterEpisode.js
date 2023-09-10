import movieEpisode from './fetchEpisode.js';

const movies = async () => {
  try {
    const response = await movieEpisode();
    const filterResponseObject = response.map((res) => {
      const newObject = {
        id: res.id,
        title: res.name,
        image: res.image.medium,
      };
      return newObject;
    });
    // console.log(filterResponseObject);
    return filterResponseObject;
  } catch (error) {
    return error;
  }
};

export default movies;