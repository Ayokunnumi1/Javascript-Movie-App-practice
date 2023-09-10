import movies from './filterEpisode.js';

const movieDisplay = async () => {
  try {
    const response = await movies();
    // console.log(response);
    const movieContainer = document.querySelector('.movie-content-container');
    const movieDisplayElement = response.map((res) => {
      movieContainer.innerHTML = '';
      const elements = `<div class="movie-thumbnail">
          <img src="${res.image}" alt="" class="movie-shows" id="${res.id}">
          <div class="overlay"> <i class="fa fa-play"></i></div>
        </div>
        <div class="movie-content">
          <h3 class="movie-title">${res.title} </h3>
          <div class="movie-comment">
            <div class="show-likes">
              <i class="fa fa-heart" data-id="${res.id}"></i>
              <p class="show-likes-count">
                <span class="likes-count liked" id="${res.id}"><span></span> like </span>
              </p>
            </div>
            <button class="comment-button" data-index="${res.id}">Comment</button>
            <button class="comment-button1">  <i class="fa fa-comment" data-index1="${res.id}"></i></button>
          </div>
        </div>
`; return elements;
    }).join('');
    movieContainer.insertAdjacentHTML('beforeend', movieDisplayElement);
    const commentButton = document.querySelectorAll('.comment-button');
    commentButton.forEach((button) => {
      button.addEventListener('click', (e) => {
        console.log('clicked');
        const buttonId = parseInt(e.target.dataset.index, 10);
        console.log(buttonId);
      });
    });
    return movieDisplayElement;
  } catch (error) {
    return error;
  }
};
export default movieDisplay;