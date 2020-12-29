import refs from './refs.js';
import renderPage from './renderPage.js';
import errorsNotifications from './notification.js';

const errorMessage = 'Nothing has been found. Try again!';

const key = '19688352-7c772d0e763de7aee127ab308';

const newService = {
  searchReq: '',
  perPage: 3,
  page: 1,

  get query() {
    return this.searchReq;
  },

  set query(request) {
    this.searchReq = request;
  },

  fetchContent() {
    const baseURL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchReq}&page=${this.page}&per_page=${this.perPage}&key=${key}`;
    return fetch(baseURL)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error');
        }
        return response.json();
      })
      .then(({ hits }) => {
        this.incrementPage();
        return hits;
      })
      .catch(error => {
        errorsNotifications(errorMessage);
        return error;
      });
  },

  incrementPage() {
    this.page += 1;
  },
  resetPage() {
    this.page = 1;
  },
};

export default newService;
