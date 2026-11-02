
/* ===============================
   PORTFOLIO SCRIPT
================================ */

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        const href = this.getAttribute("href");

        // Ignore empty hash links
        if (!href || href === "#") return;

        const target = document.querySelector(href);

        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

// Navbar shadow on scroll
const header = document.querySelector("header");

if (header) {
    window.addEventListener("scroll", () => {
        header.style.boxShadow = window.scrollY > 50
            ? "0 4px 20px rgba(0,0,0,0.15)"
            : "0 2px 15px rgba(0,0,0,0.08)";
    });
}

// Reveal animation — do not hide sections initially
const sections = document.querySelectorAll(
    ".about, .skills, .projects, .contact"
);

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.05
    });

    sections.forEach(section => {
        observer.observe(section);
    });
} else {
    // Keep all content visible in unsupported browsers
    sections.forEach(section => {
        section.classList.add("visible");
    });
}

// Current year in footer
const footer = document.querySelector("footer p");

if (footer) {
    footer.textContent =
        `© ${new Date().getFullYear()} Payal Nikam | Data Analyst Portfolio`;
}

console.log("Portfolio Loaded Successfully");
