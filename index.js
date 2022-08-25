/* 
Criar um projeto onde Wilson Pereira Júnior tem 30 anos, pesa 87 kg, tem 1.82 de altura e seu IMC
é de 25.925925925925924
Wilson Pereira nasceu em 1985
*/

const nomE = 'Wilson Pereira';
const sobrenome = 'Júnior';
const idade = 37;
const peso = 87;
const alturaEmCM = 1.82;
let indiceMassaCorporal1;   // peso / (altura * altura )
let anoNascimento;
indiceMassaCorporal1 = peso / (alturaEmCM * alturaEmCM);
anoNascimento = 2022 - idade;


console.log ( `${nomE} ${sobrenome} tem ${idade}anos e pesa ${peso} de altura e seu IMC é de ${indiceMassaCorporal1}`);
console.log (`${nomE} nasceu em ${anoNascimento}`);