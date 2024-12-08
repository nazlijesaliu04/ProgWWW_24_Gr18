document.addEventListener("DOMContentLoaded", () => {
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