// const cardImageWeather = document.querySelector('.weather-app');

// cardImageWeather.addEventListener('mouseover', () => {
//   console.log('mouseover');
//   cardImageWeather.src = './assets/color.gif';
// });

// cardImageWeather.addEventListener('mouseout', () => {
//   console.log('mouseout');
//   cardImageWeather.src = './assets/weather-app-snap.png';
// });

const themeToggle = document.querySelector(
  '.toggle-theme input[type="checkbox"]'
);

const themeSVG = document.querySelector('.toggle-svg');

const currentTheme = localStorage.getItem('theme');

currentTheme
  ? document.documentElement.setAttribute('data-theme', currentTheme)
  : null;

currentTheme === 'dark'
  ? (themeToggle.checked = true)
  : (themeToggle.checked = false);

function toggleTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
}

themeSVG.addEventListener('click', () => {
  console.log(themeSVG);
  if (themeToggle.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
});

themeToggle.addEventListener('change', toggleTheme, false);
