document.addEventListener("DOMContentLoaded", function () {
    // Responsive resize handling
    function resizePage() {
        const page = document.querySelector(".page");
        const sideCard = document.querySelector(".side-card");
        if (!page || !sideCard) return;
        
        if (window.innerWidth < 1280 && window.innerWidth > 540) {
            page.style.width = `${window.innerWidth - sideCard.clientWidth - 90}px`;
            page.style.float = "left";
        } else {
            page.removeAttribute("style");
        }
    }
    window.addEventListener("resize", resizePage);
    resizePage();

    // Menu toggle
    const menuIcon = document.querySelector(".menus_icon");
    const headerWrap = document.querySelector(".header_wrap");
    if (menuIcon && headerWrap) {
        menuIcon.addEventListener("click", function () {
            headerWrap.classList.toggle("menus-open");
            headerWrap.classList.toggle("menus-close");
        });
    }

    // Social links toggle
    const socialLinksButton = document.querySelector(".m-social-links");
    const authorLinks = document.querySelector(".author-links");
    if (socialLinksButton && authorLinks) {
        socialLinksButton.addEventListener("click", function () {
            authorLinks.classList.toggle("is-open");
            authorLinks.classList.toggle("is-close");
        });
    }

    // Mobile navigation toggle
    const navButton = document.querySelector(".site-nav");
    const nav = document.querySelector(".nav");
    if (navButton && nav) {
        navButton.addEventListener("click", function () {
            nav.classList.toggle("nav-open");
            nav.classList.toggle("nav-close");
        });
    }

    // Close menus when clicking outside
    document.addEventListener("click", function (event) {
        if (nav && !event.target.closest(".nav")) {
            nav.classList.remove("nav-open");
            nav.classList.add("nav-close");
        }
        if (authorLinks && !event.target.closest(".author-links")) {
            authorLinks.classList.remove("is-open");
            authorLinks.classList.add("is-close");
        }
        if (headerWrap && !event.target.closest(".menus_icon") && !event.target.closest(".menus_items")) {
            headerWrap.classList.remove("menus-open");
            headerWrap.classList.add("menus-close");
        }
    });

    // Show/hide back-to-top button
    const backToTop = document.querySelector(".nav-wrap");
    if (backToTop) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 100) {
                backToTop.classList.add("is-visible");
            } else {
                backToTop.classList.remove("is-visible");
            }
        });
    }

    // Scroll to top smoothly
    const topButton = document.querySelector(".cd-top");
    if (topButton) {
        topButton.addEventListener("click", function (event) {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                event.preventDefault();
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});

