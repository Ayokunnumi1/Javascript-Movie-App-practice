const movieEpisode = async () => {
  const movieUrl = 'https://api.tvmaze.com/shows/1/episodes';
  try {
    const response = await fetch(movieUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export default movieEpisode;