const html = document.querySelector('html');
const logo = document.querySelector('#logo');
const navList = document.querySelector('#nav-list');
const themeIcon = document.querySelector('#theme-icon');
html.dataset.theme = `theme-dark`;
logo.style.fill = 'white';
let isDark = true;
function switchTheme() {
  isDark = !isDark;
  if (isDark) {
    themeIcon.src = `./assets/dark.svg`;
    html.dataset.theme = `theme-dark`;
    logo.style.fill = 'white';
  } else {
    themeIcon.src = `./assets/light.svg`;
    html.dataset.theme = `theme-light`;
    logo.style.fill = 'black';
  }
}
navList.addEventListener('click', (e) => {
  const rawLink = e.target.id;
  const id = `#${rawLink}`;
  if (document.querySelector(`h3${id}`)) {
    function scrollIntoView(offset = 0) {
      window.scroll(0, document.querySelector(`h3${id}`).offsetTop - offset);
    }
    scrollIntoView(document.querySelector('#navbar').offsetHeight);
  }
});
