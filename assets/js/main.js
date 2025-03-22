document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  const htmlElement = document.documentElement;
  const lightIcon = themeToggleBtn.querySelector(".light-icon");
  const darkIcon = themeToggleBtn.querySelector(".dark-icon");
  const searchToggle = document.getElementById("search-toggle");
  const searchBar = document.getElementById("search-bar");

  // Theme Toggle
  const updateIcons = (theme) => {
    if (theme === "light") {
      darkIcon.style.display = "inline-block";
      lightIcon.style.display = "none";
    } else {
      lightIcon.style.display = "inline-block";
      darkIcon.style.display = "none";
    }
  };
  const savedTheme = localStorage.getItem("theme") || "light";
  htmlElement.setAttribute("data-theme", savedTheme);
  updateIcons(savedTheme);
  themeToggleBtn.addEventListener("click", () => {
    const currentTheme = htmlElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    htmlElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateIcons(newTheme);
  });

  // Mobile Menu Toggle
  navToggle.addEventListener("click", () => {
    const isExpanded = navMenu.classList.toggle("show");
    navToggle.setAttribute("aria-expanded", isExpanded);
  });
  const navLinks = document.querySelectorAll(".nav-menu a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("show");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  // Search Bar Toggle
  searchToggle.addEventListener("click", () => {
    searchBar.classList.toggle("show");
  });

  // Basic Search Functionality
  searchBar.querySelector("button").addEventListener("click", () => {
    const query = searchBar.querySelector("input").value.toLowerCase();
    if (query) {
      const content = document
        .querySelector(".main-content")
        .innerText.toLowerCase();
      if (content.includes(query)) {
        alert(`Found "${query}" in the content!`);
      } else {
        alert(`"${query}" not found.`);
      }
    }
    searchBar.classList.remove("show");
  });
});
