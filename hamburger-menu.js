// ================================================
// POSITIVUS — Hamburger Menu
// ================================================

(function () {
    // Inject the hamburger button into the nav
    const nav = document.querySelector("nav");
    const navLinks = document.querySelector(".nav-links");

    if (!nav || !navLinks) return;

    // Create hamburger button
    const hamburger = document.createElement("button");
    hamburger.classList.add("hamburger");
    hamburger.setAttribute("aria-label", "Toggle navigation menu");
    hamburger.setAttribute("aria-expanded", "false");
    hamburger.innerHTML = `
    <span></span>
    <span></span>
    <span></span>
  `;

    // Insert hamburger before the nav-links ul
    nav.insertBefore(hamburger, navLinks);

    // Toggle menu open/close
    hamburger.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");
        hamburger.classList.toggle("open", isOpen);
        hamburger.setAttribute("aria-expanded", isOpen);
    });

    // Close menu when a nav link is clicked
    navLinks.querySelectorAll("a, button").forEach((el) => {
        el.addEventListener("click", () => {
            navLinks.classList.remove("open");
            hamburger.classList.remove("open");
            hamburger.setAttribute("aria-expanded", "false");
        });
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
        if (!nav.contains(e.target)) {
            navLinks.classList.remove("open");
            hamburger.classList.remove("open");
            hamburger.setAttribute("aria-expanded", "false");
        }
    });

    // Close menu on window resize back to desktop
    window.addEventListener("resize", () => {
        if (window.innerWidth > 1024) {
            navLinks.classList.remove("open");
            hamburger.classList.remove("open");
            hamburger.setAttribute("aria-expanded", "false");
        }
    });
})();