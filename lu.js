// year
document.getElementById("year").textContent = new Date().getFullYear();

// mobile menu
var burger = document.getElementById("burger");
var menu = document.getElementById("menu");
burger.addEventListener("click", function () {
  menu.classList.toggle("open");
});
menu.addEventListener("click", function (e) {
  if (e.target.tagName === "A") menu.classList.remove("open");
});

// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener("click", function (e) {
    var target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// animate skill bars when visible
var skills = document.querySelectorAll(".skill");
var io = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      var el = entry.target;
      el.querySelector(".bar i").style.width = el.dataset.level + "%";
      io.unobserve(el);
    }
  });
}, { threshold: 0.4 });
skills.forEach(function (s) { io.observe(s); });

// contact form
document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  var name = document.getElementById("name").value.trim();
  document.getElementById("status").textContent =
    "Thanks " + name + "! Your message has been recorded.";
  e.target.reset();
});
