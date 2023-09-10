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

export const movieEpisodeDetails = async (id) => {
  const movieDetailsUrl = 'https://api.tvmaze.com/';
  try {
    const response = await fetch(`${movieDetailsUrl}episodes/${id}`);
    const data = response.json();
    return data;
  } catch (error) {
    return error;
  }
};
