import "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"


const generador = document.getElementById("generador")

let fecha = new Date
let dia = fecha.getDate()
let mes = fecha.getMonth()+1
let año = fecha.getFullYear()

let foto = document.getElementById("foto"); //Agarra el selector de archivos
let contenedorfoto = document.getElementById("contenedorfoto") // Agarra el contenedor de la foto que se renderiza abajo





foto.addEventListener('change', e => { // e quiere decir evento

  if(e.target.files[0]) { //Dice que se encontro una imagen cargada en la celda input file
    const reader = new FileReader() // es un objeto de funcion asincrona 
    reader.onload = function (e){         // Este evento indica que la lectura del archivo ha finalizado.
      contenedorfoto.src = e.target.result;
    } 
    reader.readAsDataURL(e.target.files[0]) 
      }
  })
;


generador.addEventListener("click", async () =>{
  let hora = `${fecha.getHours()}${fecha.getMinutes()}${fecha.getSeconds()}` //Llama a la funcion de crear el pdf del boton
  let archivo = `${año}${mes}${dia}${hora}` // Generador de nombres del archivo
  const configuracionPDF = { //configuracion del pdf
    margin: 10,
    filename: archivo,
    image: {
      type: "jpeg",
      quality: "0.98"
    },
    html2canvas:{
      scale:3,
      letterRendering: true
    }
    }


  let nombre = document.getElementById("name").value;  
  let domicilio = document.getElementById("domicilio").value;

    let imagenrender = document.getElementById("contenedorfoto") //Toma el render de la foto de la pagina
    console.log(imagenrender.src) //Imprime el link de la foto en temp

    imagenrender.style.width = "50px"


//! Esta es la tabla renderizada para imprimir la tabla html

  let tablaHTML = `
  <style>
    table {
        padding: 2em;
      width: 100%;
      border-collapse: collapse;
    }

    th, td {
      border: 1px solid black;
      padding: 8px;
      text-align: left;
    }

    th {
      background-color: #f2f2f2;
    }
  </style>
  <table>
    <thead>
      <tr>
        <th>Visita</th>
        <th>Nombre</th>
        <th>Dirección</th>
        <th>Fecha</th>
        <th>Hora</th>
        <th>Imagen</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>1° Visita</td>
        <td>${nombre}</td>
        <td>${domicilio}</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>2° Visita</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td colspan="6">Observaciones</td>
      </tr>
    </tbody>
       
  </table>
  <img src="${imagenrender.src}" alt="" style="max-width: 600px; margin:auto;">

`;
    

  await  html2pdf().from(tablaHTML).set(configuracionPDF).save()

})


