const cipher = {
encode: function encode(moves, writing) {
  if (typeof moves !== "number" || typeof writing !== "string") throw new TypeError();
  let cripMessage = "";

  for (let i = 0; i < writing.length; i++) {
    let movesDone = (moves - (parseInt (moves / 26)) * 26);

    if (writing.charCodeAt(i) >= 65 && writing.charCodeAt(i) <= 90) {
      let charCode = ((((writing.charCodeAt(i) - 65) + movesDone) % 26) + 65);
      cripMessage = cripMessage + String.fromCharCode(charCode);
    } 
    
    else {
      alert ("Escreva somente com letras maiúsculas e não utilize espaços");
      break
    }
  }
  return cripMessage;
},

decode: function decode(moves, writing) {
  if (typeof moves !== "number" || typeof writing !== "string") throw new TypeError();

  let descripMessage = "";
  for (let i = 0; i < writing.length; i++) {
    let movesDone = (moves - (parseInt (moves / 26)) * 26);

     if (writing.charCodeAt(i) >= 65 && writing.charCodeAt(i) <= 90) {
        let charCode = (((((writing.charCodeAt(i) - 65) - movesDone) +  26) % 26) + 65);
        descripMessage = descripMessage + String.fromCharCode(charCode);
      } else {
          alert('Escreva somente com letras maiúsculas');
          break;
      }
    } 
    return descripMessage;
  }
}

export default cipher;
