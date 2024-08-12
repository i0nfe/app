//Marcação do item ativo do menu

$(document).ready(function () {
  $(".bottom-nav li a").click(function () {
    var position = $(this).position();

    var margin = 37;

    $(".slider").css({
      left: +position.left + margin,
      transform: "translateX(-50%)",
    });
    $(".bottom-nav li a").removeClass("active-icon");
    $(this).addClass("active-icon");
  });
});

// DATA ATUAL

// Função para obter a data atual em Brasília
function obterDataBrasilia() {
  // Obtém a data atual
  let dataAtual = new Date();

  // Ajusta o fuso horário para Brasília (UTC-3)
  dataAtual.setHours(dataAtual.getHours() - 3);

  // Formata a data para exibição
  let dia = dataAtual.getDate().toString().padStart(2, "0");
  let mes = (dataAtual.getMonth() + 1).toString().padStart(2, "0");
  let ano = dataAtual.getFullYear();

  // Retorna a data formatada
  return `${dia}/${mes}/${ano}`;
}

// Obtém o elemento com o ID #melhoresData
let melhoresDataElemento = document.getElementById("melhoresData");

// Define o conteúdo do elemento como a data atual de Brasília
melhoresDataElemento.textContent = obterDataBrasilia();

// FIM DATA ATUAL

// VALOR SACADO

//<------- FORTUNE DRAGON ------->

// Função para gerar um número aleatório dentro de um intervalo específico
function numeroAleatorio(min, max) {
  return Math.random() * (max - min) + min;
}

// Função para atualizar o valor da classe .valor-dragon
function atualizarValorDragon() {
  let valorInicial = parseFloat(localStorage.getItem("valorInicial"));
  let valorFinal = 112560.32; // Defina o valor final desejado

  if (!valorInicial || valorInicial >= valorFinal) {
    // Reinicia o valor inicial
    valorInicial = numeroAleatorio(21256.63, 24786.87);
    localStorage.setItem("valorInicial", valorInicial.toFixed(2));
  }

  let valorIncremento = numeroAleatorio(126.02, 271.23);

  // Incrementa o valor inicial
  valorInicial += valorIncremento;

  // Exibe o valor na página
  const valoresDragon = document.querySelectorAll(".valor-dragon");
  valoresDragon.forEach((elemento) => {
    elemento.textContent = valorInicial.toFixed(2);
  });

  // Salva o novo valor inicial no armazenamento local
  localStorage.setItem("valorInicial", valorInicial.toString());
}

// Chama a função inicialmente
atualizarValorDragon();

// Chama a função a cada 10 segundos
var intervalID = setInterval(atualizarValorDragon, 10000);

//<------- FIM FORTUNE DRAGON ------->

//<------- FORTUNE TIGER ------->

// Função para gerar um número aleatório dentro de um intervalo específico
function numeroAleatorio(min, max) {
  return Math.random() * (max - min) + min;
}

// Função para atualizar o valor da classe .valor-tiger
function atualizarValorTiger() {
  let valorInicial = parseFloat(localStorage.getItem("valorInicialTiger"));
  let valorFinal = 110965.32; // Defina o valor final desejado

  if (!valorInicial || valorInicial >= valorFinal) {
    // Reinicia o valor inicial
    valorInicial = numeroAleatorio(19125.31, 22882.76);
    localStorage.setItem("valorInicialTiger", valorInicial.toFixed(2));
  }

  let valorIncremento = numeroAleatorio(106.02, 245.29);

  // Incrementa o valor inicial
  valorInicial += valorIncremento;

  // Exibe o valor na página
  const valoresTiger = document.querySelectorAll(".valor-tiger");
  valoresTiger.forEach((elemento) => {
    elemento.textContent = valorInicial.toFixed(2);
  });

  // Salva o novo valor inicial no armazenamento local
  localStorage.setItem("valorInicialTiger", valorInicial.toString());
}

// Chama a função inicialmente
atualizarValorTiger();

