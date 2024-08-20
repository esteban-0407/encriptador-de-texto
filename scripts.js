document.getElementById("inputText").addEventListener("input", function () {
    this.value = this.value
        .toLowerCase() // Convertir a minúsculas
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Eliminar acentos
        .replace(/[^a-z\s]/g, ""); // Eliminar caracteres no permitidos
});
function encrypttext() {
    let texto = document.getElementById("inputText").value;
    let inicio = document.getElementById("inicio");
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
        if (texto.length != 0) {
            document.getElementById("outputText").value = textoEncriptado;
            tituloMensaje.textContent = "Texto encriptado con éxito";
            inicio.src = "./assets/cerrado.png";
          } else {
            inicio.src = "./assets/inicio.png";
          }
}

function decrypttext() {
    let texto = document.getElementById("inputText").value;
    let inicio = document.getElementById("inicio");
    let tituloMensaje = document.getElementById("titulo-mensaje");
    tituloMensaje.textContent = "Texto desencriptado con éxito";
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    
        if (texto.length != 0) {
            document.getElementById("outputText").value = textoDesencriptado;
            inicio.src = "./assets/abierto.png";
          } else {
            muñeco.src = "./assets/inicio.png";
          }
}

function clearText() {
    document.getElementById("inputText").value = '';
    document.getElementById("outputText").value = '';
    let inicio = document.getElementById("inicio");
    inicio.src = "./assets/inicio.png";
}

function copyText() {
    var text = document.getElementById("outputText").value;
    copytoClipboard(text);
    
}
function copytoClipboard(text){
    navigator.clipboard.writeText(text)
    .then(()=>{})
    .catch(err =>{});
}

