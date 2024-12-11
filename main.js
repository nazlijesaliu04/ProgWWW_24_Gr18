
document.addEventListener("DOMContentLoaded", () => { 
    if (window.location.pathname.includes("products.html")) {
        const products = [ 
            {
                id: 1,
                name: "Elegant Evening Dress",
                price: 120,
                category: "evening",
                image: "images/111.jpeg",
                sizes: ["XS", "S", "M", "L", "XL"]
            },
            {
                id: 2,
                name: "Casual Denim Dress",
                price: 80,
                category: "casual",
                image: "images/123.jpg",
                sizes: ["XS", "S", "M", "L", "XL"]
            },
            {
                id: 3,
                name: "Floral Summer Dress",
                price: 100,
                category: "summer",
                image: "images/222.jpeg",
                sizes: ["XS", "S", "M", "L", "XL"]
            },
            {
                id: 4,
                name: "Classic Evening Dress",
                price: 150,
                category: "evening",
                image: "images/333.jpeg",
                sizes: ["XS", "S", "M", "L", "XL"]
            },
            {
                id: 5,
                name: "Relaxed Casual Dress",
                price: 70,
                category: "summer",
                image: "images/444.webp",
                sizes: ["XS", "S", "M", "L", "XL"]
            },
            {
                id: 6,
                name: "Ruffle Printed Mesh Wrap Maxi Dress",
                price: 30,
                category: "evening",
                image: "images/555.webp",
                sizes: ["XS", "S", "M", "L", "XL"]
            },
            {
                id: 7,
                name: "Plus Denim Zip Up Shift Dress",
                price: 20,
                category: "casual",
                image: "images/666.webp",
                sizes: ["XS", "S", "M", "L", "XL"]
            },
            {
                id: 8,
                name: "The Midaxi Shirt Dress",
                price: 25,
                category: "casual",
                image: "images/777.webp",
                sizes: ["XS", "S", "M", "L", "XL"]
            },
            {
                id: 9,
                name: "Rose Print Satin Slip Mini Dress",
                price: 15,
                category: "summer",
                image: "images/888.webp",
                sizes: ["XS", "S", "M", "L", "XL"]
            },
            {
                id: 10,
                name: "Black Dress",
                price: 15,
                category: "evening",
                image: "images/10.webp",
                sizes: ["XS", "S", "M", "L", "XL"]
            },
            {
                id: 11,
                name: "Winter Dress",
                price: 15,
                category: "casual",
                image: "images/15.webp",
                sizes: ["XS", "S", "M", "L", "XL"]
            },
            {
                id: 12,
                name: " Elegance",
                price: 15,
                category: "evening",
                image: "images/12.webp",
                sizes: ["XS", "S", "M", "L", "XL"]
            },
            {
                id: 13,
                name: "Blue Dress",
                price: 15,
                category: "summer",
                image: "images/13.webp",
                sizes: ["XS", "S", "M", "L", "XL"]
            },
            {
                id: 14,
                name: "Brown Mini Dress",
                price: 15,
                category: "casual",
                image: "images/14.webp",
                sizes: ["XS", "S", "M", "L", "XL"]
            },
            {
                id: 15,
                name: "Green summer Dress",
                price: 15,
                category: "summer",
                image: "images/19.webp",
                sizes: ["XS", "S", "M", "L", "XL"]
            }
        ];

        const productContainer = document.getElementById("product-list");

        const addToCart = (product, selectedSize) => {
            const cart = JSON.parse(localStorage.getItem("cart")) || [];
            cart.push({ ...product, selectedSize });
            localStorage.setItem("cart", JSON.stringify(cart));
            alert(`${product.name} of size ${selectedSize} added to cart!`);
        };

        products.forEach(product => {
            const productElement = document.createElement("div");
            productElement.classList.add("product");

            // Krijimi i dropdown për masat
            const sizeOptions = product.sizes.length > 0
                ? product.sizes.map(size => `<option value="${size}">${size}</option>`).join("")
                : "<option value=''>No sizes available</option>";

            productElement.innerHTML = `
                <h2>${product.name}</h2>
                <img src="${product.image}" alt="${product.name}" style="width: 200px; height: auto;">
                <p>Price: $${product.price}</p>
                <p>
                    <label for="size-select-${product.id}">Select Size:</label>
                    <select id="size-select-${product.id}" class="size-select">
                        ${sizeOptions}
                    </select>
                </p>
                <button data-id="${product.id}">Add to Cart</button>
            `;

            productContainer.appendChild(productElement);

            // Event për shtimin në shportë
            const addToCartButton = productElement.querySelector("button");
            addToCartButton.addEventListener("click", () => {
                const sizeSelect = productElement.querySelector(".size-select");
                const selectedSize = sizeSelect.value;

                if (!selectedSize) {
                    alert("Please select a size before adding to cart.");
                    return;
                }

                addToCart(product, selectedSize);
            });
        });

        /* Filterimi i produkteve sipas kategorisë */
        const categoryFilter = document.getElementById("category-filter");
        categoryFilter.addEventListener("change", (event) => {
            const selectedCategory = event.target.value;
            productContainer.innerHTML = "";

            const filteredProducts = selectedCategory === "all"
                ? products
                : products.filter(product => product.category === selectedCategory);

            filteredProducts.forEach(product => {
                const productElement = document.createElement("div");
                productElement.classList.add("product");

                const sizeOptions = product.sizes.length > 0
                    ? product.sizes.map(size => `<option value="${size}">${size}</option>`).join("")
                    : "<option value=''>No sizes available</option>";

                productElement.innerHTML = `
                    <h2>${product.name}</h2>
                    <img src="${product.image}" alt="${product.name}" style="width: 200px; height: auto;">
                    <p>Price: $${product.price}</p>
                    <p>
                        <label for="size-select-${product.id}">Select Size:</label>
                        <select id="size-select-${product.id}" class="size-select">
                            ${sizeOptions}
                        </select>
                    </p>
                    <button data-id="${product.id}">Add to Cart</button>
                `;

                productContainer.appendChild(productElement);

                const addToCartButton = productElement.querySelector("button");
                addToCartButton.addEventListener("click", () => {
                    const sizeSelect = productElement.querySelector(".size-select");
                    const selectedSize = sizeSelect.value;

                    if (!selectedSize) {
                        alert("Please select a size before adding to cart.");
                        return;
                    }

                    addToCart(product, selectedSize);
                });
            });
        });
    }

    if (window.location.pathname.includes("shopping-cart.html")) {
        const cartItemsContainer = document.getElementById("cart-items");

        const renderCart = () => {
            const cart = JSON.parse(localStorage.getItem("cart")) || [];

            if (cart.length === 0) {
                cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
                return;
            }

            cartItemsContainer.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <h3>${item.name}</h3>
                    <img src="${item.image}" alt="${item.name}" style="width: 100px; height: auto;">
                    <p>Price: $${item.price}</p>
                    <p>Size: ${item.selectedSize || "No size selected"}</p>
                    <button data-id="${item.id}" class="remove-btn">Remove</button>
                </div>
            `).join("");

            document.querySelectorAll(".remove-btn").forEach(button => {
                button.addEventListener("click", (e) => {
                    const productId = parseInt(e.target.dataset.id);
                    removeFromCart(productId);
                });
            });
        };

        const removeFromCart = (productId) => {
            const cart = JSON.parse(localStorage.getItem("cart")) || [];
            const updatedCart = cart.filter(item => item.id !== productId);
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            renderCart();
        };

        renderCart();
    }
    /* Slider për imazhet */
    const slides = document.querySelector('.slides');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;

    function updateSlider() {
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function autoSlide() {
        currentIndex = (currentIndex + 1) % dots.length;
        updateSlider();
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
        });
    });

    setInterval(autoSlide, 2000);

});
