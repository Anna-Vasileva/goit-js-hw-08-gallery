const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const galleryJS = document.querySelector('.js-gallery');
const modalEL = document.querySelector('.js-lightbox');
const modalImgEl = document.querySelector('.lightbox__image');
const modalBtnEl = document.querySelector('[data-action="close-lightbox"]');
const modalDivEl = document.querySelector('.lightbox__overlay');
let imgUrl = '';

const galleryArr = galleryItems.map(({ preview, original, description }) => {
 return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
});

galleryJS.insertAdjacentHTML('afterbegin', galleryArr.join(''));



galleryJS.addEventListener('click', openModalGallery);

modalDivEl.addEventListener('click', closeModal);

document.addEventListener('keyup', function (e) {
  if (e.code === "Escape") closeModal();

  if (e.code === "ArrowLeft") {
    const previousEl = document.querySelector(`[data-source="${imgUrl}"]`).closest('.gallery__item').previousElementSibling;
    if (!previousEl) return;
    imgUrl = previousEl.querySelector('.gallery__image').getAttribute('data-source');
    setAttributeModalImg(imgUrl);

  };

  if (e.code === "ArrowRight") {
    const nextEl = document.querySelector(`[data-source="${imgUrl}"]`).closest('.gallery__item').nextElementSibling;
    if (!nextEl) return;
    imgUrl = nextEl.querySelector('.gallery__image').getAttribute('data-source');
    setAttributeModalImg(imgUrl);
  }
    
});

function openModalGallery(e) {
 
  if (e.target.nodeName === 'UL') return;

  e.preventDefault();

  imgUrl = e.target.getAttribute('data-source');
  

  modalEL.classList.add('is-open');
  setAttributeModalImg(imgUrl);
  modalBtnEl.addEventListener('click', closeModal);

  
}

function closeModal() {
  modalEL.classList.remove('is-open');
  modalImgEl.setAttribute('src', '');
  modalBtnEl.removeEventListener('click', closeModal);
  imgUrl = '';
}

function setAttributeModalImg(imgUrl) {
  modalImgEl.setAttribute('src', imgUrl);
}