// script.js
let cartItems = [];
let cartTotal = 0;

function addToCart(productName, productPrice) {
  cartItems.push({ name: productName, price: productPrice });
  cartTotal += productPrice;

  updateCart();
}

function updateCart() {
  const cartItemsElement = document.getElementById('cart-items');
  cartItemsElement.innerHTML = '';

  for (let i = 0; i < cartItems.length; i++) {
    const cartItem = cartItems[i];
    const li = document.createElement('li');
    li.innerText = `${cartItem.name} - $${cartItem.price}`;
    cartItemsElement.appendChild(li);
  }

  const cartTotalElement = document.getElementById('cart-total');
  cartTotalElement.innerText = `Total: $${cartTotal.toFixed(2)}`;
}

function checkout() {
  // Perform the checkout process
  alert('Thank you for your purchase!');
  cartItems = [];
  cartTotal = 0;
  updateCart();
}
