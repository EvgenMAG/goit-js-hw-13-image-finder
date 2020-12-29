import refs from './refs.js';
import card from '../templates/card.hbs';
import loader from './loaderBtn.js';
import newService from './photos-service';

// import errorsNotifications from './notification.js';

// const errorMessage = 'Nothing has been found. Try again!';
// const fatalError = 'Opss!Something gone wrong. Try again! ';

export default {
  renderPage() {
    loader.showSpinner();
    newService.fetchContent().then(({ hits, totalHits }) => {
      console.log({ hits, totalHits });
      console.log(newService.perPage);
      console.log(newService.page);
      console.log(newService.perPage * newService.page);
      if (!hits) {
        refs.btn.style.display = 'none';
        return;
      }
      if (
        totalHits + newService.perPage <
        newService.perPage * newService.page
      ) {
        refs.btn.style.display = 'none';
      }

      loader.showLoadBtn();
      loader.closeSpinner();

      let markup = card(hits);
      refs.cardsList.insertAdjacentHTML('beforeend', markup);
      window.scrollTo({
        top: newService.pageScroll,
        behavior: 'smooth',
      });
      // window.scrollBy({
      //   top: window.innerHeight,
      //   behavior: 'smooth',
      // });
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
