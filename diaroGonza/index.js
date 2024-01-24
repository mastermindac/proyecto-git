// index.js

document.addEventListener('DOMContentLoaded', function () {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const body = document.body;
  
    // Restaura el tema almacenado en localStorage al cargar la página
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode && storedDarkMode === 'true') {
      body.classList.add('dark-mode');
    }
  
    // Escucha el evento de clic en el botón
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', function () {
        // Alterna la clase 'dark-mode' en el cuerpo para cambiar los estilos
        body.classList.toggle('dark-mode');
  
        // Guarda el estado actual del tema en localStorage
        const isDarkMode = body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode.toString());
      });
    }
  });
  