
  const container = document.querySelector('.card-container');
  const cards = document.querySelectorAll('.project-card');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  const dotsContainer = document.querySelector('.carousel-dots');

  let currentIndex = 0;
  let cardsPerSlide = 1;
  let totalSlides = 1;
  let autoSlideInterval;

  function calculateLayout() {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 480) {
      cardsPerSlide = 6;
    } else if (screenWidth <= 1440) {
      cardsPerSlide = 4;
    } else {
      cardsPerSlide = 4; // default fallback
    }

    totalSlides = Math.ceil(cards.length / cardsPerSlide);
    currentIndex = 0;
    createDots();
    updateCarousel();
  }

  function createDots() {
    dotsContainer.innerHTML = '';
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('span');
      dot.classList.add('carousel-dot');
      if (i === currentIndex) dot.classList.add('active');
      dot.addEventListener('click', () => {
        currentIndex = i;
        updateCarousel();
      });
      dotsContainer.appendChild(dot);
    }
  }

  function updateCarousel() {
    const offset = currentIndex * (container.offsetWidth / cardsPerSlide);
    container.style.transform = `translateX(-${offset}px)`;

    // Atur dot aktif
    const dots = document.querySelectorAll('.carousel-dot');
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
  }

  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);

  // Auto-slide only on screen <= 480px
  function handleAutoSlide() {
    clearInterval(autoSlideInterval);
    if (window.innerWidth <= 480) {
      autoSlideInterval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
  }

  window.addEventListener('resize', () => {
    calculateLayout();
    handleAutoSlide();
  });

  // Init
  calculateLayout();
  handleAutoSlide();

