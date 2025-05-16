const desserts = [
    {
        "image": {
            "thumbnail": "./assets/images/image-waffle-thumbnail.jpg",
            "mobile": "./assets/images/image-waffle-mobile.jpg",
            "tablet": "./assets/images/image-waffle-tablet.jpg",
            "desktop": "./assets/images/image-waffle-desktop.jpg"
        },
        "name": "Waffle with Berries",
        "category": "Waffle",
        "price": 6.50
    },
    {
        "image": {
            "thumbnail": "./assets/images/image-creme-brulee-thumbnail.jpg",
            "mobile": "./assets/images/image-creme-brulee-mobile.jpg",
            "tablet": "./assets/images/image-creme-brulee-tablet.jpg",
            "desktop": "./assets/images/image-creme-brulee-desktop.jpg"
        },
        "name": "Vanilla Bean Crème Brûlée",
        "category": "Crème Brûlée",
        "price": 7.00
    },
    {
        "image": {
            "thumbnail": "./assets/images/image-macaron-thumbnail.jpg",
            "mobile": "./assets/images/image-macaron-mobile.jpg",
            "tablet": "./assets/images/image-macaron-tablet.jpg",
            "desktop": "./assets/images/image-macaron-desktop.jpg"
        },
        "name": "Macaron Mix of Five",
        "category": "Macaron",
        "price": 8.00
    },
    {
        "image": {
            "thumbnail": "./assets/images/image-tiramisu-thumbnail.jpg",
            "mobile": "./assets/images/image-tiramisu-mobile.jpg",
            "tablet": "./assets/images/image-tiramisu-tablet.jpg",
            "desktop": "./assets/images/image-tiramisu-desktop.jpg"
        },
        "name": "Classic Tiramisu",
        "category": "Tiramisu",
        "price": 5.50
    },
    {
        "image": {
            "thumbnail": "./assets/images/image-baklava-thumbnail.jpg",
            "mobile": "./assets/images/image-baklava-mobile.jpg",
            "tablet": "./assets/images/image-baklava-tablet.jpg",
            "desktop": "./assets/images/image-baklava-desktop.jpg"
        },
        "name": "Pistachio Baklava",
        "category": "Baklava",
        "price": 4.00
    },
    {
        "image": {
            "thumbnail": "./assets/images/image-meringue-thumbnail.jpg",
            "mobile": "./assets/images/image-meringue-mobile.jpg",
            "tablet": "./assets/images/image-meringue-tablet.jpg",
            "desktop": "./assets/images/image-meringue-desktop.jpg"
        },
        "name": "Lemon Meringue Pie",
        "category": "Pie",
        "price": 5.00
    },
    {
        "image": {
            "thumbnail": "./assets/images/image-cake-thumbnail.jpg",
            "mobile": "./assets/images/image-cake-mobile.jpg",
            "tablet": "./assets/images/image-cake-tablet.jpg",
            "desktop": "./assets/images/image-cake-desktop.jpg"
        },
        "name": "Red Velvet Cake",
        "category": "Cake",
        "price": 4.50
    },
    {
        "image": {
            "thumbnail": "./assets/images/image-brownie-thumbnail.jpg",
            "mobile": "./assets/images/image-brownie-mobile.jpg",
            "tablet": "./assets/images/image-brownie-tablet.jpg",
            "desktop": "./assets/images/image-brownie-desktop.jpg"
        },
        "name": "Salted Caramel Brownie",
        "category": "Brownie",
        "price": 4.50
    },
    {
        "image": {
            "thumbnail": "./assets/images/image-panna-cotta-thumbnail.jpg",
            "mobile": "./assets/images/image-panna-cotta-mobile.jpg",
            "tablet": "./assets/images/image-panna-cotta-tablet.jpg",
            "desktop": "./assets/images/image-panna-cotta-desktop.jpg"
        },
        "name": "Vanilla Panna Cotta",
        "category": "Panna Cotta",
        "price": 6.50
    }
];

const container = document.querySelector(".card-container"); 
let cartItems = [];

desserts.forEach(dessert => {
    const card = document.createElement('div');
    card.className = 'card';

    const desktopImage = dessert.image.desktop || 
                       (dessert.image ? dessert.image.desktop : ''); 

    card.innerHTML = `
    <div class="card-inner">
      <img src="${desktopImage}" alt="${dessert.name}" class='dessert-image'>
      <button > 
        <img src="./assets/images/icon-add-to-cart.svg">  
        Add to cart 
      </button>
      <div class="card-content">
        <h4>${dessert.category}</h4>
        <p>${dessert.name}</p>
        <span class="price">$ ${dessert.price.toFixed(2)}<span>
      </div>
    </div>
    `;

    container.appendChild(card);
    const addToCartBtn = card.querySelector('button');
    addToCartBtn.addEventListener('click', () => addToCart(dessert));
});

function addToCart(dessert) {
    cartItems.push(dessert);
    updateCartDisplay();
}

function updateCartDisplay() {
    let cartContainer = document.querySelector('.cart-container');
    if (!cartContainer) {
        cartContainer = document.createElement('div');
        cartContainer.className = 'cart-container';
        document.body.appendChild(cartContainer);
    }
    cartContainer.innerHTML = `
        <h2>Your Cart (${cartItems.length})</h2>
        <ul>
            ${cartItems.map(item => `

                <div class="cart-item">
                 <h4>${item.name} </h4>
             <div class="cart-selected">
            <p> $${item.price.toFixed(2)} </p>
            <img src="./assets/images/icon-remove-item.svg" alt="remove">
             </div>
           </div>
           <hr>
            `).join('')}

             <div class="tatal-items">
                <p>Order Total</p>
                <span class="total-price">$${calculateTotal().toFixed(2)}</span>
            </div>

            <div class="carbon">
                <img src="./assets/images/icon-carbon-neutral.svg" alt="carbon">
                <p>This is a <b>Carbon-nuetral</b> delivery</p>
            </div>

             <button class="confirm">Confirm Order</button>
        
       
    `;
}

function calculateTotal() {
    return cartItems.reduce((total, item) => total + item.price, 0);
}