const menu = document.querySelector('.dropdown-menu');
const checkbox = menu ? menu.querySelector('input') : false;

if (checkbox) {
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
