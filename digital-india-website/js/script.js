
let cartCount = 0;


const addToCartButtons = document.querySelectorAll('.add-to-cart');


addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        cartCount++;
        
        
        const cartCountSpan = document.querySelector('.cart-count');
        cartCountSpan.textContent = `(${cartCount})`;
        
        
        const productCard = this.closest('.product-card');
        const productTitle = productCard.querySelector('.product-title').textContent;
        const productPrice = productCard.querySelector('.current-price').textContent;
        
        
        this.textContent = 'Added to Cart!';
        this.style.backgroundColor = '#28a745';
        this.disabled = true;
        
    });
});
