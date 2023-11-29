var mybr = document.createElement('br');

document.addEventListener('DOMContentLoaded', function () {
    const apiUrl = 'https://fakestoreapi.com/products';
    const productCardsContainer = document.querySelector('.wrapper');

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayProductCards(data);
        })
        .catch(error => console.error('Error fetching data:', error));

    function displayProductCards(products) {
        products.forEach(product => {
            const { image, name, description, price } = product; // Destructure product object

            const cardHTML = `
            <div class="product-img">
                <img src="${product.image}" alt="${product.tile}" height="420" width="327">
            </div>
            <div class="product-info">
                <div class="product-text">
                    <h1>${product.title}</h1>
                    <p>Description: ${product.description}</p>
                </div>
                <div class="product-price-btn">
                    <p><span>${product.price}</span>$</p>
                    <button type="button">buy now</button>
                </div>
            </div>
        
        `;
        
            productCardsContainer.innerHTML += cardHTML;
                
        });
        someElement.appendChild(mybr);
    }
});