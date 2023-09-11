import { movieEpisode, getmovieEpisodeDetails } from './fetchEpisode.js';

// eslint-disable-next-line import/prefer-default-export
export const movies = async () => {
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

export const moviesDetails = async () => {
  try {
    const response = await getmovieEpisodeDetails();
    // console.log(response)
    const filterMovieDetails = {
      id: response.id,
      title: response.name,
      image: response.image.medium,
      description: response.summary,
      rating: response.rating.average,
    };
    // console.log(filterMovieDetails);
    return filterMovieDetails;
  } catch (error) {
    return error;
  }
};
