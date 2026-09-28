function toggleMenu() {
    const menu = document.getElementById("nav") ||
                 document.getElementById("navMenu");

    if (menu) {
        menu.classList.toggle("show");
    }
}

document.querySelectorAll("#nav a, #navMenu a").forEach(function(link) {
    link.addEventListener("click", function() {
        const menu = document.getElementById("nav") ||
                     document.getElementById("navMenu");

        if (menu) {
            menu.classList.remove("show");
        }
    });
});

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

const cards = document.querySelectorAll(
    ".card, .project, .price-card, .process > div"
);

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12
    });

    cards.forEach(function(card) {
        card.style.opacity = "0";
        card.style.transform = "translateY(25px)";
        card.style.transition =
            "opacity .7s ease, transform .7s ease";

        observer.observe(card);
    });
}
