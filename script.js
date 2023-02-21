let botao = document.getElementById("botao");

function criarTabela() {
  let inputData = document.getElementById("date");
  let inputCategoria = document.getElementById("categoria");
  let inputValor = document.getElementById("valor");
  let tabela = document.querySelector(".tabela table tbody"); // selecionando tbody da table
  let categoria = inputCategoria.value; // adicionando valor dos inputs às váriaveis
  let data = inputData.value;
  let dataObj = new Date(data); // trocando o formato da data para dd/mm/aaaa
  let dataFormatada =
    dataObj.getDate() +
    "/" +
    (dataObj.getMonth() + 1) +
    "/" +
    dataObj.getFullYear();
  let valor = inputValor.value;
  let caixa = document.querySelector(".caixa-invalido");
  if (valor === "") {
    caixa.style.display = "block";
    return;
  } else {
    caixa.style.display = "none";
  }

  // Criando array com os itens
  let itens = [dataFormatada, categoria, valor];
  let linha = tabela.insertRow();
  // criando tabela com loop para passar por todos os itens e adicionar uma célula na tabela
  for (let i = 0; i < itens.length; i++) {
    let celula = linha.insertCell();
    let newText = document.createTextNode(itens[i]);
    celula.appendChild(newText);
  }
}

botao.addEventListener("click", criarTabela);
