function showSidebar(){
    const sidebar = document.querySelector ('.sidebar')
    sidebar.style.display = 'flex'
    
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
     // Verifica si se debe evitar el scroll hacia arriba
     if (!scrollArriba) {
        // Si scrollArriba es false, no se hace scroll hacia arriba
        return;
    }

    // Hace scroll hacia arriba
    window.scrollTo(0, 0);
}

// JavaScript para manejar la apertura del menú
document.getElementById('toggleMenu').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('.sidebar');
});
