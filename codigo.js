let contenedor = document.querySelector(".container");
let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let imagen = document.querySelector(".img");


start.addEventListener("click", (e)=>{
    imagen.classList.add("active");
})

stop.addEventListener("click", (e)=>{
    imagen.classList.remove("active");
})

