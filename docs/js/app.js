const html = document.querySelector('html');
const themeIcon = document.querySelector('#theme-icon');
html.dataset.theme = `theme-light`;
let isDark = false;
function switchTheme() {
  isDark = !isDark;
  if (isDark) {
    themeIcon.src = `./assets/dark.svg`;
    html.dataset.theme = `theme-dark`;
  } else {
    themeIcon.src = `./assets/light.svg`;
    html.dataset.theme = `theme-light`;
  }
}
