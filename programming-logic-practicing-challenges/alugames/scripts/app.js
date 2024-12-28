let rentedGamesCount = 0;

function countAndDisplayRentedGames() {
    console.log(`Total rented games: ${rentedGamesCount}`);
}

function changeStatus(id) {
    let clickedGame = document.getElementById(`game-${id}`);
    let image = clickedGame.querySelector('.dashboard__item__img');
    let button = clickedGame.querySelector('.dashboard__item__button');
    let gameName = clickedGame.querySelector('.dashboard__item__name');

    if (image.classList.contains('dashboard__item__img--rented')) {
        if (confirm(`Are you sure you want to return the game ${gameName.textContent}?`)) {
            image.classList.remove('dashboard__item__img--rented');
            button.classList.remove('dashboard__item__button--return');
            button.textContent = 'Rent';
        }
        rentedGamesCount--;
    } else {
        image.classList.add('dashboard__item__img--rented');
        button.textContent = 'Return';
        button.classList.add('dashboard__item__button--return');
        rentedGamesCount++;
    }

    countAndDisplayRentedGames();
}

document.addEventListener('DOMContentLoaded', function() {
    rentedGamesCount = document.querySelectorAll('.dashboard__item__img--rented').length;
    countAndDisplayRentedGames();
});
