
        var cartTotal = 0;

function addToCart(button, price) {
    var quantity = parseInt(button.parentElement.querySelector(".quantity").textContent);
    var totalForProduct = quantity * price;

    var productName = button.parentElement.parentElement.querySelector("h3").textContent;
    var cartList = document.getElementById('cartList');

    var existingCartItem = [...cartList.getElementsByClassName('cart-item')].find(item => item.dataset.productName === productName);

    if (existingCartItem) {
        var existingQuantity = parseInt(existingCartItem.querySelector('.cart-item-quantity').textContent);
        existingQuantity += quantity; // Update existing quantity by adding the new quantity
        existingCartItem.querySelector('.cart-item-quantity').textContent = existingQuantity;

        var existingTotal = parseFloat(existingCartItem.querySelector('.cart-item-total').textContent);
        existingTotal += totalForProduct;
        existingCartItem.querySelector('.cart-item-total').textContent = existingTotal.toFixed(2);
    } else {
        var cartItem = document.createElement('li');
        cartItem.classList.add('cart-item');
        cartItem.setAttribute('data-product-name', productName);
        cartItem.innerHTML =
            productName + ' (' + price + ' lei) x <span class="cart-item-quantity">' + quantity + '</span> = <span class="cart-item-total">' + totalForProduct.toFixed(2) + '</span> lei' +
            '<button onclick="removeFromCart(this)">Șterge</button>';
        cartList.appendChild(cartItem);
    }

    cartTotal += totalForProduct;
    document.getElementById('total').textContent = cartTotal.toFixed(2);
}

function removeFromCart(button) {
    var cartItem = button.parentElement;
    var totalForProduct = parseFloat(cartItem.querySelector('.cart-item-total').textContent);
    var quantity = parseInt(cartItem.querySelector('.cart-item-quantity').textContent);

    cartTotal -= totalForProduct;
    document.getElementById('total').textContent = cartTotal.toFixed(2);

    // If there's more than one quantity, subtract the total of the removed item from the cart total
    if (quantity > 1) {
        cartTotal -= totalForProduct;
    }

    cartItem.remove();
}

function changeQuantity(button, change) {
    const quantityElement = button.parentElement.querySelector(".quantity");
    const quantity = parseInt(quantityElement.textContent);

    if (change == -1 && quantity > 1) {
        quantityElement.textContent = quantity - 1;
    } else if (change == 1) {
        quantityElement.textContent = quantity + 1;
    }
}

function clearCart() {
    var cartList = document.getElementById('cartList');
    cartList.innerHTML = '';
    cartTotal = 0;
    document.getElementById('total').textContent = cartTotal.toFixed(2);
}
