const carrusel = document.getElementById('carrusel');
const articulo1= document.getElementById('artUno');
const articulo2 = document.getElementById('artDos');
const articulo3 = document.getElementById('artTres');
const articulo4 = document.getElementById('artCuatro')
console.log(carrusel)

carrusel.addEventListener('click',(Event) => {
    if(Event.target.classList.value !== '') {
        if(Event.target.classList.value==='uno'){
            articulo1.className = "visible"
            articulo2.className = "invisible"
            articulo3.className = "invisible"
            articulo4.className = "invisible"
        }
        if(Event.target.classList.value==='dos'){
            articulo1.className = "invisible"
            articulo2.className = "visible"
            articulo3.className = "invisible"
            articulo4.className = "invisible"
        }
        if(Event.target.classList.value==='tres'){
            articulo1.className = "invisible"
            articulo2.className = "invisible"
            articulo3.className = "visible"
            articulo4.className = "invisible"
        }
        if(Event.target.classList.value==='cuatro'){
            articulo1.className = "invisible"
            articulo2.className = "invisible"
            articulo3.className = "invisible"
            articulo4.className = "visible"
        }
        
    }
    }
    
);