// external js
let currentIndex = 0;
    const slides = document.querySelectorAll('.carousel img');
    const totalSlides = slides.length;
    const carousel = document.querySelector('.carousel');

    function updateCarousel() {
        carousel.style.transform = `translateX(${-currentIndex * 100}%)`;
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }
    setInterval(nextSlide, 3000);