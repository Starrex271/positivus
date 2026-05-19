document.querySelectorAll(".toggleBtn").forEach((btn) => {
    btn.addEventListener("click", () => {
        const card = btn.closest(".processcard");
        const icon = btn.querySelector("i");
        const isOpen = card.classList.toggle("open");

        icon.classList.toggle("fa-circle-plus", !isOpen);
        icon.classList.toggle("fa-circle-minus", isOpen);
    });
});