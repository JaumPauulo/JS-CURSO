let a = 'A'; //B
let b = 'B'; //C
let c = 'C'; //A

const letras = [b,c,a]; //criando uma variavel para armazenar a sequencia correta 'B,C,A';
[a,b,c] = letras //as variaveis recebem os valores na sequencia;
//console.log(a,b,c)

//... -> rest = resto (ambos dependem do CONTEXTO onde será usado!)
//... -> spread = espalhar 

const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000];
const [primeiroNumero, segundoNumero, ...resto] = numeros; // desestrutuição e atribuição (as variveis estao recebendo o valor dos primeiros numeros de const numeros);
console.log(primeiroNumero,segundoNumero);
console.log(resto);//...resto -> cria uma variavel com o resto dos valores do array (oque cria mesmo são os ...a direita disso é o nome da variavel) ;
