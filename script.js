const roles = ["Software Engineering Student", "C++ Developer", "Problem Solver"];
const typingText = document.getElementById("typing-text");
let roleIndex = 0; let charIndex = 0; let isDeleting = false;
function typeEffect() {
    const currentRole = roles[roleIndex];
    if (!isDeleting) { typingText.textContent = currentRole.substring(0, charIndex + 1); charIndex++; if (charIndex === currentRole.length) { isDeleting = true; setTimeout(typeEffect, 1500); return; } }
    else { typingText.textContent = currentRole.substring(0, charIndex - 1); charIndex--; if (charIndex === 0) { isDeleting = false; roleIndex = (roleIndex + 1) % roles.length; } }
    setTimeout(typeEffect, isDeleting ? 50 : 100);
}
typeEffect();
const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("show"); } }); }, { threshold: 0.15 });
document.querySelectorAll("section, .project-card, .skill-card").forEach((element) => { element.classList.add("hidden"); observer.observe(element); });
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");
window.addEventListener("scroll", () => { let current = ""; sections.forEach((section) => { const sectionTop = section.offsetTop - 150; if (window.scrollY >= sectionTop) { current = section.getAttribute("id"); } }); navLinks.forEach((link) => { link.classList.remove("active"); if (link.getAttribute("href") === "#" + current) { link.classList.add("active"); } }); });