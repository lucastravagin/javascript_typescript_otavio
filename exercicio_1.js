/* 
LUCAS TRAVAGIN PEREIRA TEM 23 ANOS PESA 84KG TEM 1.83 DE ALTURA E SEU IMC É DE 
LUCAS NASCEU EM 1998
*/

const nome = 'LAISE HARUMI'
const sobrenome = 'TANAKA'
const idade = 30
const peso = 50
const altura = 1.53

let imc = peso / (altura * altura)
let anoNascimento = new Date().getFullYear() - idade

console.log(`${nome} ${sobrenome} TEM ${idade} ANOS PESA ${peso}KG TEM ${altura} E SEU IMC É DE: ${imc.toFixed(2)}`)
console.log(`${nome} ${sobrenome} NASCEU EM: ${anoNascimento}`)