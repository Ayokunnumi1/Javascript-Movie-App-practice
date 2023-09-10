const movieEpisode = async () => {
  const movieUrl = 'https://api.tvmaze.com/';
  try {
    const response = await fetch(`${movieUrl}shows/1/episodes`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export default movieEpisode;