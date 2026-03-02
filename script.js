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

    // Active Navigation Link Highlighting for Sidebar
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    if (sections.length > 0) {
        const highlightNav = () => {
            let current = "";
            const scrollY = window.scrollY;

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                // Checking if the scroll position is within the current section
                if (scrollY >= sectionTop - 250) {
                    current = section.getAttribute("id");
                }
            });

            navLinks.forEach((link) => {
                link.classList.remove("active");
                link.parentElement.classList.remove("border-l-2", "border-primary", "bg-white/5");

                if (current && link.getAttribute("href") && link.getAttribute("href").includes(current)) {
                    link.classList.add("active");
                    // Add a left border and slight background highlight to the active item
                    link.parentElement.classList.add("border-l-2", "border-primary", "bg-white/5");
                }
            });
        };

        window.addEventListener("scroll", highlightNav);

        // Trigger once on load to set initial state
        highlightNav();
    }

    // Mobile Menu Toggle Logic
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const sidebar = document.getElementById("sidebar");
    const menuIcon = document.getElementById("menu-icon");

    if (mobileMenuBtn && sidebar) {
        let isMenuOpen = false;

        mobileMenuBtn.addEventListener("click", () => {
            isMenuOpen = !isMenuOpen;

            if (isMenuOpen) {
                // Open menu
                sidebar.classList.remove("-translate-x-full");
                sidebar.classList.add("translate-x-0");

                // Change icon to X
                menuIcon.setAttribute("d", "M6 18L18 6M6 6l12 12");

                // Prevent body scroll
                document.body.style.overflow = "hidden";
            } else {
                // Close menu
                sidebar.classList.add("-translate-x-full");
                sidebar.classList.remove("translate-x-0");

                // Change icon back to hamburger
                menuIcon.setAttribute("d", "M4 6h16M4 12h16m-7 6h7");

                // Restore body scroll
                document.body.style.overflow = "auto";
            }
        });

        // Close menu when a link is clicked on mobile
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                if (window.innerWidth < 768) { // 768px is md breakpoint in tailwind
                    mobileMenuBtn.click();
                }
            });
        });
    }
});
