import refs from './refs.js';
import template from '../templates/cards.hbs';
import loader from './loaderBtn.js';
import fetchLogic from './apiService';

export default {
  renderPage() {
    loader.showSpinner();
    fetchLogic.fetchContent().then(({ hits, totalHits }) => {
      if (!hits) {
        refs.btn.style.display = 'none';
        return;
      }
      if (
        totalHits + fetchLogic.perPage <
        fetchLogic.perPage * fetchLogic.page
      ) {
        refs.btn.style.display = 'none';
      }

      loader.showLoadBtn();
      loader.closeSpinner();

      const markup = template(hits);
      refs.cardsList.insertAdjacentHTML('beforeend', markup);

      window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth',
      });
    });
  },

  scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  },
};

window.onscroll = function () {
  handleScroll();
};
function handleScroll() {
  let bodyScrollTop = document.body.scrollTop;
  let elementScrollTop = document.documentElement.scrollTop;
  if (bodyScrollTop > 20 || elementScrollTop > 20) {
    refs.btnTop.style.display = 'block';
  } else {
    refs.btnTop.style.display = 'none';
  }
}
