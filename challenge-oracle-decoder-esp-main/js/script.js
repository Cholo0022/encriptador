function encriptarFrase() {

    var botonEncriptar = document.querySelector("#botonEncriptar")

    botonEncriptar.addEventListener("click", function () {
        console.log("Hiciste click en encriptar");
        var frase = document.querySelector("#inputText");
        console.log(frase.value.length);
        var fraseSinEncriptar = frase.value.toLowerCase();
        var fraseEncriptada = [];
        
        for (var i = 0; i < fraseSinEncriptar.length; i++){
            var letraCoincidente = false;
            if (fraseSinEncriptar[i] === "a") {
                letraCoincidente = true;
                fraseEncriptada.push("a" + "i");                
            }
            if(fraseSinEncriptar[i] === "e") {
                letraCoincidente = true;
                fraseEncriptada.push("e" + "n" + "t" + "e"+ "r");
                
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
        console.log(fraseEncriptada)
        return fraseEncriptada
        //imprimir(fraseEncriptada);        
    })
}

function desencriptarFrase() {
    var botonDesencriptar = document.querySelector("#botonDesencriptar")

    botonDesencriptar.addEventListener("click", function () {
        console.log("Hiciste click en desencriptar");
        var frase = document.querySelector("#inputText");
        console.log(frase.value.length);
        var fraseEncriptada = frase.value.toLowerCase();
        var fraseDesencriptada = [];
                
        for (var i = 0; i < fraseEncriptada.length; i++){
            var letraCoincidente = false;
            if (fraseEncriptada[i] === "ia") {
                letraCoincidente = true;
                fraseDesencriptada.push("a");                
            }
            if(fraseEncriptada[i] === "enter") {
                letraCoincidente = true;
                fraseDesencriptada.push("e");
                
            }        
            if (fraseEncriptada[i] === "imes") {
                letraCoincidente = true;
                fraseDesencriptada.push("i");                
            }        
            if (fraseEncriptada[i] === "ober") {
                letraCoincidente = true;
                fraseDesencriptada.push("o");                
            }        
            if (fraseEncriptada[i] === "ufat") {
                letraCoincidente = true;
                fraseDesencriptada.push("u");                
            }
            if (letraCoincidente == false) {
                letraCoincidente = true;
                fraseDesencriptada.push(fraseEncriptada[i]);    
            }                         
        }        
        console.log(fraseDesencriptada);
        return fraseDesencriptada;
        //imprimir(fraseEncriptada);        
    })
}


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
