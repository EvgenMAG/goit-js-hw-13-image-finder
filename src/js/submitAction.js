import fetchLogic from './apiService';
import refs from './refs.js';
import pageRender from './renderPage.js';

import errorNotification from './notification.js';

const constant_emptyField =
  'You forgot to ask us something. PLease write your request! ';

function onSubmitSearch(e) {
  e.preventDefault();

  const inputRequest = e.target.elements.query.value;
  if (inputRequest === '') {
    errorNotification(constant_emptyField);
    return;
  }
  fetchLogic.query = inputRequest;
  refs.cardsList.innerHTML = '';

  fetchLogic.resetPage();

  refs.btn.style.display = 'block';
  pageRender.renderPage();

  refs.form.reset();
}

export default onSubmitSearch;
