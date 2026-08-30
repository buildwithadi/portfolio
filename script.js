document.addEventListener("DOMContentLoaded", () => {
    const themeToggleBtn = document.getElementById("theme-toggle");
    const htmlElement = document.documentElement;

    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem("theme");
    
    // Check system preference if no saved theme exists
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    // Apply the correct theme on load
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
        htmlElement.setAttribute("data-theme", "dark");
    }

    // Toggle theme on button click
    themeToggleBtn.addEventListener("click", () => {
        const currentTheme = htmlElement.getAttribute("data-theme");
        
        if (currentTheme === "dark") {
            htmlElement.removeAttribute("data-theme");
            localStorage.setItem("theme", "light");
        } else {
            htmlElement.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
        }
    });
});