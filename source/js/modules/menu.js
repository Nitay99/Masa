import '../utils/scroll-lock';

const menu = document.querySelector('.dropdown-menu');
const checkbox = menu ? menu.querySelector('input') : false;
const menuLinks = menu ? menu.querySelectorAll('.dropdown-menu__link') : false;
const overlay = document.querySelector('.overlay');


const setMenuClickHandler = () => {
  if (menu) {
    menu.classList.remove('dropdown-menu--nojs');
  }

  if (checkbox) {
    checkbox.disabled = false;
    checkbox.addEventListener('keydown', (evt) => {
      if (evt.key === 'Enter') {
        if (checkbox.checked) {
          checkbox.checked = false;
          window.scrollLock.enableScrolling();
        } else {
          checkbox.checked = true;
          window.scrollLock.disableScrolling();
        }
      }
    });

    checkbox.addEventListener('click', () => {
      if (checkbox.checked) {
        window.scrollLock.disableScrolling();
      } else {
        window.scrollLock.enableScrolling();
      }
    });
  }

  if (overlay && checkbox) {
    overlay.addEventListener('click', () => {
      checkbox.checked = false;
      window.scrollLock.enableScrolling();
    });
  }

  if (menuLinks.length >= 1 && menu && checkbox) {
    menuLinks.forEach((menuLink) => {
      menuLink.addEventListener('click', () => {
        checkbox.checked = false;
      });
    });
  }
};

export {setMenuClickHandler};