// Chama a função a cada 10 segundos
var intervalIDTiger = setInterval(atualizarValorTiger, 10000);

//<------- FIM FORTUNE TIGER ------->

//<------- FORTUNE OX ------->

// Função para gerar um número aleatório dentro de um intervalo específico
function numeroAleatorio(min, max) {
  return Math.random() * (max - min) + min;
}

// Função para atualizar o valor da classe .valor-ox
function atualizarValorOx() {
  let valorInicial = parseFloat(localStorage.getItem("valorInicialOx"));
  let valorFinal = 108765.87; // Defina o valor final desejado

  if (!valorInicial || valorInicial >= valorFinal) {
    // Reinicia o valor inicial
    valorInicial = numeroAleatorio(17185.31, 20822.76);
    localStorage.setItem("valorInicialOx", valorInicial.toFixed(2));
  }

  let valorIncremento = numeroAleatorio(99.02, 222.29);

  // Incrementa o valor inicial
  valorInicial += valorIncremento;

  // Exibe o valor na página
  const valoresOx = document.querySelectorAll(".valor-ox");
  valoresOx.forEach((elemento) => {
    elemento.textContent = valorInicial.toFixed(2);
  });

  // Salva o novo valor inicial no armazenamento local
  localStorage.setItem("valorInicialOx", valorInicial.toString());
}

// Chama a função inicialmente
atualizarValorOx();

// Chama a função a cada 10 segundos
var intervalIDOx = setInterval(atualizarValorOx, 10000);

//<------- FIM FORTUNE OX ------->

//<------- FORTUNE MOUSE ------->

// Função para gerar um número aleatório dentro de um intervalo específico
function numeroAleatorio(min, max) {
  return Math.random() * (max - min) + min;
}

// Função para atualizar o valor da classe .valor-mouse
function atualizarValorMouse() {
  let valorInicial = parseFloat(localStorage.getItem("valorInicialMouse"));
  let valorFinal = 106931.15; // Defina o valor final desejado

  if (!valorInicial || valorInicial >= valorFinal) {
    // Reinicia o valor inicial
    valorInicial = numeroAleatorio(17325.31, 20282.76);
    localStorage.setItem("valorInicialMouse", valorInicial.toFixed(2));
  }

  let valorIncremento = numeroAleatorio(94.26, 210.29);

  // Incrementa o valor inicial
  valorInicial += valorIncremento;

  // Exibe o valor na página
  const valoresMouse = document.querySelectorAll(".valor-mouse");
  valoresMouse.forEach((elemento) => {
    elemento.textContent = valorInicial.toFixed(2);
  });

  // Salva o novo valor inicial no armazenamento local
  localStorage.setItem("valorInicialMouse", valorInicial.toString());
}

// Chama a função inicialmente
atualizarValorMouse();

// Chama a função a cada 10 segundos
var intervalIDMouse = setInterval(atualizarValorMouse, 10000);

//<------- FIM FORTUNE MOUSE ------->

//<------- FORTUNE RABBIT ------->

// Função para gerar um número aleatório dentro de um intervalo específico
function numeroAleatorio(min, max) {
  return Math.random() * (max - min) + min;
}

// Função para atualizar o valor da classe .valor-rabbit
function atualizarValorRabbit() {
  let valorInicial = parseFloat(localStorage.getItem("valorInicialRabbit"));
  let valorFinal = 104965.32; // Defina o valor final desejado

  if (!valorInicial || valorInicial >= valorFinal) {
    // Reinicia o valor inicial
    valorInicial = numeroAleatorio(15455.11, 18654.76);
    localStorage.setItem("valorInicialRabbit", valorInicial.toFixed(2));
  }

  let valorIncremento = numeroAleatorio(90.23, 195.29);

  // Incrementa o valor inicial
  valorInicial += valorIncremento;

  // Exibe o valor na página
  const valoresRabbit = document.querySelectorAll(".valor-rabbit");
  valoresRabbit.forEach((elemento) => {
    elemento.textContent = valorInicial.toFixed(2);
  });

  // Salva o novo valor inicial no armazenamento local
  localStorage.setItem("valorInicialRabbit", valorInicial.toString());
}

