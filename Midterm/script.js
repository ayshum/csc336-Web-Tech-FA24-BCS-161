const MAX_PER_PRODUCT = 3;          // (61 mod 4) + 2
const cart = [];                    // [{ name, price }, ...]

const cartBtn   = document.getElementById('cartBtn');
const miniCart  = document.getElementById('miniCart');
const cartBadge = document.getElementById('cartBadge');
const cartList  = document.getElementById('cartList');
const cartTotal = document.getElementById('cartTotal');
const addButtons = document.querySelectorAll('.card .btn');

function getName(card) {
  return card.querySelector('.card-title').textContent.trim();
}

function getPrice(card) {
  // "Rs. 430.00" -> 430
  return parseFloat(card.querySelector('.badge').textContent.replace(/[^0-9.]/g, ''));
}

function countOf(name) {
  return cart.filter(item => item.name === name).length;
}

function render() {
  // badge
  cartBadge.textContent = cart.length;

  // list
  if (cart.length === 0) {
    cartList.innerHTML = '<li class="text-muted">Your cart is empty.</li>';
  } else {
    cartList.innerHTML = cart.map((item, i) => `
      <li class="d-flex justify-content-between align-items-center mb-2">
        <span>${item.name}<br><small class="text-muted">Rs. ${item.price.toFixed(2)}</small></span>
        <button type="button" class="btn btn-sm btn-outline-danger" data-index="${i}">Remove</button>
      </li>`).join('');
  }

  // total with reduce()
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  cartTotal.textContent = 'Rs. ' + total.toFixed(2);

  // buttons: disable at the limit, restore when below it
  addButtons.forEach(btn => {
    const name = getName(btn.closest('.card'));
    const full = countOf(name) >= MAX_PER_PRODUCT;
    btn.textContent = full ? 'Limit reached' : 'Add To Cart';
    btn.disabled = full;
  });
}

// Add to cart
addButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.card');
    const name = getName(card);
    if (countOf(name) >= MAX_PER_PRODUCT) return;
    cart.push({ name: name, price: getPrice(card) });
    render();
  });
});

// Remove (one listener for all Remove buttons)
cartList.addEventListener('click', e => {
  if (e.target.matches('[data-index]')) {
    cart.splice(Number(e.target.dataset.index), 1);
    render();
  }
});

// Open / close the panel
cartBtn.addEventListener('click', () => {
  miniCart.classList.toggle('open');
});

render();