document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-section .filter-item");
  const projectCards = document.querySelectorAll(".project-card");
  const inputCari = document.querySelector(".input-cari");
  const selectTahun = document.querySelector(".select-tahun");
  const btnCari = document.querySelector(".btn-cari");

  let activeKategori = "all";

  // Fungsi untuk menandai tombol aktif
  function setActiveButton(activeBtn) {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    activeBtn.classList.add("active");
  }

  // Fungsi utama untuk filter
  function filterProjects() {
    const keyword = inputCari.value.toLowerCase().trim();
    const tahun = selectTahun.value;

    projectCards.forEach(card => {
      const kategori = card.getAttribute("data-kategori").split(" ");
      const nama = card.getAttribute("data-nama").toLowerCase();
      const cardTahun = card.getAttribute("data-tahun");

      const cocokKategori = activeKategori === "all" || kategori.includes(activeKategori);
      const cocokNama = nama.includes(keyword);
      const cocokTahun = tahun === "" || cardTahun === tahun;

      if (cocokKategori && cocokNama && cocokTahun) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

  // Event klik pada tombol filter kategori
  filterButtons.forEach(button => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      activeKategori = button.getAttribute("data-filter") || "all";
      setActiveButton(button);
      filterProjects();
    });
  });

  // Event input pencarian
  inputCari.addEventListener("input", filterProjects);
  selectTahun.addEventListener("change", filterProjects);
  btnCari.addEventListener("click", filterProjects);
});
