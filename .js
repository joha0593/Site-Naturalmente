let buscador = document.querySelector(".buscador");
let lupa = document.querySelector(".buscadorLupa");
let buscadorCerrar = document.querySelector(".buscadorCerrar");


const controls = document.querySelectorAll(".control");
let currentItem = 0;
const itens = document.querySelectorAll(".produtos");
const maxItens = itens.length;

controls.forEach((control) => {
    control.addEventListener('click', () => {
        const isLeft = control.classList.contains("arrow-left");

        if(isLeft){
            currentItem -= 1;
        } else{
            currentItem += 1;
        }
        if(currentItem >= maxItens){
            currentItem = 0;
        }
        if (currentItem < 0) {
            currentItem = maxItens - 1;
        }
        console.log("control", isLeft, currentItem, maxItens);
});
});
   
 

let count = 0;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImagem();
}, 4000)

function nextImagem(){
    count++;
    if(count>4){
        count - 1 ;
    }
    document.getElementById("radio"+ count).checked = true;
}