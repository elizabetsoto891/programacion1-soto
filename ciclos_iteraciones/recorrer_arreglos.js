const recorrer_arreglos = () => {
    let nombres = ['pepe','juan','jose','jaime'];

    nombres.forEach(element => {
        console.log(element);
    });
}

const boton2 = document.querySelector("#btn_recorrer_arreglos");
boton2.addEventListener("click", recorrer_arreglos);