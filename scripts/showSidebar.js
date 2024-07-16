//PRimer intento de nav bar
const menuButton = document.getElementById('menu-button')
const closebar = document.getElementById('closebar')


const ullinks = document.getElementById('sidebar')
const contact = document.getElementById('contacto')

const mostrar_ocultar_nav  = () => {
    ullinks.classList.toggle("sidebar--show")
    
    menuButton.classList.toggle('menu-button')
    
   

}



menuButton.addEventListener("click", mostrar_ocultar_nav)
closebar.addEventListener("click", mostrar_ocultar_nav)




/*
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

*/


