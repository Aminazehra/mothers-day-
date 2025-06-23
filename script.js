document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.hero-slide');

    function showNextSlide() {
        // Hide the current slide
        slides[currentIndex].classList.remove('visible');
        
        // Move to the next slide
        currentIndex = (currentIndex + 1) % slides.length;
        
        // Show the next slide
        slides[currentIndex].classList.add('visible');
    }

    // Initially show the first slide
    slides[currentIndex].classList.add('visible');

    // Set interval to change slides every 4 seconds
    setInterval(showNextSlide, 4000);
});


