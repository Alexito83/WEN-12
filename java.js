document.addEventListener('DOMContentLoaded', () => {
    // 1. Menú Móvil Interactivo
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // 2. Modo Oscuro / Claro
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        themeToggle.textContent = isDark ? '☀️' : '🌙';
    });

    // 3. Desplazamiento Suave al botón Hero
    const btnExplore = document.getElementById('btnExplore');
    btnExplore.addEventListener('click', () => {
        document.getElementById('proyectos').scrollIntoView({ behavior: 'smooth' });
    });

    // 4. Filtro de Tarjetas Interactivo
    const filterButtons = document.querySelectorAll('.btn-filter');
    const cards = document.querySelectorAll('.card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remover clase active de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            // Mostrar/Ocultar tarjetas según la categoría
            cards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.classList.remove('hide');
                } else {
                    card.classList.add('hide');
                }
            });
        });
    });
});