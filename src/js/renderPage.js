import refs from './refs.js';
import card from '../templates/card.hbs';
import { showLoadBtn, showSpinner, closeSpinner } from './loaderBtn.js';

function renderPage(result) {
  let markup = card(result);
  refs.cardsList.insertAdjacentHTML('beforeend', markup);
}

export default renderPage;
