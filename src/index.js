import './style.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'font-awesome/css/font-awesome.min.css';
// import movieEpisode from './modules/fetchEpisode.js';
import movieDisplay from './modules/displayEpisode.js';
import { moviesDetails } from './modules/filterEpisode.js';
import displayPopUp from './modules/popUp.js';

window.addEventListener('DOMContentLoaded', () => {
  movieDisplay();
  moviesDetails();
  displayPopUp();
});