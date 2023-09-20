import '../utils/scroll-lock';

const tabs = document.querySelectorAll('.filter-tabs__button');

const initTabs = () => {
  if (tabs) {
    tabs.forEach((item) => {
      item.addEventListener('click', () => {
        if (item.classList.contains('filter-tabs__button--active')) {
          return;
        }

        window.scrollLock.disableScrolling();

        tabs.forEach((tab) => {
          if (tab.classList.contains('filter-tabs__button--active')) {
            tab.classList.remove('filter-tabs__button--active');
          }
        });

        item.classList.add('filter-tabs__button--active');

        window.scrollLock.enableScrolling();
      });
    });
  }
};

export {initTabs};
