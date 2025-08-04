window.addEventListener('DOMContentLoaded', function () {
  console.log('nav.js loaded')
  const stickyElm = document.querySelector('.updated-nav .pre-content');
  if (!stickyElm) return;
  console.log('stickyElm', stickyElm)

  const observer = new IntersectionObserver(
    ([e]) => e.target.classList.toggle('stuck-to-top', e.intersectionRatio < 1),
    { threshold: [1] }
  );

  observer.observe(stickyElm);
});