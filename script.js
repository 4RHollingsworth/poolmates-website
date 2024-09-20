// Slideshow JS
let currentIndex = 0;
let slideInterval;
const pauseDuration = 5000; // 5 seconds pause
const transitionDuration = 1500; // Duration of slide transition
const slideIntervalDuration = pauseDuration + transitionDuration; // Total time per slide

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');

    function showSlide(index) {
        // Remove the 'first' class from all slides
        slides.forEach((slide, i) => {
            slide.classList.remove('first');
            slide.classList.remove('slide-in', 'slide-out');
            slide.style.opacity = 0; // Reset opacity
            slide.style.transform = 'translateX(100%)'; // Reset position
        });

        // Show the current slide
        slides[index].style.opacity = 1;
        slides[index].style.transform = 'translateX(0)';
        slides[index].classList.add('slide-in');

        // After the pause, start sliding out
        setTimeout(() => {
            slides[index].classList.remove('slide-in');
            slides[index].classList.add('slide-out');
            slides[index].style.transform = 'translateX(-100%)';

            // Move to the next slide
            currentIndex = (currentIndex + 1) % slides.length;
            // Prepare the next slide
            slides[currentIndex].style.opacity = 1;
            slides[currentIndex].style.transform = 'translateX(0)';
            slides[currentIndex].classList.add('slide-in');
        }, pauseDuration); // Pause duration before sliding out
    }

    function startSlideshow() {
        slideInterval = setInterval(() => showSlide(currentIndex), slideIntervalDuration);
    }

    function stopSlideshow() {
        clearInterval(slideInterval);
    }

    function plusSlides(n) {
        stopSlideshow(); // Stop automatic slideshow
        currentIndex = (currentIndex + n + slides.length) % slides.length; // Adjust index
        showSlide(currentIndex);
        setTimeout(startSlideshow, transitionDuration); // Restart automatic slideshow after a short delay
    }

    // Initialize the first slide
    slides[currentIndex].classList.add('first');
    showSlide(currentIndex);

    // Start the slideshow
    startSlideshow();
});

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.main-nav ul');

    // Toggle 'show' class when menu toggle button is clicked
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });
});
