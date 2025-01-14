/* 
  Generador de acrónimos:
  Dado un título, genera su acrónimo. Por ejemplo:

  "HyperText Markup Language" -> "HTML".

  "As Soon As Possible" -> "ASAP".
  El programa debe poder procesar cualquier frase y devolver su acrónimo. 🔠
*/


/**
 * @param {string[]} text
 * @return {string}
*/
const generateAcronym = (text = []) => {
    let uppercaseLetters = "";
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
        uppercaseLetters += char;
      }
    }
    return uppercaseLetters;
  };
  
  console.log(extractUppercaseLetters("HyperText Markup Language"));
  console.log(extractUppercaseLetters("As Soon As Possible"));
  
  
  