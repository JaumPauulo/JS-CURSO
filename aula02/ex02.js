const nome = "joao paulo";
const sobrenome = "silva";
const idade = 20;
let altura = 1.70;
let kilos = 70;
let IMC = kilos/(altura * altura);
IMC = parseFloat(IMC).toFixed(2);

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${kilos} kilos, sua altura é de ${altura} 
e seu IMC É: ${IMC}`)