// Chama a função inicialmente
atualizarValorRabbit();

// Chama a função a cada 10 segundos
var intervalIDRabbit = setInterval(atualizarValorRabbit, 10000);

//<------- FIM FORTUNE RABBIT ------->

//<------- MINES ------->

// Função para gerar um número aleatório dentro de um intervalo específico
function numeroAleatorio(min, max) {
  return Math.random() * (max - min) + min;
}

// Função para atualizar o valor da classe .valor-mines
function atualizarValorMinesSaque() {
  let valorInicial = parseFloat(localStorage.getItem("valorInicialMines"));
  let valorFinal = 102365.99; // Defina o valor final desejado

  if (!valorInicial || valorInicial >= valorFinal) {
    // Reinicia o valor inicial
    valorInicial = numeroAleatorio(12455.11, 15654.76);
    localStorage.setItem("valorInicialMines", valorInicial.toFixed(2));
  }

  let valorIncremento = numeroAleatorio(90.23, 195.29);

  // Incrementa o valor inicial
  valorInicial += valorIncremento;

  // Exibe o valor na página
  const valoresMines = document.querySelectorAll(".valor-mines");
  valoresMines.forEach((elemento) => {
    elemento.textContent = valorInicial.toFixed(2);
  });

  // Salva o novo valor inicial no armazenamento local
  localStorage.setItem("valorInicialMines", valorInicial.toString());
}

// Chama a função inicialmente
atualizarValorMinesSaque();

// Chama a função a cada 10 segundos
var intervalIDMines = setInterval(atualizarValorMinesSaque, 10000);

//<------- FIM MINES ------->

//<------- CRASH ------->

// Função para gerar um número aleatório dentro de um intervalo específico
function numeroAleatorio(min, max) {
  return Math.random() * (max - min) + min;
}

// Função para atualizar o valor da classe .valor-crash
function atualizarValorCrashSaque() {
  let valorInicial = parseFloat(localStorage.getItem("valorInicialCrash"));
  let valorFinal = 108487.12; // Defina o valor final desejado

  if (!valorInicial || valorInicial >= valorFinal) {
    // Reinicia o valor inicial
    valorInicial = numeroAleatorio(15455.11, 19654.76);
    localStorage.setItem("valorInicialCrash", valorInicial.toFixed(2));
  }

  let valorIncremento = numeroAleatorio(99.23, 210.29);

  // Incrementa o valor inicial
  valorInicial += valorIncremento;

  // Exibe o valor na página
  const valoresCrash = document.querySelectorAll(".valor-crash");
  valoresCrash.forEach((elemento) => {
    elemento.textContent = valorInicial.toFixed(2);
  });

  // Salva o novo valor inicial no armazenamento local
  localStorage.setItem("valorInicialCrash", valorInicial.toString());
}

// Chama a função inicialmente
atualizarValorCrashSaque();

// Chama a função a cada 10 segundos
var intervalIDCrash = setInterval(atualizarValorCrashSaque, 10000);

//<------- FIM CRASH ------->

//  FIM VALOR SACADO

// <------- NOMES E PIX ------->

// Função para obter um nome aleatório do array de nomes
function obterNomeAleatorio(nomes) {
  const indice = Math.floor(Math.random() * nomes.length);
  const nomeAleatorio = nomes[indice];
  nomes.splice(indice, 1); // Remove o nome selecionado do array
  return nomeAleatorio;
}

// Função para obter um valor aleatório do array de valores
function obterValorAleatorio(valores) {
  const indice = Math.floor(Math.random() * valores.length);
  const valorAleatorio = valores[indice];
  valores.splice(indice, 1); // Remove o valor selecionado do array
  return valorAleatorio;
}

