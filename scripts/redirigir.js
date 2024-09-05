function contactform() {
    window.location.href = 'paqueteria.html'
    
}


function sended(){
    alert('Enviado correctamente')
    location.reload();
}
function span() {
    location.reload();
}






const masinfo = document.querySelector('#btn-paq')

const modal = document.querySelector('#modal')


let formulario1 = document.getElementById('todoelform')

const abrirformulario = ()  => {

    formulario1.classList.toggle ('formulario1--hidden')
}