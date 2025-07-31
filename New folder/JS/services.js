document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelectorAll(".testimonial-card");
    const grid = document.getElementById("testimonialGrid");
    const pageNumbersContainer = document.getElementById("pageNumbers");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    const itemsPerPage = 4;
    let currentPage = 1;

    function renderPage(page) {
      const start = (page - 1) * itemsPerPage;
      const end = start + itemsPerPage;

      testimonials.forEach((card, index) => {
        card.style.display = index >= start && index < end ? "block" : "none";
      });
    }

    function renderPageNumbers() {
      pageNumbersContainer.innerHTML = "";
      const totalPages = Math.ceil(testimonials.length / itemsPerPage);

      const min = Math.max(1, currentPage - 1);
      const max = Math.min(totalPages, currentPage + 1);

      for (let i = min; i <= max; i++) {
        const btn = document.createElement("button");
        btn.textContent = i;
        if (i === currentPage) btn.classList.add("active");
        btn.addEventListener("click", () => {
          currentPage = i;
          renderPage(currentPage);
          renderPageNumbers();
        });
        pageNumbersContainer.appendChild(btn);
      }
    }

    prevBtn.addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        renderPage(currentPage);
        renderPageNumbers();
      }
    });

    nextBtn.addEventListener("click", () => {
      const totalPages = Math.ceil(testimonials.length / itemsPerPage);
      if (currentPage < totalPages) {
        currentPage++;
        renderPage(currentPage);
        renderPageNumbers();
      }
    });

    renderPage(currentPage);
    renderPageNumbers();
  });