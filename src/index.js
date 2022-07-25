import cipher from './cipher.js';


const encodeAction = document.getElementById("encodeAction");
encodeAction.addEventListener('click', criptografa);

function criptografa () {

    let alertMessage = document.getElementById('alertMessage').value;
    let shiftEncode = document.getElementById('shiftEncode').value;

    if (alertMessage == "" || shiftEncode == "")  {
        alert ("É necessário escrever o seu alerta e selecionar um deslocamento para codificar");

    } else {
    let crip = cipher.encode(alertMessage, shiftEncode);
    let cripMessage = document.getElementById("cripMessage");
    cripMessage.innerHTML = crip;
}

};

const decodeAction = document.getElementById("decodeAction");
decodeAction.addEventListener('click', descriptografa);

function descriptografa () {
    let alertMessage = document.getElementById('alertMessage').value;
    let shiftEncode = document.getElementById('shiftEncode').value;

    if (alertMessage == "" || shiftEncode == "") {
        alert("É necessário escrever o seu alerta e selecionar um deslocamento para decodificar");

    } else {
        let descrip = cipher.decode(alertMessage, shiftEncode);
        let descripMessage = document.getElementById('descripMessage');
        descripMessage.innerHTML = descrip;
    }
};
const resetar = document.getElementById('clean');
resetar.addEventListener('click', limpar);

function limpar () {
let clean = document.getElementById('clean').value;
clean.reset() = clean
}