function drawNumbers() {
    let quantity = parseInt(document.getElementById('quantity').value);
    let from = parseInt(document.getElementById('from').value);
    let to = parseInt(document.getElementById('to').value);

    if (from >= to) {
        alert('The "From number" field must be less than the "To number" field. Please check!');
        return;
    }

    if (quantity > (to - from + 1)) {
        alert('The "Quantity" field must be less than or equal to the range between "From number" and "To number". Please check!');
        return;
    }

    let drawnNumbers = [];
    let randomNumber;

    for (let i = 0; i < quantity; i++) {
        randomNumber = getRandomNumber(from, to);

        while (drawnNumbers.includes(randomNumber)) {
            randomNumber = getRandomNumber(from, to);
        }

        drawnNumbers.push(randomNumber);
    }

    let result = document.getElementById('result');
    result.innerHTML = `<label class="text__paragraph">Drawn numbers: ${drawnNumbers}</label>`;

    toggleButtonStatus();
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function toggleButtonStatus() {
    let button = document.getElementById('btn-reset');

    if (button.classList.contains('container__button-disabled')) {
        button.classList.remove('container__button-disabled');
        button.classList.add('container__button');
    } else {
        button.classList.remove('container__button');
        button.classList.add('container__button-disabled');
    }
}

function reset() {
    document.getElementById('quantity').value = '';
    document.getElementById('from').value = '';
    document.getElementById('to').value = '';
    document.getElementById('result').innerHTML = '<label class="text__paragraph">Drawn numbers: none so far</label>';
    toggleButtonStatus();
}
