/* 
LUCAS TRAVAGIN PEREIRA TEM 23 ANOS PESA 84KG TEM 1.83 DE ALTURA E SEU IMC É DE 
LUCAS NASCEU EM 1998
*/

const nome = 'JHON'
const sobrenome = 'DOE'
const idade = 50
const peso = 112
const altura = 1.98

let imc = peso / (altura * altura)
let anoNascimento = new Date().getFullYear() - idade

console.log(`${nome} ${sobrenome} TEM ${idade} ANOS PESA ${peso}KG TEM ${altura} E SEU IMC É DE: ${imc.toFixed(2)}`)
console.log(`${nome} ${sobrenome} NASCEU EM: ${anoNascimento}`)