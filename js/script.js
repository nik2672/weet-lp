// dark/light mode
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('.theme-icon');
    
    themeToggle.addEventListener('click', () => {
        const html = document.documentElement;
        const currentTheme = html.getAttribute('data-theme');
        
        // switch through the data-theme (light is default)
        if (currentTheme === 'light') {
            html.setAttribute('data-theme', 'dark');
            themeIcon.textContent = '☀️';
        } else {
            html.setAttribute('data-theme', 'light');
            themeIcon.textContent = '🌙';
        }
    });
});