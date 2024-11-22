// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800, // Duration of animations in milliseconds
    once: false, // Animation should happen every time you scroll down
});

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800, // Duration of animations in milliseconds
    once: false, // Animation should happen every time you scroll down
});

// Add click event listener to all project images
document.querySelectorAll('.card-img-top').forEach(image => {
    image.addEventListener('click', function () {
      const imageSrc = this.getAttribute('src'); // Get image source
      const modalImage = document.getElementById('modalImage');
      modalImage.src = imageSrc; // Set modal image source
      const modal = new bootstrap.Modal(document.getElementById('imageModal'));
      modal.show(); // Show modal
    });
  });
