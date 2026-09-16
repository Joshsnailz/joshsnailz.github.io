const printButton = document.querySelector('#print-cv');
if (printButton) {
  printButton.hidden = false;
  printButton.addEventListener('click', () => window.print());
}
const navLinks = [...document.querySelectorAll('nav a[href^="#"]')];
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    const visible = entries.filter(entry => entry.isIntersecting);
    if (!visible.length) return;
    const id = visible[0].target.id;
    navLinks.forEach(link => {
      if (link.hash === `#${id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-10% 0px -65% 0px', threshold: 0 });
  navLinks.forEach(link => {
    const section = document.querySelector(link.hash);
    if (section) observer.observe(section);
  });
}
