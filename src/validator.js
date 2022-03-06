
//acá se esta definiendo la función, recuerda que la función tambien puede ser un atributo del objeto o variable
const validator =
{
  isValid: function(numberTC)
  {
    const reverseNumber=numberTC.toString().split('').reverse();//Convierto el numero de la tarjeta en un arreglo y lo volteo
    let impar = 0;
    for (let i = 0; i < numberTC.length; i = i + 2)//for para recorrer las posiciones impares del arreglo
    {
      let multi1 = reverseNumber[i]*1;//Al multiplicar por 1 se le estan quitando las comillas al caracter y volviendolo un número en las posiciones i(en este caso par)
      impar = impar + multi1;
    }
    //console.log(impar);
    let par = 0;
    let resta = 0;
    for (let i = 1; i < numberTC.length; i = i + 2)
    {
      let multi2 = reverseNumber[i]*2;
      if(multi2 > 9)
      {
        resta = multi2 - 9;
      }
      else
      {
        resta = multi2;
      }
      par = par + resta;
    }
    //console.log(par);
    const total = par + impar;
    //console.log(total);
    if (total % 10 == 0)
    {
      return true;
    }
      else
      {
        return false;
      }
  },
  maskify : function(numberTC)
  {
    return numberTC.replace(/.(?=.{4})/g, "#");
  }
};

export default validator;

//estudiar sobre el ambito
//eslint
//revisar archivo de pruebas test
//revisar css