import Auto from './auto.js'

const ejecutar = () => {

const autito = new Auto(); 

autito.kilometro = '44.000km';
autito.mantenimiento_realizado()

}
const btn = document.getElementById('btn_mantenimiento');
document.addEventListener('click', ejecutar);