import render from './renderPage.js';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

export default {
  onClickAction() {
    render.renderPage();
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
