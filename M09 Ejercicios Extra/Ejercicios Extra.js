/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   const newArray = [];
   for (const key in objeto) {
      newArray.push([key, objeto[key]]);
   }
   return newArray;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   

   //1. Recorrer el array de elementos en elemento
   //1.1 Verificar si el elemento existe en el objeto resultado
   //1.1.1 Si es true se aumenta la cantidad de repeticiones
   //1.1.2 Si es false se agrega la letra al objeto con valor 1
   let objeto = {};
   // for (let i = 0; i < arrayString.length; i++) {
   //    if(objeto.hasOwnProperty(arrayString[i])){
   //       objeto[arrayString[i]] += 1;
   //    } else {
   //       objeto[arrayString[i]] = 1;
   //    }
   // }
   // return objeto;
    string.split("").sort().forEach(element => {
      if(objeto.hasOwnProperty(element)) {
         objeto[element] += 1;
      } else {
         objeto[element] = 1;
      }
   });
   return objeto;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   const newArray = string.split("");
   let mayusculas = '';
   let minusculas = '';

   newArray.forEach(element => {
      if(element === element.toUpperCase()) {
         mayusculas = mayusculas + element;
      } else {
         minusculas = minusculas + element
      }
   });
   return mayusculas + minusculas;

}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:

   // return frase.split(' ').map(element => {
   //    let string = '';
   //    for (let i = element.length-1 ; i >= 0; i--) {
   //       string += element.charAt(i);      
   //    }
   //    return string;
   // }).join(' ');

   return frase.split(' ')
   .map(
      element => element.split('').reverse().join('')
   )
   .join(' ');

}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let newArray = numero.toString().split('');
   const ultimaPosicionArray = newArray.length - 1;
   let contador = 0;

   for (let i = 0; i < ((ultimaPosicionArray) / 2); i++){
      if(newArray[i] === newArray[ultimaPosicionArray - i]){
         contador += 1;
      } else {
         contador = 0;
         break;
      }
   }
   return contador > 0 ? "Es capicua" : "No es capicua"

}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   return string.replace(/([a-c])/g, '');
   return string.replace('a', '').replace('b', '').replace('c', '');
   // return string.split('').filter(char => char != 'a' && char != 'b' && char != 'c').join('');
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   // let newArray = [];
   const asc = 1; // 1 para asc y -1 para desc
   return arrayOfStrings.sort(
      (a,b) => {
         if (a.length == b.length) {
            return 0;
          }
          if (a.length < b.length) {
            return asc * -1;
          }
          return asc * 1;
      }
      );

   // return arrayOfStrings.map(
   //    element => [element.length, element]
   //    )
   // .sort().map(
   //    (element) => element[2]
   // );
  
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   return array1.filter((element1) => {//Si consigue el elemento lo retorna si no no retorna nada
      let coincide = false;
      for (let i = 0; i < array2.length; i++) {
         if (array2[i] === element1) {
            coincide = true;
            break;
         }
      }
      return coincide;
   });
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
