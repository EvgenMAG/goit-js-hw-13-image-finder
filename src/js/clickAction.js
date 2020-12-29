import loader from './loaderBtn.js';
import newService from './photos-service';
import refs from './refs.js';
import renderPage from './renderPage.js';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

export default {
  onClickAction() {
    loader.showSpinner();
    newService.fetchContent().then(photoSet => {
      renderPage(photoSet);
      loader.closeSpinner();
      window.scrollTo(0, 15000);
    });
  },

  modalOpen(e) {
    console.dir(e.target);
    if (e.target.nodeName === 'IMG') {
      const fullHD = e.target.dataset.highresolution;
      const instance = basicLightbox.create(`
                <img src="${fullHD}" />
              `);
      instance.show();
    }
  },
};
