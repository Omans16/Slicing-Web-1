
  document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".lokasi-slide");
    const dots = document.querySelectorAll(".lokasi-dot");
    const prevBtn = document.querySelector(".lokasi-carousel-prev");
    const nextBtn = document.querySelector(".lokasi-carousel-next");

    let currentSlide = 0;
    const totalSlides = slides.length;

    function updateSlides(index) {
      // Reset semua slide dan dot
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
      });

      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
      });

      currentSlide = index;
    }

    // Tombol next
    nextBtn.addEventListener("click", () => {
      let nextIndex = (currentSlide + 1) % totalSlides;
      updateSlides(nextIndex);
    });

    // Tombol prev
    prevBtn.addEventListener("click", () => {
      let prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
      updateSlides(prevIndex);
    });

    // Dot klik
    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        updateSlides(i);
      });
    });
  });

