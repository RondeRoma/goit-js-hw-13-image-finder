export default class ImageApiServise {
  constructor() {
    this.BASE_URL = 'https://pixabay.com/api/';
    this.API_Key = '19780989-512f8d5bb9329b8d7da99e40a';
    this.searchQuery = '';
    this.page = 1;
  }
  async fetchImage() {
    const url = `?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${this.API_Key}`;
    const params = await fetch(this.BASE_URL + url);
    const parseParameters = await params.json();
    this.incrementPage.hits;
    return parseParameters.hits;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
