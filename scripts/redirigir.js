function contactform() {
    window.location.href = 'form-contact.html'
    
}


const masinfo = document.querySelector('#btn-paq')

const modal = document.querySelector('#modal')

const enviar = document.querySelector('#submit')


let formulario1 = document.getElementById('todoelform')

const abrirformulario = ()  => {

    formulario1.classList.toggle ('formulario1--hidden')
}