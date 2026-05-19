(function () {
    const track = document.querySelector(".testimonial-track");
    const prevBtn = document.querySelector(".testimonial-prev");
    const nextBtn = document.querySelector(".testimonial-next");
    const dotsContainer = document.querySelector(".testimonial-dots");

    if (!track || !prevBtn || !nextBtn) return;

    const cards = Array.from(track.querySelectorAll(".testimonial-block"));
    let current = 0;

    // Build dots
    cards.forEach((_, i) => {
        const dot = document.createElement("button");
        dot.classList.add("dot");
        if (i === 0) dot.classList.add("active");
        dot.addEventListener("click", () => goTo(i));
        dotsContainer.appendChild(dot);
    });

    const dots = () => Array.from(dotsContainer.querySelectorAll(".dot"));

    function goTo(index) {
        current = Math.max(0, Math.min(index, cards.length - 1));
        const card = cards[current];
        track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
        dots().forEach((d, i) => d.classList.toggle("active", i === current));
    }

    nextBtn.addEventListener("click", () => goTo(current + 1));
    prevBtn.addEventListener("click", () => goTo(current - 1));
})();