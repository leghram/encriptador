const textoFrase = document.querySelector(".frase");
const cuerpoFrase = document.querySelector(".cuerpo");
const btnEncriptar = document.querySelector(".btn1");
const btnDesencriptar = document.querySelector(".btn2");
const btnCopiar = document.querySelector(".copiar");

texto = "";

btnEncriptar.addEventListener("click", (ev)=>{
    texto = textoFrase.value;
    for(let a=0; a< texto.length; a ++){
        if(texto[a] == texto[a].toUpperCase){
            console.log("hay un texto en mayusculas")
        }else{
            console.log(texto[a])
        }
    }
})