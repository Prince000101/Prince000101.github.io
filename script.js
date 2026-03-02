document.addEventListener("DOMContentLoaded", () => {
    // Intersection Observer for scroll animations
    const revealElements = document.querySelectorAll(".reveal");

    const revealCallback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target); // Stop observing once revealed
            }
        });
    };

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

    revealElements.forEach((el) => {
        revealObserver.observe(el);
    });

    // Active Navigation Link Highlighting
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    const highlightNav = () => {
        let current = "";
        const scrollY = window.scrollY;

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            // Checking if the scroll position is within the current section
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", highlightNav);

    // Trigger once on load to set initial state
    highlightNav();

    // Navbar scroll effect (compress based on scroll)
    const navbar = document.querySelector("nav");
    let lastScroll = 0;

    window.addEventListener("scroll", () => {
        const currentScroll = window.scrollY;

        if (currentScroll > 50) {
            navbar.classList.add("py-2");
            navbar.classList.remove("py-4");
            navbar.classList.add("bg-gray-900/80");
        } else {
            navbar.classList.add("py-4");
            navbar.classList.remove("py-2");
            navbar.classList.remove("bg-gray-900/80");
        }

        lastScroll = currentScroll;
    });
});
