document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelector('.nav-links');
  const menuToggle = document.createElement('div');
  menuToggle.className = 'menu-toggle';
  menuToggle.innerHTML = '&#9776;';
  document.querySelector('.navbar').appendChild(menuToggle);

  menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('show');
  });
});
