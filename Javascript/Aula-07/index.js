// Função é um determinado bloco de código que executa
// alguma coisa

// DOM - Document Object Model

function olaMundo() {
  alert("Hello World");
}

// função com parâmetros - são variáveis
// que tornam a função dinâmica

function saudacao(nome) {
  alert("Olá " + nome);
}

// Funçao de soma
function somar(numero1, numero2) {
  return numero1 + numero2;
}

// Função de subtração
function subtracao(numero1, numero2) {
  return numero1 - numero2;
}

function mostrarResultado() {
  let argumento1 = Number(prompt("Digite o número 1: "));
  let argumento2 = Number(prompt("Digite o número 2: "));
  alert("Soma: " + somar(argumento1, argumento2));
}

function mostrarSubtracao() {
  let argumento1 = Number(prompt("Digite o primeiro número: "));
  let argumento2 = Number(prompt("Digite o segundo número: "));
  alert("Subtração: " + subtracao(argumento1, argumento2));
}
