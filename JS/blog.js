document.querySelectorAll('.year-toggle').forEach(btn => {
  btn.addEventListener('click', function() {
    const group = this.parentElement;
    const isActive = group.classList.contains('active');

    // Tutup semua dulu
    document.querySelectorAll('.year-group').forEach(g => g.classList.remove('active'));

    // Jika sebelumnya tidak aktif, buka yang diklik
    if (!isActive) {
      group.classList.add('active');
    }
  });
});

