// intro animation
setTimeout(()=>{
  document.getElementById("intro").style.display="none";
  document.getElementById("main").style.display="block";
},4000);

// expand news
function expandir(card){

  let contenido = card.querySelector(".contenido");

  if(contenido.classList.contains("abierto")){
    contenido.classList.remove("abierto");
  }else{
    contenido.classList.add("abierto");
  }

}
