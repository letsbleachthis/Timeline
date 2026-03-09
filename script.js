document.addEventListener('DOMContentLoaded', () => {
  const animatedEls = document.querySelectorAll('[data-animate]');

  if (!animatedEls.length) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  animatedEls.forEach(el => observer.observe(el));
});
