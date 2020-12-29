import refs from './refs.js';
import card from '../templates/card.hbs';
import loader from './loaderBtn.js';
import newService from './photos-service';

import errorsNotifications from './notification.js';

const errorMessage = 'Nothing has been found. Try again!';
const fatalError = 'Opss!Something gone wrong. Try later! ';

export default {
  renderPage() {
    loader.showSpinner();
    newService
      .fetchContent()
      .then(data => {
        if (data.message === 'Error') {
          errorsNotifications(errorMessage);
          refs.btn.style.display = 'none';
          return;
        }

        if (data.hits.length < newService.perPage) {
          refs.btn.style.display = 'none';
        }

        loader.showLoadBtn();
        loader.closeSpinner();

        let markup = card(data.hits);
        refs.cardsList.insertAdjacentHTML('beforeend', markup);
        window.scrollTo({
          top: newService.pageScroll,
          behavior: 'smooth',
        });
      })
      .catch(() => {
        errorsNotifications(fatalError);
        refs.btn.style.display = 'none';
      });
  },
  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  },
};

window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    refs.btnTop.style.display = 'block';
  } else {
    refs.btnTop.style.display = 'none';
  }
}
