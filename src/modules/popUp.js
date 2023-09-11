import { moviesDetails } from './filterEpisode.js';

const displayPopUp = async () => {
  try {
    const response = await moviesDetails();
    //   console.log(response);
    const element = `<button class="close-button"><i class="fa fa-close"></i></button>
    <h3 class="m-title">${response.title}</h3>
    <div class="imgdes">
              <img src="${response.image}" alt="" class="popUp-img">
                  <p class="para">${response.description}</p>
              </div><div class="modal-content">
                  <div class="descriptions">
                      <p>${response.rating}</p>
                  </div>
              </div><div class="commentcontainer">
                  <h2 class="popUp-h2-comment-title">Comments()</h2>
                  <div class="comment-container">
                      <ul class="popUP-comment-content">
                          
                      </ul>
                  </div>
              </div><form action="" class="comment-form">
                  <input type="text" name="text" id="input-name" required placeholder="Your name">
                      <textarea name="text" id="comment-text" cols="30" rows="10" required placeholder="Add a comment"></textarea>
                      <button type="submit" id="${response.id}" class="submit-button">Submit</button>
                  </></form></>`;
    //   console.log(element);
    return element;
  } catch (error) {
    return error;
  }
};

export default displayPopUp;