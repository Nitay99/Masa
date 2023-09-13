// eslint-disable-next-line
import Swiper, {Navigation} from '../../vendor/swiper';

const programSlider = document.querySelector('.programs__slider');
const lines = document.querySelectorAll('.slider-controls__line');

const initProgramSlider = () => {
  Swiper.use([Navigation]);
  // eslint-disable-next-line
  const swiper = new Swiper(programSlider, {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    navigation: {
      nextEl: '.programs__button-next',
      prevEl: '.programs__button-prev',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },

    speed: 250,

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
        allowTouchMove: true,
      },
      768: {
        slidesPerView: 2.13,
        spaceBetween: 30,
        allowTouchMove: true,
        scrollbar: {
          dragSize: 324,
        },
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 32,
        allowTouchMove: false,
        scrollbar: {
          dragSize: 392,
        },
      },
    },
  });
};

export {initProgramSlider};
