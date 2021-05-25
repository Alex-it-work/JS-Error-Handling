"use strict";
// Для рекурсивной функции возведения числа в степень pow(base, exponent) реализовать валидацию передаваемых значений и генерацию ошибок соостветствующих типов.
// Вызов функции заключить в блок try с отлавливанием исключительных ситуаций (ошибок) разных типов с оповещением пользователя о типе наступившей ошибки.

function pow(base, exponent) {
  //   if (typeof variable !== "undefined") {
  //     //  is not defined
  //   }
  if (typeof base !== "number" && typeof exponent !== "number") {
    throw new TypeError("The base and exponent must be number value");
  }
  if (!Number.isFinite(base) && !Number.isFinite(exponent)) {
    throw new RangeError("The base and exponent must be a finite value");
  }
  if (!Number.isSafeInteger(exponent)) {
    throw new RangeError("The exponent must be integer value");
  }
  if (exponent < 0) {
    return 1 / positiveExponentPow(base, Math.abs(exponent));
  }
  return positiveExponentPow(base, exponent);
  function positiveExponentPow(base, exponent) {
    return exponent === 0 ? 1 : base * pow(base, exponent - 1);
  }
}
try {
  console.log(pow(3, -3));
} catch (error) {
  if (error instanceof TypeError) {
    alert("Input a number value pls");
  }
  if (error instanceof ReferenceError) {
    alert("Declarate your value"); // не знаю как написать более понятно
  }
  if (error instanceof RangeError) {
    alert("Input finite base and exponent(exponent must be integer) pls");
  }
  // бесполезно
  //   if (error instanceof InternalError) {
  //     alert("To big exponent");
  //   }
  if (error instanceof Error) {
    alert("Try again later please");
  }
  //   throw error;
}
