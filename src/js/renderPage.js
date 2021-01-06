import refs from './refs.js';
import template from '../templates/cards.hbs';
import loader from './loaderBtn.js';
import fetchLogic from './apiService';
import handleErrors from './notification.js';

const ERROR_NOTIFICATION = 'Nothing has been found. Try again!';
const SCROLL_HEIGTH = window.innerHeight - 130;

export default {
  async renderPage() {
    loader.showSpinner();

    try {
      const { hits, totalHits } = await fetchLogic.fetchContent();

      if (
        totalHits + fetchLogic.perPage <
        fetchLogic.perPage * fetchLogic.page
      ) {
        refs.btn.style.display = 'none';
      }
      loader.showLoadBtn();
      loader.closeSpinner();
      const markup = await template(hits);
      refs.cardsList.insertAdjacentHTML('beforeend', markup);

      if (fetchLogic.page !== 2) {
        window.scrollBy({
          top: SCROLL_HEIGTH,
          behavior: 'smooth',
        });
      }
    } catch (error) {
      refs.btn.style.display = 'none';
      handleErrors(ERROR_NOTIFICATION);
    }
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
