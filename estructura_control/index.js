const mostrar_edad =()=>{
    let edad = document.querySelector ("#edad1").value; 

    if (edad >= 1 && edad <=13){
        alert ('su edad esta entre 1 a 13 años de edad');
    }

    if (edad >=14 && edad < 21){
        alert('su edad esta entre 14 a 21 años de edad');
    }
    if (edad >=21){
        alert('es mayor a 21')
    }
}
const boton1 = document.querySelector("#btn_calcular");
boton1.addEventListener("click",mostrar_edad);
