  
  
  
  
  //Navbar
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });



  const navbar = document.querySelector('.navbar');
  const style = document.createElement('style');
  document.head.appendChild(style);
  function triggerSweep() {
    navbar.classList.remove('animate-sweep');

    // Reflow agar animasi bisa diputar ulang
    void navbar.offsetWidth;

    navbar.classList.add('animate-sweep');
  }

  // kecepatan animasi
  style.textContent += `
    .navbar.animate-sweep::before {
      animation: sweepLight 3s ease-in-out forwards;
    }
  `;

  triggerSweep();

  // delay looping
  setInterval(triggerSweep, 10000);