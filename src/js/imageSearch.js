import imgCards from '../templates/images.hbs';
import getRefs from '../js/refs.js';
import ImageApiServise from '../js/api.js';
import BtnLoadMore from '../js/btnLoadMore.js';
import * as basicLightbox from 'basiclightbox';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { error } from '@pnotify/core';

const imageApiServise = new ImageApiServise();
const btnLoadMore = new BtnLoadMore({
  selector: '[data-action="load-more"]',
  hidden: true,
});

getRefs.searchForm.addEventListener('submit', onSearch);
getRefs.galleryImage.addEventListener('click', openModal);
btnLoadMore.refs.button.addEventListener('click', fetchImage);

function onSearch(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const input = form.elements.query;

  clearImageList();

  btnLoadMore.show();
  imageApiServise.resetPage();
  imageApiServise.searchQuery = input.value;

  fetchImage();
  input.value = '';
}

function fetchImage() {
  btnLoadMore.disable();
  imageApiServise.fetchImage().then(data => {
    const murkup = createImageList(data);
    appendImageMurkup(murkup);
    btnLoadMore.enable();
    onScrollTo();
  });
}

function appendImageMurkup(images) {
  getRefs.galleryImage.insertAdjacentHTML('beforeend', images);
}

function createImageList(images) {
  return imgCards(images);
}

function clearImageList() {
  getRefs.galleryImage.innerHTML = '';
}

function openModal(e) {
  const viewing = { src: e.target.dataset.src, alt: e.target.alt };
  openImg(viewing);
}

function openImg({ src, alt }) {
  const instance = basicLightbox.create(
    `<img class="photo-card__image" src="${src}" alt="${alt}" />`,
  );
  instance.show();
}

function onScrollTo() {
  let value = document.body.scrollHeight;
  setTimeout(() => {
    window.scrollTo({
      top: value,
      left: 0,
      behavior: 'smooth',
    });
  }, 0);
}
