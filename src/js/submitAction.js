import newService from './photos-service';
import refs from './refs.js';
import render from './renderPage.js';

function onSubmitSearch(e) {
  e.preventDefault();

  const inputRequest = e.target.elements.query.value;
  newService.query = inputRequest;
  refs.cardsList.innerHTML = '';

  newService.resetPage();

  refs.btn.style.display = 'block';
  render.renderPage();

  refs.form.reset();
}

export default onSubmitSearch;
