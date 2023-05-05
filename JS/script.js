"use strict";
// let frutas = ["banana", "maçã", "laranja", "morango", "uva", "amora", "cereja", "abacaxi"]

// console.log(frutas);

// console.log(`Tamanho do aray é ${frutas.length}`)

// frutas.push("pêssego")
// console.log(frutas)

// frutas.unshift("kiwi")
// console.log(frutas)

// frutas.pop();
// console.log(frutas);

// frutas.shift();
// console.log(frutas);

// let indice = frutas.indexOf("uva");
// console.log(`indice do item buscado ${indice}`);
// console.log(`elemento buscado : ${frutas[indice]}`);

// -----------------------------------------------------------------------------------;

let indice = frutas.indexOf("amora");
console.log(`elemento do índice antes da remoção : ${frutas[indice]}`);
frutas.splice(indice,1);
console.log(frutas);
console.log(`elemento no índice após a remoção : ${frutas[indice]}`);
