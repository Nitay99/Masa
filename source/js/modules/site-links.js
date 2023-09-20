const footer = document.querySelector('.main-footer');
const siteList = footer ? footer.querySelector('.site-list') : false;
const siteLinks = siteList ? siteList.querySelectorAll('a') : false;

const sections = ['about', 'programs', 'grant-details', 'reviews', 'news', 'contacts'];

if (siteLinks.length >= 1) {
  siteLinks.forEach((siteLink) => {
    siteLink.addEventListener('click', (evt) => {
      evt.preventDefault();
      sections.find((section) => {
        if (siteLink.classList.contains(`site-list__link--${section}`)) {
          let sectionBlock = document.querySelector(`.${section}`);
          if (sectionBlock) {
            sectionBlock.scrollIntoView();
          }
        }
      });
    });
  });
}
