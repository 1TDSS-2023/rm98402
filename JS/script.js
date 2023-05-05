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

// let indice = frutas.indexOf("amora");
// console.log(`elemento do índice antes da remoção : ${frutas[indice]}`);
// frutas.splice(indice,1);
// console.log(frutas);
// console.log(`elemento no índice após a remoção : ${frutas[indice]}`);

// console.table(frutas)
// frutas.forEach( (frutas)=>{
//     console.log("fruta da vez : " + frutas);
// } );

//----------------------------------------------------------------------------------------;

// let nr1 = [1,2,3,4,5];
// let nr2 = [6,7,8,9,10];
// console.log("array 1 : " + nr1);
// console.log(" array 2 : "+ nr2);

// let nr3 = [nr1,nr2];
// console.log("novo array : " + nr3);

// nr3.array.forEach((nr) => {
//     nr.forEach((n)=>{
//         console.log("itens do novo array: " + n)
//     });
//     console.log("itens do novo array : " + nr);
// });

//----------------------------------------------------------------------------------------;

// let nr1 = [1,2,3,4,5];
// let nr2 = [6,7,8,9,10];
// console.log("array 1 : " + nr1);
// console.log(" array 2 : "+ nr2);

// let nr3 = [...nr1,...nr2];
// console.log("novo array : " + nr3);

// nr3.forEach((nr) => {
//         console.log("itens do novo array: " + nr)
//     });

//----------------------------------------------------------------------------------------;

const imgElements = document.getElementsByTagName("img");

const imgElementsArray = [...imgElements];
imgElementsArray.forEach
console.log(imgElementsArray);

imgElements.array.forEach(img => {
    img.setAttribute("width", "10%");
});

const pElements = document.querySelectorAll("p");
console.log(pElements.item.name(0));

