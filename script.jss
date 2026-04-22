const products = [
    {
        name: "iPhone 15",
        price: "₹79,999",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
    },
    {
        name: "Laptop",
        price: "₹55,000",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
    },
    {
        name: "Shoes",
        price: "₹2,499",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },
    {
        name: "Headphones",
        price: "₹1,999",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    },
    {
        name: "Watch",
        price: "₹3,499",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    },
    {
        name: "Backpack",
        price: "₹1,499",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62"
    }
];

const productList = document.getElementById("product-list");

products.forEach(product => {
    let card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <button>Add to Cart</button>
    `;

    productList.appendChild(card);
});
