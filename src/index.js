import menu from './menu.json'
import template from './template.hbs'
import css from './styles.css'

const ul = document.querySelector('.js-menu');
const markup = template(menu);
ul.innerHTML = markup;

const dayNnightToggle = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function lightTheme() {
    body.classList.add(Theme.LIGHT);
    body.classList.remove(Theme.DARK);
    localStorage.setItem('theme' , Theme.LIGHT)
}

function darkTheme() {
    body.classList.add(Theme.DARK);
    body.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK)
}

dayNnightToggle.addEventListener('change', () => {
    (dayNnightToggle.checked) ? darkTheme() : lightTheme();
})

    if (localStorage.getItem('theme') === Theme.DARK) {
        dayNnightToggle.checked = true;
        body.classList.add(Theme.DARK);
    }