const movieEpisode = async (rootUrl) => {
  try {
    const response = await fetch(`${rootUrl} /shows/1/episodes`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export default movieEpisode;