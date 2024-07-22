const productImages = document.querySelectorAll('.product-images img');
const addToCartBtn = document.getElementById('addToCartBtn');

productImages.forEach((img, index) => {
  img.addEventListener('click', function() {
    // Remove active class from all images
    productImages.forEach(img => img.classList.remove('active'));
    
    // Add active class to clicked image
    this.classList.add('active');
  });
});

addToCartBtn.addEventListener('click', function() {
  // Simulate adding to cart functionality (replace with actual logic)
  alert('Product added to cart!');
});
