document.addEventListener("DOMContentLoaded", () => {
    // Kontrollo nëse jemi në products.html
    if (window.location.pathname.includes("products.html")) {
        const products = [
            { 
                id: 1, 
                name: "Elegant Evening Dress", 
                price: 120, 
                category: "evening", 
                image: "111.jpeg", 
                sizes: ["S", "M", "L", "XL"]
            },
            { 
                id: 2, 
                name: "Casual Denim Dress", 
                price: 80, 
                category: "casual", 
                image: "123.jpg",
                sizes: ["M", "L", "XL"]
            },
            { 
                id: 3, 
                name: "Floral Summer Dress", 
                price: 100, 
                category: "summer", 
                image: "222.jpeg", 
                sizes: ["S", "M", "L"]
            },
            { 
                id: 4, 
                name: "Classic Evening Dress", 
                price: 150, 
                category: "evening", 
                image: "333.jpeg",
                sizes: []
            },
            { 
                id: 5, 
                name: "Relaxed Casual Dress", 
                price: 70, 
                category: "summer", 
                image: "444.webp", 
                sizes: ["S", "M", "L", "XL"]
            },
            {
                id: 6, 
                name: "Ruffle Printed Mesh Wrap Maxi Dress", 
                price: 30, 
                category: "evening", 
                image: "555.webp", 
                sizes: ["XS", "S", "L"]
            },
            { 
                id: 7, 
                name: "Plus Denim Zip Up Shift Dress", 
                price: 20, 
                category: "casual", 
                image: "666.webp", 
                sizes: ["S", "M"]
            },
            {
                id: 8, 
                name: "The Midaxi Shirt Dress", 
                price: 25, 
                category: "casual", 
                image: "777.webp", 
                sizes: ["S"]
            },
            {
                id: 9, 
                name: "Rose Print Satin Slip Mini Dress", 
                price: 15, 
                category: "summer", 
                image: "888.webp", 
                sizes: ["M"]
            },
            {
                id: 10, 
                name: "Rose Print Satin Slip Mini Dress", 
                price: 15, 
                category: "summer", 
                image: "10.webp", 
                sizes: ["M"]
            },
            {
                id: 11, 
                name: "Rose Print Satin Slip Mini Dress", 
                price: 15, 
                category: "summer", 
                image: "11.webp", 
                sizes: ["M"]
            },
            {
                id: 12, 
                name: "Rose Print Satin Slip Mini Dress", 
                price: 15, 
                category: "summer", 
                image: "12.webp", 
                sizes: ["M"]
            },
            {
                id: 13, 
                name: "Rose Print Satin Slip Mini Dress", 
                price: 15, 
                category: "summer", 
                image: "13.webp", 
                sizes: ["M"]
            },
            {
                id: 14, 
                name: "Rose Print Satin Slip Mini Dress", 
                price: 15, 
                category: "summer", 
                image: "14.webp", 
                sizes: ["M"]
            },
            {
                id: 15, 
                name: "Rose Print Satin Slip Mini Dress", 
                price: 15, 
                category: "summer", 
                image: "15.webp", 
                sizes: ["M"]
            }
        ];

        // Funksioni për të shfaqur produktet në faqen web
        const productContainer = document.getElementById("product-list");

        products.forEach(product => {
            const productElement = document.createElement("div");
            productElement.classList.add("product");

            productElement.innerHTML = `
                <h2>${product.name}</h2>
                <img src="${product.image}" alt="${product.name}" style="width: 200px; height: auto;">
                <p>Price: $${product.price}</p>
                <p>Sizes: ${product.sizes.length > 0 ? product.sizes.join(", ") : "No sizes available"}</p>
            `;

            productContainer.appendChild(productElement);
        });

        // Filterimi i produkteve sipas kategorisë
        const categoryFilter = document.getElementById("category-filter");
        categoryFilter.addEventListener("change", (event) => {
            const selectedCategory = event.target.value;
            productContainer.innerHTML = ""; // Fshijmë produktet ekzistuese

            const filteredProducts = selectedCategory === "all" 
                ? products 
                : products.filter(product => product.category === selectedCategory);

            filteredProducts.forEach(product => {
                const productElement = document.createElement("div");
                productElement.classList.add("product");

                productElement.innerHTML = `
                    <h2>${product.name}</h2>
                    <img src="${product.image}" alt="${product.name}" style="width: 200px; height: auto;">
                    <p>Price: $${product.price}</p>
                    <p>Sizes: ${product.sizes.length > 0 ? product.sizes.join(", ") : "No sizes available"}</p>
                `;

                productContainer.appendChild(productElement);
            });
        });
    }

    // Slider për imazhet
    const slides = document.querySelector('.slides');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;

    function updateSlider() {
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;  // Përdorimi i saktë i translateX
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

    setInterval(autoSlide, 3000);  // Slider automatik çdo 3 sekonda
});

