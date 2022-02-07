console.log('Вёрстка +10\nПри кликах по интерактивным элементам меняется изображение +10\nПри кликах по интерактивным элементам меняется звук +10\nАктивный в данный момент интерактивный элемент стиля +0\nКнопка Воспроизведение/Пауза +0\n30');
/* Музыка*/

const playBtn = document.querySelector('.play-btn');
const audio = new Audio();

function playAudio() {
  audio.src = './assets/audio/forest.mp3';
  audio.currentTime = 0;
  audio.play();
}

playBtn.addEventListener(playAudio);


/*const playBtn = document.querySelector('.play');
const pauseBtn = document.querySelector('.play:active');
const audio = new Audio();

function playAudio() {
  audio.src = './assets/audio/forest.mp3';
  audio.currentTime = 0;
  audio.play();
}

function pauseAudio() {
  audio.pause();
}

playBtn.addEventListener('click', playAudio);
pauseBtn.addEventListener('click', pauseAudio);
/*
(function () {
    function preloadImages() {
        const birds = ['solovey', 'drozd', 'zarynka', 'javoronok', 'slavka'];
    
        for(let i = 1; i <= 6; i++) {
                const img = new Image();
                const audio = new Audio();
                img.src = `./assets/img/${i}.jpg`;
            }
        }
    }
}
  preloadImages();

const portfolioButtonsContainer = document.querySelector('.play');
    ButtonsContainer.addEventListener('click',() => {
        if(event.target.classList.contains('transparent-button')) {
            portfolioImages.forEach((img, index) => img.src = `./assets/img/${event.target.dataset.season}/${index + 1}.jpg`);
            portfolioButtons.forEach((button) =>  button.classList.remove('active'));
            event.target.classList.add('active');
        }
    });
    );