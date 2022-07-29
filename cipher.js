const cipher = {
encode: function encode(moves, writing) {
  if (typeof moves !== "number" || typeof writing !== "string") throw new TypeError();
  let cripMessage = "";

  for (let i = 0; i < writing.length; i++) {
    let movesDone = (moves - (parseInt (moves / 26)) * 26);

    if (writing.charCodeAt(i) >= 65 && writing.charCodeAt(i) <= 90) {
      const charCode = ((((writing.charCodeAt(i) - 65) + movesDone) % 26) + 65);
      cripMessage = cripMessage + String.fromCharCode(charCode);
    } 
    
    else if (writing.charCodeAt(i) >= 97 && writing.charCodeAt(i) <= 122) {
      const atCode = ((((writing.charCodeAt(i) - 97) + movesDone) % 26) + 97);
      cripMessage = cripMessage + String.fromCharCode(atCode);
    }
    else if (writing.charCodeAt(i) >= 32 && writing.charCodeAt(i) <= 64) {
      let movesDone = (moves - (parseInt (moves / 33)) * 33);
      const caraCode = ((writing.charCodeAt(i) - 32 + movesDone) % 33) + 32;
      cripMessage += String.fromCharCode(caraCode);
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
        const charCode = (((((writing.charCodeAt(i) - 65) - movesDone) +  26) % 26) + 65);
        descripMessage = descripMessage + String.fromCharCode(charCode);
      } 
      
      else if (writing.charCodeAt(i) >= 97 && writing.charCodeAt(i) <= 122) {
        const atCode = (((((writing.charCodeAt(i) - 97) - movesDone) + 26) % 26) + 97);
        descripMessage = descripMessage + String.fromCharCode(atCode);
      }
      else if (writing.charCodeAt(i) >= 32 && writing.charCodeAt(i) <= 64) {
        let movesDone = (moves - (parseInt (moves / 33)) * 33);
        const caraCode = (((((writing.charCodeAt(i) - 32) - movesDone) + 33) % 33) + 32);
        descripMessage += String.fromCharCode(caraCode);
      }

      } 
    return descripMessage;
  }
}

export default cipher;
