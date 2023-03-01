
// Выполняй это задание в файлах 02-lightbox.html и 02-lightbox.js. Разбей его на несколько подзадач:

// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи. Используй готовый код из первого задания.
// Подключение скрипта и стилей библиотеки используя CDN сервис cdnjs. Необходимо добавить ссылки на два файла: simple-lightbox.min.js и simple-lightbox.min.css.
// Инициализация библиотеки после того как элементы галереи созданы и добавлены в div.gallery. Для этого ознакомься с документацией SimpleLightbox - в первую очередь секции «Usage» и «Markup».
// Посмотри в документации секцию «Options» и добавь отображение подписей к изображениям из атрибута alt. Пусть подпись будет снизу и появляется через 250 миллисекунд после открытия изображения.


import { galleryItems } from "./gallery-items.js";
const gallery = document.querySelector("ul");

// Создание разметки
const createItem = (src, source, text) => {

  return `
  <a class="gallery__item" href=${source}>
  <img class="gallery__image" src=${src} alt=${text} />
</a>
    `;
};

// Перебор элементов и создание галереии

const createGallery = (galleryItems, createItem) => {
  // map imagesArray & create items
  const result = galleryItems
    .map(({ preview, original, description }) => {
      return createItem(preview, original, description);
    })
    .join("");

  // insert items into div
  gallery.insertAdjacentHTML("afterbegin", result);

  return gallery;
};

const murkup = createGallery(galleryItems, createItem);
document.querySelector("body").append(murkup);

var lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionPosition: "left", captionDelay: 250  });


