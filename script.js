document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const hi = document.getElementsByClassName("hi");
    const themeToggle = document.getElementById('theme-toggle');

    function toggleTheme() {
        body.classList.toggle('dark-theme');
        hi.classList.toggle('dark-theme')
        if (body.classList.contains('dark-theme')) {
            themeToggle.textContent = '☀️';
        }
 else {
            themeToggle.textContent = '🌙';
        }
    }

    themeToggle.addEventListener('click', toggleTheme);
});
