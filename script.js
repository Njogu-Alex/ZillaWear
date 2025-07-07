let cart = [];

function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  updateCartUI();
}

function updateCartUI() {
  document.getElementById('cart-count').textContent = cart.length;
  
  const cartItemsContainer = document.getElementById('cart-items');
  cartItemsContainer.innerHTML = '';
  
  
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ${item.price}`;
    cartItemsContainer.appendChild(li);
  });
}

function toggleCart() {
  const cartBox = document.getElementById('cart-container');
  cartBox.style.display = cartBox.style.display === 'block' ? 'none' : 'block';
}
function checkout() {
  alert("Thank you for your purchase!\nTotal: " + document.getElementById('cart-total').textContent);
  cart = [];
  updateCartUI();
}
function filterCards() {
  const input = document.getElementById('search-input').value.toLowerCase();
  const cards = document.querySelectorAll('.cards');

  cards.forEach(card => {
    const name = card.getAttribute('data-name').toLowerCase();
    if (name.includes(input)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}function cancelCart() {
  if (confirm("Are you sure you want to clear the cart?")) {
    cart = [];
    updateCartUI();
  }
}
