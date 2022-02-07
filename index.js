console.log('Вёрстка +10\nПри кликах по интерактивным элементам меняется изображение +0\nПри кликах по интерактивным элементам меняется звук +5\nАктивный в данный момент интерактивный элемент стиля +0\nКнопка Воспроизведение/Пауза +0\n15');
/* Музыка*/

const playBtn = document.querySelector('.play');
const audio = new Audio();

function playAudio() {
  audio.src = './assets/audio/forest.mp3';
  audio.currentTime = 0;
  audio.play();
}

playBtn.addEventListener('click', playAudio);



/*Кнопки*/

const button = document.querySelector('button');

function toggleBtn() {
  button.classList.toggle('pause');
}
button.addEventListener('click', toggleBtn);


