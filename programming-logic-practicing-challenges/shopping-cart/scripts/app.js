let totalValue;
clearCart();

function addProduct() {
    // Retrieve values: product name, quantity, and unit price
    let product = document.getElementById('product').value;
    let productName = product.split('-')[0].trim();
    let unitPrice = parseFloat(product.split('$')[1]);
    let quantity = parseInt(document.getElementById('quantity').value);

    // 1. Add validations to ensure users can only add valid products and quantities to the cart. Display appropriate error messages for invalid inputs.
    if (!product || product.trim() === "") {
        alert('Please select a valid product!');
        return;
    }

    if (isNaN(quantity) || quantity <= 0) {
        alert('Please enter a valid quantity!');
        return;
    }

    // Calculate the subtotal price
    let price = quantity * unitPrice;

    // Add to the cart
    let cart = document.getElementById('product-list');
    cart.innerHTML += `<section class="cart__products__product">
          <span class="blue-text">${quantity}x</span> ${productName} <span class="blue-text">$${price.toFixed(2)}</span>
        </section>`;

    // Update the total value
    totalValue += price;
    let totalField = document.getElementById('total-value'); 
    totalField.textContent = `$ ${totalValue.toFixed(2)}`;
    document.getElementById('quantity').value = '';
}

function clearCart() {
    totalValue = 0;
    document.getElementById('product-list').innerHTML = '';
    document.getElementById('total-value').textContent = '$ 0.00';
}