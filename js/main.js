const btn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav-links");

if (btn && nav) {
  btn.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".scroll-fade");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.15 },
  );

  items.forEach((item) => observer.observe(item));
});
