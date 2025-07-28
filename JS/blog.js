  document.addEventListener("DOMContentLoaded", function () {


  const filterButtons = document.querySelectorAll(".filter-item");
  const cards = document.querySelectorAll(".filter-item-card");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Hapus semua active
      filterButtons.forEach(btn => btn.classList.remove("active"));
      // Tambahkan active ke tombol saat ini
      button.classList.add("active");

      const filterValue = button.getAttribute("data-filter");

      cards.forEach(card => {
        const category = card.getAttribute("data-category");
        if (filterValue === "all" || category === filterValue) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });




    const yearGroups = document.querySelectorAll(".year-group");

    yearGroups.forEach(group => {
      const toggleBtn = group.querySelector(".year-toggle");
      const monthList = group.querySelector(".month-list");
      const arrow = toggleBtn.querySelector(".arrow");

      toggleBtn.addEventListener("click", function () {
        const isActive = group.classList.contains("active");

        // Tutup semua group
        yearGroups.forEach(g => {
          g.classList.remove("active");
          g.querySelector(".month-list").style.display = "none";
          g.querySelector(".arrow").innerHTML = "&#9656;"; // panah ke kanan
        });

        if (!isActive) {
          // Buka group yang diklik
          group.classList.add("active");
          monthList.style.display = "block";
          arrow.innerHTML = "&#9662;"; // panah ke bawah
        }
      });

      // Default tampilkan hanya yang active
      if (group.classList.contains("active")) {
        monthList.style.display = "block";
        arrow.innerHTML = "&#9662;";
      } else {
        monthList.style.display = "none";
        arrow.innerHTML = "&#9656;";
      }
    });
  });
