// eslint-disable-next-line
import Swiper, {Pagination} from '../../vendor/swiper';

const programSlider = document.querySelector('.programs__slider');

const initProgramSlider = () => {
  Swiper.use([Pagination]);
  // eslint-disable-next-line
  const swiper = new Swiper(programSlider, {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    // },

    speed: 250,

    breakpoints: {
      // when window width is >= 320px
      320: {
        spaceBetween: 20,
        allowTouchMove: true,
      },
      768: {
        spaceBetween: 20,
        allowTouchMove: true,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 32,
        allowTouchMove: false,
      },
    },
  });
};

export {initProgramSlider};
