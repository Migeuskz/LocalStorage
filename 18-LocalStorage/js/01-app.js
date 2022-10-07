localStorage.setItem('nombre', 1);

//sessionStorage.setItem('nombre', 'migue');

const producto = {
    nombre :  "Monitor 24 pulgadas",
    precio : 3003
}

//convierte los objetos en Strings
const productoString = JSON.stringify(producto);
//console.log(producto);
localStorage.setItem('producto', productoString);

const meses = ['Enero', 'Frebrero', 'Marzo'];
//Primera forma
/*const mesesString = JSON.stringify(meses);
localStorage.setItem('meses', mesesString);*/
//segunda forma
localStorage.setItem('meses', JSON.stringify(meses));