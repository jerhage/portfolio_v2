const cardImageWeather = document.querySelector('weather-app');

cardImageWeather.addEventListener('mouseover', () => {
  cardImageWeather.src = './assets/javascript.svg';
});

cardImageWeather.addEventListener('mouseout', () => {
  cardImageWeather.src = './assets/weather-app-snap.png';
});
