// eslint-disable-next-line
import Swiper, {Pagination} from '../../vendor/swiper';

const headerSlider = document.querySelector('.hero__slider');

const initHeaderSlider = () => {
  Swiper.use([Pagination]);
  // eslint-disable-next-line
  const swiper = new Swiper(headerSlider, {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    speed: 0,

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
        spaceBetween: 20,
        allowTouchMove: false,
      },
    },
  });

  let activeIndex = swiper.realIndex;
  let headerSlides = headerSlider ? headerSlider.querySelectorAll('.swiper-slide') : false;

  if (headerSlider && headerSlides) {
    headerSlides.forEach((item, index) => {
      let buttons = item.querySelectorAll('a, span');
      if (index === activeIndex + 1) {
        for (let button of buttons) {
          button.setAttribute('tabindex', '0');
        }
      } else {
        for (let button of buttons) {
          button.setAttribute('tabindex', '-1');
        }
      }
    });

    swiper.on('slideChange', () => {
      activeIndex = swiper.realIndex;
      headerSlides.forEach((item, index) => {
        let buttons = item.querySelectorAll('a, span');
        if (index === activeIndex + 1) {
          for (let button of buttons) {
            button.setAttribute('tabindex', '0');
          }
        } else {
          for (let button of buttons) {
            button.setAttribute('tabindex', '-1');
          }
        }
      });
    });
  }
};

export {initHeaderSlider};
