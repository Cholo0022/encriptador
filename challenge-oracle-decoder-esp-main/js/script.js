//Función para encriptar frase ingresada
function encriptarFrase() {
  //Selecciono el boton para encriptar
  var botonEncriptar = document.querySelector("#botonEncriptar");
  //Tomo el evento click
  botonEncriptar.addEventListener("click", function () {
    //agarro lo que hay en el input y lo guardo en una variable.
    var frase = document.querySelector("#inputText");
    var fraseSinEncriptar = frase.value;
    var fraseEncriptada = [];
    var patron = /^[a-zñ\s\!\¡\?\¿]+$/;
    //Reccorro la frase ingresada y y comparo caracter para luego ingresarlos a un array y encriptar mi frase.
    if (patron.test(fraseSinEncriptar)) {
      for (var i = 0; i < fraseSinEncriptar.length; i++) {
        var letraCoincidente = false;
        if (fraseSinEncriptar[i] === "a") {
          letraCoincidente = true;
          fraseEncriptada.push("a" + "i");
        }
        if (fraseSinEncriptar[i] === "e") {
          letraCoincidente = true;
          fraseEncriptada.push("e" + "n" + "t" + "e" + "r");
        }
        if (fraseSinEncriptar[i] === "i") {
          letraCoincidente = true;
          fraseEncriptada.push("i" + "m" + "e" + "s");
        }
        if (fraseSinEncriptar[i] === "o") {
          letraCoincidente = true;
          fraseEncriptada.push("o" + "b" + "e" + "r");
        }
        if (fraseSinEncriptar[i] === "u") {
          letraCoincidente = true;
          fraseEncriptada.push("u" + "f" + "a" + "t");
        }
        if (letraCoincidente == false) {
          letraCoincidente = true;
          fraseEncriptada.push(fraseSinEncriptar[i]);
        }
      }
    }
    //Limpio input de frase despues de ser procesada
    limpiar();
    //Retorno el valor en el input y uso el join() para convertirlo en string
    return (document.getElementById("textoProcesado").value =
      fraseEncriptada.join(""));
  });
}
//Función para desencriptar frase ingresada
function desencriptarFrase() {
  //Selecciono el boton para desencriptar
  var botonDesencriptar = document.querySelector("#botonDesencriptar");
  //Tomo el evento click
  botonDesencriptar.addEventListener("click", function () {
    //agarro lo que hay en el input y lo guardo en una variable.
    var frase = document.querySelector("#inputText");
    var fraseEncriptada = frase.value.split("");

    // Recorro la frase encriptada, comparo valores y quito los caracteres para desencritar la frase
    for (var i = 0; i < fraseEncriptada.length; i++) {
      if (fraseEncriptada[i] === "a" && fraseEncriptada[i + 1] === "i") {
        fraseEncriptada.splice(i + 1, 1);
      }
      if (
        fraseEncriptada[i] === "e" &&
        fraseEncriptada[i + 1] === "n" &&
        fraseEncriptada[i + 2] === "t" &&
        fraseEncriptada[i + 3] === "e" &&
        fraseEncriptada[i + 4] === "r"
      ) {
        fraseEncriptada.splice(i + 1, 4);
      }

      if (
        fraseEncriptada[i] === "i" &&
        fraseEncriptada[i + 1] === "m" &&
        fraseEncriptada[i + 2] === "e" &&
        fraseEncriptada[i + 3] === "s"
      ) {
        fraseEncriptada.splice(i + 1, 3);
      }
      if (
        fraseEncriptada[i] === "o" &&
        fraseEncriptada[i + 1] === "b" &&
        fraseEncriptada[i + 2] === "e" &&
        fraseEncriptada[i + 3] === "r"
      ) {
        fraseEncriptada.splice(i + 1, 3);
      }
      if (
        fraseEncriptada[i] === "u" &&
        fraseEncriptada[i + 1] === "f" &&
        fraseEncriptada[i + 2] === "a" &&
        fraseEncriptada[i + 3] === "t"
      ) {
        fraseEncriptada.splice(i + 1, 3);
      }
    }
    //Limpio input de frase despues de ser procesada
    limpiar();
    //Retorno el valor en el input y uso el join() para convertirlo en string
    return (document.getElementById("textoProcesado").value =
      fraseEncriptada.join(""));
  });
}

//función para copiar el texto encriptado o desencriptado
function copiarTexto() {
  //Guardo en la variable el texto procesado.
  var textoCopiar = document.getElementById("textoProcesado");
  //Seleciono texto procesado
  textoCopiar.select();
  //Copio en portapapeles el texto selecionado
  document.execCommand("copy");
  limpiar();
}

function limpiar() {
  document.getElementById("inputText").value = "";
}
//Llamo a la función para encriptar la frase
encriptarFrase();
//Llamo a la función para desencriptar la frase
desencriptarFrase();

/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/
