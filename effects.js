(() => {
  if (!("IntersectionObserver" in window)) return;
  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const items = document.querySelectorAll(
    ".hero-copy, .hero-photo, .section-heading, .card, .showcase-photo, .showcase-copy, .steps article, .visit > div, .workshop-photo, .map-heading, .map-panel"
  );
  let observer;
  function update() {
    if (observer) observer.disconnect();
    items.forEach(item => item.classList.remove("scroll-soft", "is-dimmed"));
    if (motion.matches) return;
    observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        entry.target.classList.toggle("is-dimmed", !entry.isIntersecting);
      });
    }, { rootMargin: "-24px 0px -24px 0px", threshold: 0.06 });
    items.forEach(item => {
      item.classList.add("scroll-soft");
      observer.observe(item);
    });
  }
  update();
  motion.addEventListener("change", update);
})();
