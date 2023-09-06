const menu = document.querySelector('.dropdown-menu');
const checkbox = menu ? menu.querySelector('input') : false;
const menuLinks = menu ? menu.querySelectorAll('.dropdown-menu__link') : false;
const overlay = document.querySelector('.overlay');

if (menu) {
  menu.classList.remove('dropdown-menu--nojs');
}

if (checkbox) {
  checkbox.disabled = false;
  checkbox.addEventListener('keydown', (evt) => {
    if (evt.key === 'Enter') {
      if (checkbox.checked) {
        checkbox.checked = false;
      } else {
        checkbox.checked = true;
      }
    }
  });
}

if (overlay && checkbox) {
  overlay.addEventListener('click', function () {
    checkbox.checked = false;
  });
}

if (menuLinks.length >= 1 && menu && checkbox) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', function () {
      checkbox.checked = false;
    });
  });
}
