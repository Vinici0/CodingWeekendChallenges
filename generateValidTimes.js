/*
    Retos propuestos:

    Reloj digital:
    Genera todas las combinaciones posibles de un reloj digital de 24 horas con 4 dígitos. Por ejemplo:

    12:34 es válido.

    25:61 no es válido.
    El objetivo es que vuestro programa imprima o devuelva todas las combinaciones válidas. ⏰
*/

/**
 * @param {string[]} text
 * @return {string}
 */
const generateValidTimes = (timeString = "") => {
  const [hours, minutes] = timeString.split(":");
  if (hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59) {
    return `${timeString} es válido.`;
  }

  return `${timeString} no es válido.`;
};

console.log(generateValidTimes("12:34"));
console.log(generateValidTimes("25:61"));
