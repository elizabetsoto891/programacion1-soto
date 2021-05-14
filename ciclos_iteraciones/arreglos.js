const mostrar_arreglos = () => {
    let miarreglos = [25,88,100,11];
    console.log(miarreglos[3]);
}

const boton = document.querySelector("#btn_mostrar_arreglos");
boton.addEventListener("click", mostrar_arreglos);