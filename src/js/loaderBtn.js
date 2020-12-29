import refs from './refs.js';

export default {
  showLoadBtn() {
    refs.btn.classList.remove('is-hidden');
  },
  showSpinner() {
    refs.spinner.classList.remove('is-hidden');
    refs.span.textContent = 'Loading...';
    refs.btn.disabled = true;
  },
  closeSpinner() {
    refs.spinner.classList.add('is-hidden');
    refs.span.textContent = 'Show more';
    refs.btn.disabled = false;
  },
};
