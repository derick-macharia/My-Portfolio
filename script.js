document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projects = document.querySelectorAll(".project");

    // Dark mode toggle
    darkModeToggle.addEventListener("click", () => {
        const isDarkMode = body.classList.contains("dark-mode");
        body.classList.toggle("dark-mode", !isDarkMode);
        localStorage.setItem("darkMode", !isDarkMode);
    });

    // Maintain dark mode state
    if (localStorage.getItem("darkMode") === "true") {
        body.classList.add("dark-mode");
    }

    // Project filtering
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.dataset.category;
            projects.forEach(project => {
                if (category === "all" || project.classList.contains(category)) {
                    project.style.display = "block";
                } else {
                    project.style.display = "none";
                }
            });
        });
    });

    // Project hover effect
    projects.forEach(project => {
        project.addEventListener("mouseenter", () => {
            project.style.transform = "translateY(-10px)";
            project.style.boxShadow = "0px 6px 16px rgba(255, 255, 255, 0.6)";
        });

        project.addEventListener("mouseleave", () => {
            project.style.transform = "translateY(0)";
            project.style.boxShadow = "0px 4px 12px rgba(0, 0, 0, 0.05)";
        });
    });

    // Select the hamburger menu and navigation
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');

    // Add click event listener to the hamburger menu
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    const htmlElement = document.documentElement;

    darkModeToggle.addEventListener('click', () => {
        const isDarkMode = htmlElement.getAttribute('data-theme') === 'dark';
        htmlElement.setAttribute('data-theme', isDarkMode ? 'light' : 'dark');
        darkModeToggle.innerHTML = `<i class="fas fa-${isDarkMode ? 'moon' : 'sun'}"></i>`;
    });
});
