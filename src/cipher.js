const cipher = {
encode: function encode(writing, moves) {
  let cripMessage = "";
  for (let i = 0; i < writing.length; i++) {

    if (writing.charCodeAt(i) >= 65 && writing.charCodeAt(i) <= 90) {
      let charCode = ((writing.charCodeAt(i) - 65 + moves) % 26) + 65;
      cripMessage = cripMessage + String.fromCharCode(charCode);
    } 
    
    else {
      alert ("Escreva somente com letras maiúsculas");
      break
    }
  }
  return cripMessage;
},

decode: function decode(writing, moves) {
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
