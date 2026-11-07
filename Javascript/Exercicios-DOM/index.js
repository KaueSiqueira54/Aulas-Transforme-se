const atividade1 = () => {
  const elementoNovo = document.createElement("h1");

  elementoNovo.setAttribute("id", "titulo");
  elementoNovo.textContent = "Olá, Visitante!";
  elementoNovo.style.border = "1px solid red";

  document.body.appendChild(elementoNovo);
};

const atividade2 = () => {
  const paragrafo = document.createElement("p");
  paragrafo.textContent = "Aviso importante";
  paragrafo.style.color = "red";
  paragrafo.style.fontSize = "24px";
  paragrafo.style.border = "1px solid blue";

  document.body.appendChild(paragrafo);
};

const atividade3 = function () {
  const uninho = document.createElement("img");
  uninho.setAttribute(
    "src",
    "https://i.ytimg.com/vi/OEVMYZcglWY/sddefault.jpg",
  );

  uninho.setAttribute("alt", "Fiat Uno Vermelho");
  document.body.append(uninho);
};

function atividade4() {
  const div = document.createElement("div");
  div.textContent = "Modo Escuro Ativado";
  div.style.color = "#fff";
  div.style.backgroundColor = "#000";

  document.body.appendChild(div);
}

const atividade5 = () => {
  let listaCompras = ["Maça", "Manga", "Fiat Uno", "Caju", "uva", "Pitaia"];

  const ul = document.createElement("ul");

  document.body.appendChild(ul);

  listaCompras.forEach((elemento) => {
    const li = document.createElement("li");
    li.textContent = elemento;
    ul.appendChild(li);
  });
};

const atividade6 = () => {
  let produto = {
    nome: "Shampoo",
    preco: 20,
  };

  const div = document.createElement("div");
  div.setAttribute("id", "vitrine");

  div.innerHTML = `<h2> ${produto.nome} </h2> <p> ${produto.preco} </p>`;

  document.body.appendChild(div);
};

atividade1();
atividade2();
atividade3();
atividade4();
atividade5();
atividade6();
