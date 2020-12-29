import errorsNotifications from './notification.js';

const errorMessage = 'Nothing has been found. Try again!';
// const fatalError = 'Opss!Something gone wrong. Try later! ';

const key = '19688352-7c772d0e763de7aee127ab308';

const newService = {
  searchReq: 'moon',
  perPage: 12,
  page: 1,
  pageScroll: 1500,

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
        return response.json();
      })
      .then(({ hits, totalHits }) => {
        if (hits.length === 0) {
          throw new Error('Error feching data');
        }
        this.increment();
        return { hits, totalHits };
      })
      .catch(error => {
        errorsNotifications(errorMessage);

        return error;
      });
  },

  increment() {
    this.page += 1;
    this.pageScroll += 1500;
  },

  resetPage() {
    this.page = 1;
  },
};

export default newService;
