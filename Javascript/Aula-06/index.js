// Função - Bloco de código que executa uma determinada ação

// function olaMundo(nome) {
//   alert("Ola " + nome);
// }

// Função que soma dois números
function somar(numero1, numero2) {
  return numero1 + numero2;
}

// Uma função pode ser armazenada em variáveis e constantes
const multiplicar = function (x, y) {
  return x * y;
};

// Arrow function - função de seta - omitimos a palavra
// reservada "function" e adicionamos a seta "=>"
const dividir = (a, b) => {
  return a / b;
};

console.log(dividir(50, 5));
console.log(multiplicar(10, 5));
console.log(somar(20, 30));
