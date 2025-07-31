//Project Section
const container = document.querySelector('.card-container');
const cards = document.querySelectorAll('.project-card');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
const dotsContainer = document.querySelector('.carousel-dots');

let currentIndex = 1;

// Buat dot sesuai jumlah kartu
cards.forEach((_, i) => {
  const dot = document.createElement('div');
  dot.classList.add('carousel-dot');
  dot.addEventListener('click', () => {
    currentIndex = i;
    updateActiveCard();
  });
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.carousel-dot');

function updateActiveCard() {
  cards.forEach((card, i) => {
    card.classList.toggle('active', i === currentIndex);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentIndex);
  });

  const offset = (cards[0].offsetWidth + 20) * (currentIndex - 1);
  container.style.transform = `translateX(-${offset}px)`;
}

prevBtn.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) currentIndex = cards.length - 1;
  updateActiveCard();
});

nextBtn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= cards.length) currentIndex = 0;
  updateActiveCard();
});

updateActiveCard();

// Tambahan: Auto Slide hanya untuk mobile (<768px)
function isMobile() {
  return window.innerWidth < 768;
}

let autoSlideInterval;

function startAutoSlide() {
  if (isMobile()) {
    autoSlideInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % cards.length;
      updateActiveCard();
    }, 2000);
  }
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

startAutoSlide();

window.addEventListener('resize', () => {
  stopAutoSlide();
  startAutoSlide();
});
