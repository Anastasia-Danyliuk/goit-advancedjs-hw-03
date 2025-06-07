import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { createImageHtmlTemplate } from './js/render-functions.js';
import { fetchPhotosByQuery } from './js/pixabay-api.js';

const searchForm = document.querySelector('.js-search-form');
const gallery = document.querySelector('.js-gallery');
const loader = document.querySelector('.js-loader');

const lightbox = new SimpleLightbox('.js-gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const onSearchFormSubmit = event => {
  event.preventDefault();

  const { target: searchForm } = event;

  const searchQuery = searchForm.elements.user_query.value;

  loader.classList.add('active');

  gallery.innerHTML = '';

  fetchPhotosByQuery(searchQuery)
    .finally(() => {
      loader.classList.remove('active');
    })
    .then(data => {
      if (data.totalHits === 0) {
        iziToast.error({
          message: 'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });

        gallery.innerHTML = '';

        return;
      }

      const galleryHtmlTemplate = data.hits.map(image => createImageHtmlTemplate(image)).join('');
      gallery.innerHTML = galleryHtmlTemplate;
      lightbox.refresh();

    })
    .catch(err => {
      console.log(err);
    });

};
searchForm.addEventListener('submit', onSearchFormSubmit);