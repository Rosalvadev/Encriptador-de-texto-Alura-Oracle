const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");


//*La letra "e" es convertida para "enter"*
//*La letra "i" es convertida para "imes"*
//*La letra "a" es convertida para "ai"*
//*La letra "o" es convertida para "ober"*
//*La letra "u" es convertida para "ufat"*



function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value ="";
    mensaje.style.backgroundImage ="none"
}

function ocultarImage(){
    document.querySelector(".mensaje-no-encontrado").style.display = "none";
    document.querySelector(".mensaje-encriptado").style.display ="flex";
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i=0; i< matrizCodigo.length;i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value)
    mensaje.value = textoDesencriptado
    textArea.value ="";
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]]
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i=0; i< matrizCodigo.length;i++){
        if(stringDesencriptada.includes(matrizCodigo[i][0])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }   
    return stringDesencriptada 
}

const btncopiar = document.getElementById("btncopiar")

const btnCopiar = () => {
    navigator.clipboard.writeText(mensaje.value)
}

btncopiar.addEventListener("click", btnCopiar)