const products = [
    {
        name: "Computador Core i5",
        price: "R$ 799,00",
        image: "https://via.placeholder.com/300x200",
        link: "https://wa.me/5511930870716?text=Tenho%20interesse%20no%20Computador%20Core%20i5"
    },
    {
        name: "HD 500GB Usado",
        price: "R$ 60,00",
        image: "https://via.placeholder.com/300x200",
        link: "https://wa.me/5511930870716?text=Tenho%20interesse%20no%20HD%20500GB"
    },
    {
        name: "Fonte ATX 500W",
        price: "R$ 70,00",
        image: "https://via.placeholder.com/300x200",
        link: "https://wa.me/5511930870716?text=Tenho%20interesse%20na%20Fonte%20500W"
    }
];

const container = document.getElementById("product-list");

products.forEach(p => {
    container.innerHTML += `
        <div class="card">
            <img src="${p.image}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p class="price">${p.price}</p>
            <a class="btn" target="_blank" href="${p.link}">Comprar pelo WhatsApp</a>
        </div>
    `;
});

