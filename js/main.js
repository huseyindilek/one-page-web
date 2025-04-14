// Product Slider
const productSlider = document.querySelector('.product-slider');
if (productSlider) {
    // Sample product data
    const products = [
        {
            image: 'images/product1.jpg',
            title: 'Summer Dress',
            price: '$49.99',
            rating: 4.5
        },
        {
            image: 'images/product2.jpg',
            title: 'Casual Shirt',
            price: '$39.99',
            rating: 4.0
        },
        {
            image: 'images/product3.jpg',
            title: 'Sneakers',
            price: '$59.99',
            rating: 4.8
        }
    ];

    // Create product cards
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}">
                <div class="product-overlay">
                    <button class="quick-view">Quick View</button>
                </div>
            </div>
            <div class="product-info">
                <h3>${product.title}</h3>
                <p class="price">${product.price}</p>
                <div class="rating">
                    ${createStars(product.rating)}
                </div>
            </div>
        `;
        productSlider.appendChild(card);
    });
}

// Create star rating
function createStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }

    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }

    return stars;
}

// Quick View Modal
const quickViewButtons = document.querySelectorAll('.quick-view');
quickViewButtons.forEach(button => {
    button.addEventListener('click', function() {
        const productCard = this.closest('.product-card');
        const productImage = productCard.querySelector('img').src;
        const productTitle = productCard.querySelector('h3').textContent;
        const productPrice = productCard.querySelector('.price').textContent;

        // Create modal
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <div class="modal-product">
                    <img src="${productImage}" alt="${productTitle}">
                    <div class="modal-product-info">
                        <h2>${productTitle}</h2>
                        <p class="price">${productPrice}</p>
                        <div class="product-options">
                            <div class="size-selector">
                                <label>Size:</label>
                                <select>
                                    <option>S</option>
                                    <option>M</option>
                                    <option>L</option>
                                    <option>XL</option>
                                </select>
                            </div>
                            <div class="quantity-selector">
                                <label>Quantity:</label>
                                <input type="number" min="1" value="1">
                            </div>
                        </div>
                        <button class="add-to-cart">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Close modal
        const closeModal = modal.querySelector('.close-modal');
        closeModal.addEventListener('click', () => {
            modal.remove();
        });

        // Add to cart functionality
        const addToCart = modal.querySelector('.add-to-cart');
        addToCart.addEventListener('click', () => {
            const size = modal.querySelector('select').value;
            const quantity = modal.querySelector('input[type="number"]').value;
            
            // Here you would typically add the product to a shopping cart
            console.log('Added to cart:', {
                title: productTitle,
                price: productPrice,
                size,
                quantity
            });

            // Show success message
            alert('Product added to cart!');
            modal.remove();
        });
    });
});

// Newsletter Form
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        
        // Basic email validation
        if (!email || !email.includes('@')) {
            alert('Please enter a valid email address');
            return;
        }

        // Here you would typically send the email to your server
        console.log('Newsletter subscription:', email);
        
        // Show success message
        alert('Thank you for subscribing to our newsletter!');
        this.reset();
    });
}

// Search functionality
const searchInput = document.querySelector('.search-bar input');
if (searchInput) {
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        // Here you would typically filter products based on the search term
        console.log('Searching for:', searchTerm);
    });
}

// Mobile menu toggle
const headerIcons = document.querySelector('.header-icons');
if (headerIcons) {
    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.className = 'mobile-menu-button';
    mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
    headerIcons.appendChild(mobileMenuButton);

    mobileMenuButton.addEventListener('click', () => {
        const mainNav = document.querySelector('.main-nav');
        mainNav.classList.toggle('active');
    });
} 