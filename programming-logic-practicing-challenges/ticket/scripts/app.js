function buyTicket() {
    let type = document.getElementById('ticket-type');
    let quantity = parseInt(document.getElementById('quantity').value);

    // 1. Add a check to ensure the entered quantity is a positive number. If invalid, display an appropriate error message.
    if (isNaN(quantity) || quantity <= 0) {
        alert('Please enter a valid quantity.');
        return;
    }

    if (type.value === 'floor') {
        purchaseFloor(quantity);
    } else if (type.value === 'upper') {
        purchaseUpper(quantity);
    } else {
        purchaseLower(quantity);
    }
}

function purchaseFloor(quantity) {
    let floorQuantity = parseInt(document.getElementById('quantity-floor').textContent);
    if (quantity > floorQuantity) {
        alert('Insufficient quantity available for Floor tickets.');
    } else {
        floorQuantity -= quantity;
        document.getElementById('quantity-floor').textContent = floorQuantity;
        alert('Purchase successful!');
    }
}

function purchaseUpper(quantity) {
    let upperQuantity = parseInt(document.getElementById('quantity-upper').textContent);
    if (quantity > upperQuantity) {
        alert('Insufficient quantity available for Upper Section tickets.');
    } else {
        upperQuantity -= quantity;
        document.getElementById('quantity-upper').textContent = upperQuantity;
        alert('Purchase successful!');
    }
}

function purchaseLower(quantity) {
    let lowerQuantity = parseInt(document.getElementById('quantity-lower').textContent);
    if (quantity > lowerQuantity) {
        alert('Insufficient quantity available for Lower Section tickets.');
    } else {
        lowerQuantity -= quantity;
        document.getElementById('quantity-lower').textContent = lowerQuantity;
        alert('Purchase successful!');
    }
}