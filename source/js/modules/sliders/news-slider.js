// eslint-disable-next-line
import Swiper, {Navigation, Pagination, Grid, Manipulation} from '../../vendor/swiper';

const sliderNews = document.querySelector('.news__slider');
const newsCareerSlide = document.querySelector('.news__slide--career');
const bigSlide = document.querySelector('.news__slide--big');

const initSliderNews = () => {
  Swiper.use([Navigation, Pagination, Grid, Manipulation]);
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
      renderBullet: (index, className) => {
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
        grid: {
          rows: 2,
          fill: 'row',
        },
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        allowTouchMove: true,
        grid: {
          rows: 2,
          fill: 'row',
        },
      },
      1200: {
        slidesPerView: 'auto',
        spaceBetween: 32,
        allowTouchMove: false,
      },
    },
  });

  swiper.addSlide(0, newsCareerSlide);
  swiper.addSlide(0, bigSlide);

  const swiperWrap = sliderNews ? sliderNews.querySelector('.swiper-wrapper') : null;
  const slides = swiperWrap ? swiperWrap.querySelectorAll('.swiper-slide') : null;

  console.log(slides);

  slides.forEach((child, i, children) => {
    const count = children.length;
    if (i >= count / 2) {
      child.classList.add('news__slide--last');
    }
  });
};

export {initSliderNews};
