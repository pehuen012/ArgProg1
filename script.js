const aparecer = document.getElementsByClassName("aparecer");

function mostrar (entradas, observador){
    //console.log(entradas);
    //console.log(observador);
    entradas.forEach((entradas) => {
        if(entradas.isIntersecting){
            entradas.target.classList.add("visible");
        }
        else{
            entradas.target.classList.remove("visible");
        }

    })
}

const observador = new IntersectionObserver(mostrar, {
    root: null,
    rootMargin: "20px 0px -50px 0px",
    threshold: 0.6
});

function llamar(){
    for (var i = 0; i < aparecer.length; i++){
        observador.observe(aparecer.item(i));
    }
}

llamar()


function boton(numProyecto, atributo, clase){

    const elemento = document.getElementsByClassName(clase);

    if (elemento.item(numProyecto).classList.contains(atributo)){
        elemento.item(numProyecto).classList.remove(atributo);
    }
    else{
        elemento.item(numProyecto).classList.add(atributo);
    }
}
