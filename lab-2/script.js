document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');

  menuBtn.addEventListener('click', () => {
    const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
    
    // Toggle menu visibility
    mobileMenu.classList.toggle('hidden');
    menuBtn.setAttribute('aria-expanded', !isExpanded);

    // Toggle menu icon between bars and close (X)
    if (mobileMenu.classList.contains('hidden')) {
      menuIcon.classList.remove('fa-xmark');
      menuIcon.classList.add('fa-bars');
    } else {
      menuIcon.classList.remove('fa-bars');
      menuIcon.classList.add('fa-xmark');
    }
  });
});