import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

const gallery = document.querySelector('.gallery');

const markup = galleryItems
  .map((imageInfo) => `<li class="gallery__item">
   <a class="gallery__link" href="${imageInfo.original}">
      <img class="gallery__image" src="${imageInfo.preview}" alt="${imageInfo.description}" />
   </a>
</li>`)
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250
});
