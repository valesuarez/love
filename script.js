const alternativas=[
    {texto:"", imagen:"../imagenes/1.gif"},
    {texto:"TE PROMETO QUE NO TE ARREPENTIRAS", imagen:"../imagenes/arrepentir.gif"},
    {texto:"PIENSALO DE NUEVO", imagen:"../imagenes/piensalo.gif"},
    {texto:"VAMOS, ATREVETE A DECIR QUE SI", imagen:"../imagenes/atrevete.gif"},
    {texto:"QUE EL MIEDO NO TE DENTENGA", imagen:"../imagenes/ultima.gif"},

];

const dijoQueSi = {texto:"SABIA QUE ACEPTARIAS", imagen:"../imagenes/si.gif"}
const titulo =document.querySelector('.titulo')
const texto =document.querySelector('.texto')
const nena =document.querySelector('.nena')
const botones = document.querySelectorAll('.boton')
const botonError =document.querySelector('.botonError')

let count = 0;
function updateDisplay(item){
    console.log(item);
    nena.src = item.imagen;
    texto.innerHTML = item.texto
}

botonError.addEventListener('click',() => {
    count = 0;
    updateDisplay(alternativas[count]);
    botones.forEach(btn => btn.style.display ='inline-block')
    botonError.style.display ='none'  
})

botones.forEach(boton =>{
    boton.addEventListener('click', ()=>{
        if(boton.textContent === 'SI'){
            updateDisplay(dijoQueSi);
            botones.forEach(btn => btn.style.display ='none');
        }
        if(boton.textContent === 'NO'){
            count++
            if(count<alternativas.length){
                updateDisplay(alternativas[count])
            }else{
                botones.forEach(btn => btn.style.display ='none')
                botonError.style.display ='inline-block';
            }
        }
    })

})
