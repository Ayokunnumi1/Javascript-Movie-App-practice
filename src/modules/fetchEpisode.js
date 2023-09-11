export const movieEpisode = async () => {
  const movieUrl = 'https://api.tvmaze.com/';
  try {
    const response = await fetch(`${movieUrl}shows/1/episodes`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const getmovieEpisodeDetails = async () => {
  const movieDetailsUrl = 'https://api.tvmaze.com/';
  try {
    const response = await fetch(`${movieDetailsUrl}episodes/1`);
    const data = response.json();
    // console.log(data);
    return data;
  } catch (error) {
    return error;
  }
};
