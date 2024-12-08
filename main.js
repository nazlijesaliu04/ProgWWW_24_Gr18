document.addEventLdocument.addEventListener("DOMContentLoaded", () => {
    const products = [
        { 
            id: 1, 
            name: "Elegant Evening Dress", 
            price: 120, 
            category: "evening", 
            image: "111.jpeg", 
            sizes: ["S", "M", "L", "XL"]  // Masat për këtë produkt
        },
        { 
            id: 2, 
            name: "Casual Denim Dress", 
            price: 80, 
            category: "casual", 
            image:"123.jpg",
            sizes: ["M", "L", "XL"]  // Masat për këtë produkt
        },
        { 
            id: 3, 
            name: "Floral Summer Dress", 
            price: 100, 
            category: "summer", 
            image: "222.jpeg", 
            sizes: ["S", "M", "L"]  // Masat për këtë produkt
        },
        { 
            id: 4, 
            name: "Classic Evening Dress", 
            price: 150, 
            category: "evening", 
            image: "333.jpeg",
            sizes: []  // Ky produkt nuk ka masë
        },
        { 
            id: 5, 
            name: "Relaxed Casual Dress", 
            price: 70, 
            category: "summer", 
            image: "444.webp", 
            sizes: ["S", "M", "L", "XL"]  // Masat për këtë produkt
        },
        {
            id: 6, 
            name: "Ruffle Printed Mesh Wrap Maxi Dress", 
            price: 30, 
            category: "evening", 
            image: "555.webp", 
            sizes: ["XS","S","L"]  // masat per kete produkt
        },

        {   id: 7, 
            name: "Plus Denim Zip Up Shift Dress", 
            price: 20, 
            category: "casual", 
            image: "666.webp", 
            sizes: ["S","M"]  // Ky produkt ka masë
        },
        {
            id: 8, 
            name: "The Midaxi Shirt Dress", 
            price: 25, 
            category: "casual", 
            image: "777.webp", 
            sizes: ["S"]  // Ky produkt ka masë
        },
        {
            id: 9, 
            name: "Rose Print Satin Slip Mini Dress", 
            price: 15, 
            category: "summer", 
            image: "888.webp", 
            sizes: ["M"]  // Ky produkt ka masë
        }
    ];
    const productList = document.getElementById ("product-list");
    const categoryFilter = document.getElementById("category-filter");
    const cartItemsContainer = document.getElementById("cart-items");

    const saveCartItems =(items)=>{
        localStorage.setItem("cart",JSON.stringify(items));
    }

    const getCrtItems =()=>{
        const cart =localStorage.getItem("cart");
        return cart ? JSON.parse(cart) : [];
    }
    const renderProducts = (category = "all") => {
        productList.innerHTML = ""; // Pastrimi i mëparshëm
        const filteredProducts = category === "all" 
            ? products 
            : products.filter(product => product.category === category);

        filteredProducts.forEach(product => {
            const div = document.createElement("div");
            div.className = "product";
            const sizeOptions = product.sizes.length > 0
            ? product.sizes.map(size => `<option value="${size}">${size}</option>`).join("")
            : "<option value=''>No sizes available</option>";

        div.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image"> <!-- Foto e produktit -->
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <p>Available sizes: 
                <select class="size-select" data-id="${product.id}">
                    ${sizeOptions} <!-- Dropdown për masat -->
                </select>
            </p>
            <button data-id="${product.id}">Add to Cart</button>
        `;
        productList.appendChild(div);
    });
};  

renderProducts();

categoryFilter.addEventListener("chage",(e)=>{
    renderProducts(e.target.value);
});

productList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        const productId = parseInt(e.target.dataset.id);
        const sizeSelect = e.target.previousElementSibling.querySelector('.size-select');
        const selectedSize = sizeSelect ? sizeSelect.value : null;

        if (!selectedSize) {
            alert("Please select a size before adding to cart.");
            return;
        }

        const product = products.find(p => p.id === productId);
        const cart = getCartItems();
        cart.push({ ...product, selectedSize }); // Ruajmë masën e zgjedhur bashkë me produktin
        saveCartItems(cart);
        alert(`${product.name} of size ${selectedSize} added to cart!`);
    }
});

const renderCart = () => {
    const cart = getCartItems();
    if (cartItemsContainer) {
        if (cart.length > 0) {
            cartItemsContainer.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <p>${item.name} - $${item.price} - Size: ${item.selectedSize}</p>
                    <button class="remove-btn" data-id="${item.id}">Remove</button>
                </div>
            `).join("");
            const total = cart.reduce((sum, item) => sum + item.price, 0);
            cartItemsContainer.innerHTML += `<p><strong>Total: $${total}</strong></p>`;
        } else {
            cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
        }
    }
};

if(cartItemsContainer){
    cartItemsContainer.addEventListener("click",(e)=>{
        if(e.target.classList.contains("remove-btn")){
            const productId =parseInt(e.target.dataset.id);
            const cart = getCartItems();
            const newCart =cart.filter(iteam => item.id !==productId);
            saveCartItems(newCart);
            renderCart();
        }
    })
}
 renderCart();
});