// Função para atualizar os spans com nomes e valores aleatórios
function atualizarNomesEValores() {
  const nomes = [
    "Ana***",
    "João***",
    "Maria***",
    "Pedro***",
    "Mariana***",
    "Lucas***",
    "Gabriela***",
    "Carlos***",
    "Juliana***",
    "Rafael***",
    "Fernanda***",
    "Diego***",
    "Camila***",
    "Thiago***",
    "Laura***",
    "Felipe***",
    "Bruna***",
    "Gustavo***",
    "Isabela***",
    "Rodrigo***",
    "Vitória***",
    "Daniel***",
    "Amanda***",
    "Vinícius***",
    "Carolina***",
    "Matheus***",
    "Natália***",
    "Arthur***",
    "Beatriz***",
    "Leandro***",
    "Tatiane***",
    "Leonardo***",
    "Vanessa***",
    "Renan***",
    "Larissa***",
    "Eduardo***",
    "Luana***",
    "Alexandre***",
    "Patrícia***",
    "Guilherme***",
    "Jéssica***",
    "Luiz***",
    "Sara***",
    "André***",
    "Bianca***",
    "Ricardo***",
    "Letícia***",
    "Marcelo***",
    "Kelly***",
    "Hugo***",
    "Fernanda***",
    "José***",
    "Carla***",
    "Thales***",
    "Débora***",
    "Ronaldo***",
    "Tatiana***",
    "Nathan***",
    "Elaine***",
    "Roberto***",
    "Monica***",
    "Luciano***",
    "Sabrina***",
    "Paulo***",
    "Raquel***",
    "Fábio***",
    "Andressa***",
    "Wagner***",
    "Fernanda***",
    "Adriano***",
    "Renata***",
    "Diego***",
    "Sandra***",
    "Thiago***",
    "Cristina***",
    "Bruno***",
    "Aline***",
    "Márcio***",
    "Fabiana***",
    "Antônio***",
    "Michele***",
    "Cláudio***",
    "Priscila***",
    "Júlio***",
    "Talita***",
    "Rogério***",
    "Caroline***",
    "Douglas***",
    "Ana Paula***",
    "Marcela***",
    "Cássio***",
    "Tainara***",
    "Raphael***",
    "Jaqueline***",
    "Jorge***",
    "Fernanda***",
    "Igor***",
    "Mariana***",
    "Maurício***",
    "Mirella***",
    "Erick***",
    "Juliana***",
    "Jonathan***",
    "Andréa***",
    "Bruno***",
    "Cintia***",
    "Diego***",
    "Gisele***",
    "Paulo***",
    "Márcia***",
    "Renato***",
    "Andrea***",
    "Caio***",
    "Fabíola***",
    "Eduardo***",
    "Janaína***",
    "Felipe***",
    "Renata***",
    "Felipe***",
    "Fernanda***",
    "Gabriel***",
    "Patricia***",
    "Gustavo***",
    "Lívia***",
    "Heitor***",
    "Tatiane***",
    "Igor***",
    "Vanessa***",
    "Israel***",
    "Carolina***",
    "João***",
    "Fabíola***",
    "Kaique***",
    "Angélica***",
    "Lucas***",
    "Tainá***",
    "Luiz***",
    "Karina***",
    "Marcos***",
    "Daniela***",
    "Miguel***",
    "Brenda***",
    "Nathan***",
    "Denise***",
    "Pedro***",
    "Letícia***",
    "Rafael***",
    "Jéssica***",
    "Rodrigo***",
    "Amanda***",
    "Samuel***",
    "Márcia***",
    "Thiago***",
    "Carla***",
    "Victor***",
    "Fernanda***",
    "Vinícius***",
    "Caroline***",
    "Maria Eduarda***",
    "Luan***",
    "Evelyn***",
    "Ramon***",
    "Lara***",
    "Breno***",
    "Lorena***",
    "Cauã***",
    "Luiza***",
    "Joana***",
    "Renan***",
    "Mirella***",
    "Thales***",
    "Emilly***",
    "Nathan***",
    "Heloísa***",
    "Yuri***",
    "Melissa***",
    "Vinicius***",
    "Carolina***",
    "Murilo***",
    "Nicole***",
    "Cristian***",
    "Laura***",
    "Tiago***",
    "Beatriz***",
    "Eduarda***",
    "Thiago***",
    "Ana Beatriz***",
    "Maurício***",
    "Isadora***",
    "Enzo***",
    "Aline***",
    "Vinícius***",
    "Raquel***",
    "Bruno***",
    "Ana Clara***",
    "Guilherme***",
    "Gabrielle***",
    "Caio***",
    "Natalia***",
    "Rafael***",
    "Isabel***",
    "Vitória***",
    "Ricardo***",
    "Catarina***",
    "Yago***",
    "Sophia***",
    "Luan***",
    "Larissa***",
    "Ruan***",
    "Stella***",
    "Rodrigo***",
    "Amanda***",
    "Fernanda***",
    "Vitor***",
    "Cecília***",
    "Gabriel***",
    "Ana Luiza***",
    "Davi***",
    "Manuela***",
    "Felipe***",
    "Sophie***",
    "Marcos***",
    "Maria Clara***",
    "João Victor***",
    "Valentina***",
    "Lucas***",
    "Ana Julia***",
    "João Pedro***",
    "Isabella***",
    "Pedro Henrique***",
    "Helena***",
    "Gustavo***",
    "Lívia***",
    "Théo***",
    "Isadora***",
    "João Gabriel***",
    "Luana***",
    "Leonardo***",
    "Maria Luiza***",
    "Daniel***",
    "Eloá***",
    "Arthur***",
    "Isis***",
    "Matheus***",
    "Helena***",
    "Heitor***",
    "Lara***",
    "Emanuel***",
    "Antonella***",
    "Benício***",
    "Mariana***",
    "Eduardo***",
    "Ana Sophia***",
    "Enzo Gabriel***",
    "Lavínia***",
    "Lucas Gabriel***",
    "Laura***",
    "Joaquim***",
    "Lívia***",
    "Felipe***",
    "Luana***",
    "Davi Luiz***",
    "Sophia***",
    "Gabriel***",
    "Luiza***",
    "Breno***",
    "Heloísa***",
    "Luan***",
    "Rafaela***",
    "Thiago***",
    "Isabelly***",
    "Ruan***",
    "Melissa***",
    "Vitor***",
    "Carolina***",
    "Cecília***",
    "Ana Clara***",
    "Francisco***",
    "Nicole***",
    "Caio***",
    "Fernanda***",
    "Augusto***",
    "Valentina***",
    "Pedro***",
    "Gabriela***",
    "Luiz Felipe***",
    "Yasmin***",
    "João Lucas***",
    "Clara***",
    "Gabriel***",
    "Larissa***",
    "Arthur***",
    "Isabela***",
    "Rodrigo***",
    "Rafaela***",
    "Carlos***",
    "Stella***",
    "Nícolas***",
    "Ana Luiza***",
    "Raul***",
    "Sophie***",
    "Pedro Henrique***",
    "Júlia***",
    "Matheus***",
    "Maria Eduarda***",
    "João Guilherme***",
    "Maria Vitória***",
    "Guilherme***",
    "Sophia***",
    "Arthur***",
    "Isadora***",
    "Bryan***",
    "Lívia***",
    "João Miguel***",
    "Larissa***",
    "Henrique***",
    "Beatriz***",
    "Diego***",
    "Rafaela***",
    "Lucca***",
    "Cecília***",
    "João Paulo***",
    "Lara***",
    "Caio***",
    "Catarina***",
    "Davi Lucas***",
  ];

  const valores = [
    "665.15",
    "788.32",
    "351.08",
    "557.77",
    "235.54",
    "694.19",
    "244.78",
    "842.67",
    "376.12",
    "664.31",
    "393.09",
    "691.53",
    "274.46",
    "366.23",
    "356.89",
    "710.48",
    "356.11",
    "761.02",
    "528.66",
    "617.48",
    "298.77",
    "396.85",
    "548.71",
    "916.89",
    "315.47",
    "247.53",
    "858.63",
    "247.65",
    "299.32",
    "260.78",
    "237.45",
    "257.89",
    "702.13",
    "512.34",
    "207.89",
    "794.24",
    "687.56",
    "476.24",
    "615.69",
    "181.28",
    "429.36",
    "297.85",
    "824.67",
    "671.45",
    "353.11",
    "165.68",
    "183.76",
    "556.91",
    "827.15",
    "916.73",
    "641.09",
    "556.24",
    "811.58",
    "290.89",
    "690.26",
    "712.57",
    "452.33",
    "288.34",
    "177.26",
    "804.67",
    "517.89",
    "236.58",
    "157.48",
    "589.23",
    "295.67",
    "384.25",
    "812.34",
    "557.65",
    "442.79",
    "231.79",
    "619.87",
    "443.78",
    "625.78",
    "736.34",
    "326.78",
    "274.56",
    "756.87",
    "278.69",
    "716.42",
    "306.45",
    "572.68",
    "319.45",
    "588.94",
    "220.91",
    "736.45",
    "429.69",
    "193.78",
    "584.56",
    "423.69",
    "632.78",
    "716.89",
    "424.56",
    "424.89",
    "531.78",
    "289.45",
    "335.78",
    "477.78",
    "728.67",
    "540.89",
    "329.12",
    "177.89",
    "477.89",
    "546.89",
    "228.78",
    "842.56",
    "494.56",
    "576.78",
    "338.67",
    "222.78",
    "257.89",
    "882.67",
    "158.67",
    "392.45",
    "786.89",
    "369.67",
    "352.67",
    "224.56",
    "478.78",
    "536.23",
    "439.89",
    "272.78",
    "747.68",
    "516.78",
    "565.89",
    "515.69",
    "346.89",
    "222.67",
    "455.78",
    "174.89",
    "211.67",
    "327.67",
    "222.89",
    "849.45",
    "568.67",
    "753.67",
    "847.78",
    "178.89",
    "641.67",
    "217.89",
    "254.89",
    "633.89",
    "795.45",
    "208.89",
    "747.89",
    "838.23",
    "289.89",
    "838.67",
    "585.89",
    "519.67",
    "258.89",
    "227.67",
    "159.89",
    "793.67",
    "273.89",
    "225.78",
    "457.78",
    "845.67",
    "656.78",
    "362.89",
    "646.67",
    "512.67",
    "288.78",
    "367.89",
    "222.67",
    "589.78",
    "185.67",
    "325.89",
    "575.89",
    "865.78",
    "542.67",
    "176.67",
    "174.89",
    "426.67",
    "453.89",
    "442.67",
    "623.89",
    "341.78",
    "744.89",
    "587.67",
    "192.89",
    "434.67",
    "526.78",
    "826.89",
    "494.89",
    "292.67",
    "477.67",
    "223.89",
    "724.67",
    "722.67",
    "499.78",
    "579.78",
    "456.89",
    "279.78",
    "379.67",
    "769.67",
    "754.78",
    "918.67",
    "579.89",
    "386.89",
    "366.78",
  ];

  // Obtém todos os elementos com a classe 'nomeSpan' e 'valorSpan'
  const nomeSpans = document.querySelectorAll(".nomeSpan");
  const valorSpans = document.querySelectorAll(".valorSpan");

  // Atualiza os elementos HTML com os nomes e valores aleatórios
  for (let i = 0; i < nomeSpans.length; i++) {
    const nomeAleatorio = obterNomeAleatorio(nomes);
    const valorAleatorio = obterValorAleatorio(valores);

    nomeSpans[i].textContent = nomeAleatorio;
    valorSpans[i].textContent = valorAleatorio;
  }
}

// Chamar a função para atualizar os spans quando a página é carregada
window.onload = function () {
  atualizarNomesEValores();
};

// <------- FIM NOMES E PIX ------->

// SRC IFRAME

// FIM SRC IFRAME
