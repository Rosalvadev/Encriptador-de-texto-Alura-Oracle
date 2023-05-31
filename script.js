const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

//*La letra "a" es convertida para "ai"*
//*La letra "e" es convertida para "enter"*
//*La letra "i" es convertida para "imes"*
//*La letra "o" es convertida para "ober"*
//*La letra "u" es convertida para "ufat"*



function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value ="";
    mensaje.style.backgroundImage ="none"
}


function encriptar(stringEncriptada){
    let matrizCodigo = [["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]]
    stringEncriptada = stringEncriptada.tolowercase()

    for(let i=0; i< matrizCodigo.length;i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceall(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value)
    mensaje.value = textoDesencriptado
    textArea.value ="";
}


function desencriptar(stringDesenncriptada){
    let matrizCodigo = [["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]]
    stringDesencriptada = stringDesencriptada.tolowercase()

    for(let i=0; i< matrizCodigo.length;i++){
        if(stringDesencriptada.includes(matrizCodigo[i][0])){
            stringDesencriptada = stringDesencriptada.replaceall(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }   
    return stringDesenncriptada 
}
