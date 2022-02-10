    //import of validator from validator.js
import validator from './validator.js';
    //console shows validator
//console.log(validator);
    //obtengo tcNumber desde el id en Número en index.html y lo guardo en una variable
const numberTC = document.getElementById("numberTC")
    //obtengo el boton y lo guardar en una variable
const buttonAdd = document.getElementById("buttonAdd")
    //se pide escuchar cuando se de click al boton
buttonAdd.addEventListener("click",()=>
{
    //invocar los metodos isValid y maskify llamar funcion del objeto y enviar argumento
    //cuando ocurre la acción se muestra el valor.
    const valido =  validator.isValid(numberTC.value)
    const enmascarado = validator.maskify(numberTC.value)
    if(valido === true)
    {
        alert('Tu tarjeta ' + enmascarado + ' es válida')
    }
    else
    {
        alert('Tu tarjeta ' + enmascarado + ' no es válida')
    }
})

