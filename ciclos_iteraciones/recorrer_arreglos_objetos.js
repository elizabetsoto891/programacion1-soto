const recorrer_objetos = () => {
    let misobjetos = [
        {
            nombre:'pepe',
            apellido :'argento'
        },
        {
            nombre:'juan',
            apellido:'perez'

        }
    ];
    misobjetos.forEach(element => {
        console.log(`
            mi nombre es:${element.nombre}
            mi apellido es:${element.apellido}
            `)
    });
}


//alternativa a document.queryselector()
document.getElementById("#btn_recorrer_arreglos")