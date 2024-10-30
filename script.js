// existe 3 tipos de variaveis var, let e const = variaveis
// variavel serve para armazenar informações
// a mais usabel é a let

let nome = "Walliston"
// string é um tipo de dado textual

//console.log(nome)
// assim vai fazer aparecer o nome corretmente
//console.log("nome")
//não funciona se botar as aspas

// array [] colchetes
// array é uma lista, ela é uma variavel especial onde podemos armazenar uma lista de dados

let compras = [
    "jogos",
    "biscoito",
    "material"
]

// no array teremos um indice, que irá iniciar do 0

//console.log(compras) // mostra toda a lista

//console.log(compras[1]) // biscoito

//numero é do tipo number
let numero = [
    1,
    2,
    3,
    4,
    5
]

console.log(numero)

//metodos de array
// forma de manipular dados

// adcionando o numero 6 no array
numero.push(0)
// push() adciona/empurra no final do array

// adcionar um numero no inicio
numero.unshift(6)

numero.pop()
// vai remover o ultimo item do array

console.log(numero.join("-"))