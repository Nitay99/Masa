// eslint-disable-next-line
import Swiper, {Navigation, Pagination} from '../../vendor/swiper';

const sliderNews = document.querySelector('.news__slider');
// const menu = ['Slide 1', 'Slide 2', 'Slide 3'];

const initSliderNews = () => {
  Swiper.use([Navigation, Pagination]);
  // eslint-disable-next-line
  const swiper = new Swiper(sliderNews, {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    navigation: {
      nextEl: '.news__button-next',
      prevEl: '.news__button-prev',
    },

    pagination: {
      el: '.news__pagination',
			clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + `${index + 1}` + '</span>';
      },
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

export {initSliderNews};
