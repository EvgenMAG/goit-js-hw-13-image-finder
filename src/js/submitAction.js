import loader from './loaderBtn.js';
import newService from './photos-service';
import refs from './refs.js';
import renderPage from './renderPage.js';

function onSubmitSearch(e) {
  e.preventDefault();

  const inputRequest = e.target.elements.query.value;
  newService.query = inputRequest;
  refs.cardsList.innerHTML = '';

  newService.resetPage();
  loader.closeSpinner();

  newService.fetchContent().then(photoSet => {
    renderPage(photoSet);
    loader.showLoadBtn();
  });

  refs.form.reset();
}

export default onSubmitSearch;
