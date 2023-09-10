document.addEventListener('DOMContentLoaded', () => {
	// Get references to your game elements
	const play = document.getElementById('play');
	const start = document.getElementById('start');
	const settings = document.getElementById('settings');
	const game = document.getElementById('game');
	const scoreEl = document.querySelector('.score');
	const playField = document.querySelector('.playField');

	// Select the "fly" card by its ID
	const flyCard = document.getElementById('fly');

	// Select the "mosquito" card by its ID
	const mosquitoCard = document.getElementById('mosquito');

	// Select the "spider" card by its ID
	const spiderCard = document.getElementById('spider');

	// Select the "roach" card by its ID
	const roachCard = document.getElementById('roach');

	// Initialize variables
	let score = 0;
	const maxScore = 20; // Define the maximum score to win the game
	let gameWon = false; // Flag to track whether the game has been won
	let selectedInsect = null;

	// Function to create a new insect and add it to the game
	function createInsect() {
		if (!gameWon && score < maxScore) {
			const newInsect = document.createElement('div');
			newInsect.classList.add('insect');

			// Set the position and rotation randomly
			const maxX = playField.clientWidth - newInsect.clientWidth;
			const maxY = playField.clientHeight - newInsect.clientHeight;
			console.log(maxY);
			const randomX = Math.floor(Math.random() * maxX);
			const randomY = Math.floor(Math.random() * maxY);
			const randomRotation = Math.floor(Math.random() * 360);

			newInsect.style.left = `${randomX}px`;
			newInsect.style.top = `${randomY}px`;
			newInsect.style.transform = `rotate(${randomRotation}deg)`;

			// Set the image source
			const image = document.createElement('img');
			image.src = `img/${selectedInsect}.jpg`;
			newInsect.appendChild(image);
			function handleInsectClick() {
				if (!gameWon) {
					newInsect.remove();
					score++;
					scoreEl.innerHTML = `Score: ${score}`;
					placeInsectRandomly();
					placeInsectRandomly();
					if (score >= maxScore) {
						gameWon = true; // Set the gameWon flag to true
						// Remove the click event listener using the same function
						newInsect.removeEventListener('click', handleInsectClick);

						// Handle game win condition
						const message = document.createElement('div');
						message.classList.add('message');
						message.innerHTML = `<h1>Congratulations! You won the game!</h1>`;
						playField.appendChild(message);

						game.style.backgroundColor = `rgba(6, 131, 240, 0.3)`;
					}
				}
			}
			// Add click event listener to the new insect
			newInsect.addEventListener('click', handleInsectClick);

			// Append the new insect to the playField
			playField.appendChild(newInsect);
		}
	}

	// Function to set the insect's position and rotation randomly
	function placeInsectRandomly() {
		if (!gameWon && score < maxScore) {
			createInsect();
		}
	}

	// Event listeners to start the game
	play.addEventListener('click', () => {
		start.classList.toggle('active');
		settings.classList.toggle('active');
	});

	flyCard.addEventListener('click', () => {
		selectedInsect = 'fly';
		settings.classList.toggle('active');
		game.classList.toggle('active');
		placeInsectRandomly();
	});

	mosquitoCard.addEventListener('click', () => {
		selectedInsect = 'mosquito';
		settings.classList.toggle('active');
		game.classList.toggle('active');
		placeInsectRandomly();
	});

	spiderCard.addEventListener('click', () => {
		selectedInsect = 'spider';
		settings.classList.toggle('active');
		game.classList.toggle('active');
		placeInsectRandomly();
	});

	roachCard.addEventListener('click', () => {
		selectedInsect = 'roach';
		settings.classList.toggle('active');
		game.classList.toggle('active');
		placeInsectRandomly();
	});
});
