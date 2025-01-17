function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItems = document.getElementById('cart-items');
    let cartTotal = document.getElementById('cart-total');

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        let cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <p>${item.name} - $${item.price} 
            <button onclick="removeFromCart(${index})">Remove</button></p>
        `;
        cartItems.appendChild(cartItem);
        total += item.price;
    });

    cartTotal.innerHTML = `<p>Total: $${total}</p>`;
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

function clearCart() {
    localStorage.removeItem('cart');
    displayCart();
}

if (window.location.pathname.includes('cart.html')) {
    displayCart();
}
