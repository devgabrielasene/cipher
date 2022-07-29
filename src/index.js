import cipher from './cipher.js';


const encodeAction = document.getElementById("encodeAction");
encodeAction.addEventListener('click', criptografa);

function criptografa () {

    const shiftEncode = document.getElementById('shiftEncode').value;
    const alertMessage = document.getElementById('alertMessage').value;
    let cripMessage = document.getElementById("cripMessage");

    if (shiftEncode == "" || alertMessage == "")  {
        alert ("É necessário escrever o seu alerta e selecionar um deslocamento para codificar");

    } else {
    cripMessage.innerHTML= cipher.encode(parseInt(shiftEncode), alertMessage);
}

}

const decodeAction = document.getElementById("decodeAction");
decodeAction.addEventListener('click', descriptografa);

function descriptografa () {
    let shiftEncode = document.getElementById('shiftEncode').value;
    let alertMessage = document.getElementById('alertMessage').value;
    let descripMessage = document.getElementById('descripMessage');

    if (shiftEncode == "" || alertMessage == "") {
        alert("É necessário escrever o seu alerta e selecionar um deslocamento para decodificar");

    } else {
        descripMessage.innerHTML = cipher.decode(parseInt(shiftEncode), alertMessage);
        
    }
}