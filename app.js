// Get a reference to your game container and the insect elements
const gameContainer = document.querySelector('.game');
const insect = document.querySelector('.insect');
const scoreEl = document.querySelector('.score');
const time = document.querySelector('.time');
const play = document.getElementById('play');
const start = document.getElementById('start');
const settings = document.getElementById('settings');
const game = document.getElementById('game');
let score = +scoreEl.innerHTML;
// Select the "fly" card by its ID
const flyCard = document.getElementById('fly');

// Select the "mosquito" card by its ID
const mosquitoCard = document.getElementById('mosquito');

// Select the "spider" card by its ID
const spiderCard = document.getElementById('spider');

// Select the "roach" card by its ID
const roachCard = document.getElementById('roach');
// Initialize a variable to store the selected insect
let selectedInsect = null;

// Select the "fly" card by its ID and add a click event listener
play.addEventListener('click', () => {
	start.classList.toggle('active');
	settings.classList.toggle('active');
});
flyCard.addEventListener('click', () => {
	selectedInsect = 'fly';
	settings.classList.toggle('active');
	game.classList.toggle('active');
});

// Select the "mosquito" card by its ID and add a click event listener

mosquitoCard.addEventListener('click', () => {
	selectedInsect = 'mosquito';
	console.log('Selected insect: ' + selectedInsect);
	settings.classList.toggle('active');
	game.classList.toggle('active');
});

// Select the "spider" card by its ID and add a click event listener

spiderCard.addEventListener('click', () => {
	selectedInsect = 'spider';
	console.log('Selected insect: ' + selectedInsect);
	settings.classList.toggle('active');
	game.classList.toggle('active');
});

// Select the "roach" card by its ID and add a click event listener

roachCard.addEventListener('click', () => {
	selectedInsect = 'roach';
	console.log('Selected insect: ' + selectedInsect);
	settings.classList.toggle('active');
	game.classList.toggle('active');
});

// Function to set the insect's position and rotation randomly within the game container
function placeInsectRandomly() {
	// Calculate random coordinates within the game container's dimensions
	const maxX = gameContainer.clientWidth - insect.clientWidth;
	const maxY = gameContainer.clientHeight - insect.clientHeight;

	const randomX = Math.floor(Math.random() * maxX);
	const randomY = Math.floor(Math.random() * maxY);

	// Calculate a random rotation angle between 0 and 360 degrees
	const randomRotation = Math.floor(Math.random() * 360);

	// Set the insect's position and rotation
	insect.style.left = `${randomX}px`;
	insect.style.top = `${randomY}px`;
	insect.style.transform = `rotate(${randomRotation}deg)`;
}

// Call the function to initially position and rotate the insect
placeInsectRandomly();
