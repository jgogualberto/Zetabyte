const products = [
    {
        name: "Processador Intel Core i5 11ª geração",
        price: "R$ 550,00",
        image: "https://via.placeholder.com/300x200",
        link: "https://wa.me/5511930870716?text=Tenho%20interesse%20no%20Processador i5"
    },
    {
        name: "HD 1 TB Usado",
        price: "R$ 150,00",
        image: "https://via.placeholder.com/300x200",
        link: "https://wa.me/5511930870716?text=Tenho%20interesse%20no%20HD"
    },
    {
        name: "Mem RAM DDR4 2666 ghz 8GB",
        price: "R$ 250,00",
        image: "https://via.placeholder.com/300x200",
        link: "https://wa.me/5511930870716?text=Tenho%20interesse%20na%Memoria RAM"
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

