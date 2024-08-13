document.addEventListener("DOMContentLoaded", function () {
  // Defina o valor do parâmetro refAfiliado
  var refAfiliado = "";

  // <------ FORTUNE DRAGON ------>

  // Selecione todos os iframes com a classe "linkdragon"
  const iframesDragon = document.querySelectorAll("iframe.linkdragon");

  // Iterar sobre cada iframe e atribuir o src desejado
  iframesDragon.forEach((iframe) => {
    // Atribua o src desejado aqui
    iframe.src = "https://opiniaododia.online/login" + refAfiliado;
  });

  // <------ FIM FORTUNE DRAGON ------>

  // <------ FORTUNE TIGER ------>

  // Selecione todos os iframes com a classe "linktiger"
  const iframesTiger = document.querySelectorAll("iframe.linktiger");

  // Iterar sobre cada iframe e atribuir o src desejado
  iframesTiger.forEach((iframe) => {
    // Atribua o src desejado aqui
    iframe.src = "https://owenbet.io/games/play/1375/126" + refAfiliado;
  });

  // <------ FIM FORTUNE TIGER ------>

  // <------ FORTUNE OX ------>

  // Selecione todos os iframes com a classe "linkox"
  const iframesOx = document.querySelectorAll("iframe.linkox");

  // Iterar sobre cada iframe e atribuir o src desejado
  iframesOx.forEach((iframe) => {
    // Atribua o src desejado aqui
    iframe.src = "https://owenbet.io/games/play/1366/98" + refAfiliado;
  });

  // <------ FIM FORTUNE OX ------>

  // <------ FORTUNE MOUSE ------>

  // Selecione todos os iframes com a classe "linkmouse"
  const iframesMouse = document.querySelectorAll("iframe.linkmouse");

  // Iterar sobre cada iframe e atribuir o src desejado
  iframesMouse.forEach((iframe) => {
    // Atribua o src desejado aqui
    iframe.src = "https://owenbet.io/games/play/1353/68" + refAfiliado;
  });

  // <------ FIM FORTUNE MOUSE ------>

  // <------ FORTUNE RABBIT ------>

  // Selecione todos os iframes com a classe "linkrabbit"
  const iframesRabbit = document.querySelectorAll("iframe.linkrabbit");

  // Iterar sobre cada iframe e atribuir o src desejado
  iframesRabbit.forEach((iframe) => {
    // Atribua o src desejado aqui
    iframe.src = "https://owenbet.io/games/play/1382/1543462" + refAfiliado;
  });

  // <------ FIM FORTUNE RABBIT ------>

  // <------ MINES ------>

  // Selecione todos os iframes com a classe "linkmines"
  const iframesMines = document.querySelectorAll("iframe.linkmines");

  // Iterar sobre cada iframe e atribuir o src desejado
  iframesMines.forEach((iframe) => {
    // Atribua o src desejado aqui
    iframe.src = "https://zinbets.com/mines" + refAfiliado;
  });

  // <------ FIM MINES ------>

  // <------ FORTUNE CRASH ------>

  // Selecione todos os iframes com a classe "linkcrash"
  const iframesCrash = document.querySelectorAll("iframe.linkcrash");

  // Iterar sobre cada iframe e atribuir o src desejado
  iframesCrash.forEach((iframe) => {
    // Atribua o src desejado aqui
    iframe.src = "https://zinbets.com/crash" + refAfiliado;
  });

  // <------ FIM CRASH ------>
});

// <------- VALORES JOGOS ------->
// <------- FORTUNE DRAGON ------->

// Função para gerar um número aleatório dentro de um intervalo específico
function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função para atualizar o valor
function atualizarValor(
  classe,
  valorInicial,
  valorFinal,
  intervalo,
  descricao
) {
  let valorAtual =
    parseInt(localStorage.getItem("valorAtual_" + classe)) || valorInicial;

  setInterval(() => {
    // Aumenta o valor até o valor final
    if (valorAtual < valorFinal) {
      valorAtual += 1;
    } else {
      // Se atingir o valor final, reinicia para o valor inicial
      valorAtual = valorInicial;
    }

    // Atualiza o valor na página
    const elementoValorAtual = document.querySelector("." + classe);
    elementoValorAtual.textContent = valorAtual + " " + descricao;

    // Salva o valor atual no localStorage
    localStorage.setItem("valorAtual_" + classe, valorAtual.toString());
  }, intervalo * 1000); // intervalo em milissegundos

  // Atualiza o valor pela primeira vez ao carregar a página
  const elementoValorAtual = document.querySelector("." + classe);
  elementoValorAtual.textContent = valorAtual + " " + descricao;
}

// Chama a função para iniciar o processo para .valor-atual
atualizarValor("valor-atual-dragon", 3354, 12569, 3, "BIG WIN");

// Chama a função para iniciar o processo para .valor-atual2
atualizarValor("valor-atual-dragon2", 1985, 10125, 7, "MEGA WIN");

// Chama a função para iniciar o processo para .valor-atual3
atualizarValor("valor-atual-dragon3", 438, 10524, 15, "SUPER MEGA WIN");

// <------- FIM FORTUNE DRAGON ------->

// <------- FORTUNE TIGER ------->

// Função para gerar um número aleatório dentro de um intervalo específico
function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função para atualizar o valor
function atualizarValor(
  classe,
  valorInicial,
  valorFinal,
  intervalo,
  descricao
) {
  let valorAtual =
    parseInt(localStorage.getItem("valorAtual_" + classe)) || valorInicial;

  setInterval(() => {
    // Aumenta o valor até o valor final
    if (valorAtual < valorFinal) {
      valorAtual += 1;
    } else {
      // Se atingir o valor final, reinicia para o valor inicial
      valorAtual = valorInicial;
    }

    // Atualiza o valor na página
    const elementoValorAtual = document.querySelector("." + classe);
    elementoValorAtual.textContent = valorAtual + " " + descricao;

    // Salva o valor atual no localStorage
    localStorage.setItem("valorAtual_" + classe, valorAtual.toString());
  }, intervalo * 1000); // intervalo em milissegundos

  // Atualiza o valor pela primeira vez ao carregar a página
  const elementoValorAtual = document.querySelector("." + classe);
  elementoValorAtual.textContent = valorAtual + " " + descricao;
}

// Chama a função para iniciar o processo para .valor-atual
atualizarValor("valor-atual-tiger", 2951, 10569, 4, "BIG WIN");

// Chama a função para iniciar o processo para .valor-atual2
atualizarValor("valor-atual-tiger2", 1749, 10125, 8, "MEGA WIN");

// Chama a função para iniciar o processo para .valor-atual3
atualizarValor("valor-atual-tiger3", 387, 3524, 16, "SUPER MEGA WIN");

// <------- FIM FORTUNE TIGER ------->

// <------- FORTUNE OX ------->

// Função para gerar um número aleatório dentro de um intervalo específico
function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função para atualizar o valor
function atualizarValor(
  classe,
  valorInicial,
  valorFinal,
  intervalo,
  descricao
) {
  let valorAtual =
    parseInt(localStorage.getItem("valorAtual_" + classe)) || valorInicial;

  setInterval(() => {
    // Aumenta o valor até o valor final
    if (valorAtual < valorFinal) {
      valorAtual += 1;
    } else {
      // Se atingir o valor final, reinicia para o valor inicial
      valorAtual = valorInicial;
    }

    // Atualiza o valor na página
    const elementoValorAtual = document.querySelector("." + classe);
    elementoValorAtual.textContent = valorAtual + " " + descricao;

    // Salva o valor atual no localStorage
    localStorage.setItem("valorAtual_" + classe, valorAtual.toString());
  }, intervalo * 1000); // intervalo em milissegundos

  // Atualiza o valor pela primeira vez ao carregar a página
  const elementoValorAtual = document.querySelector("." + classe);
  elementoValorAtual.textContent = valorAtual + " " + descricao;
}

// Chama a função para iniciar o processo para .valor-atual
atualizarValor("valor-atual-ox", 2678, 10569, 5, "BIG WIN");

// Chama a função para iniciar o processo para .valor-atual2
atualizarValor("valor-atual-ox2", 1543, 6125, 8, "MEGA WIN");

// Chama a função para iniciar o processo para .valor-atual3
atualizarValor("valor-atual-ox3", 264, 3524, 16, "SUPER MEGA WIN");

// <------- FIM FORTUNE OX ------->

// <------- FORTUNE MOUSE ------->

// Função para gerar um número aleatório dentro de um intervalo específico
function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função para atualizar o valor
function atualizarValor(
  classe,
  valorInicial,
  valorFinal,
  intervalo,
  descricao
) {
  let valorAtual =
    parseInt(localStorage.getItem("valorAtual_" + classe)) || valorInicial;

  setInterval(() => {
    // Aumenta o valor até o valor final
    if (valorAtual < valorFinal) {
      valorAtual += 1;
    } else {
      // Se atingir o valor final, reinicia para o valor inicial
      valorAtual = valorInicial;
    }

    // Atualiza o valor na página
    const elementoValorAtual = document.querySelector("." + classe);
    elementoValorAtual.textContent = valorAtual + " " + descricao;

    // Salva o valor atual no localStorage
    localStorage.setItem("valorAtual_" + classe, valorAtual.toString());
  }, intervalo * 1000); // intervalo em milissegundos

  // Atualiza o valor pela primeira vez ao carregar a página
  const elementoValorAtual = document.querySelector("." + classe);
  elementoValorAtual.textContent = valorAtual + " " + descricao;
}

// Chama a função para iniciar o processo para .valor-atual
atualizarValor("valor-atual-mouse", 2241, 10569, 6, "BIG WIN");

// Chama a função para iniciar o processo para .valor-atual2
atualizarValor("valor-atual-mouse2", 1120, 6125, 9, "MEGA WIN");

// Chama a função para iniciar o processo para .valor-atual3
atualizarValor("valor-atual-mouse3", 236, 3524, 17, "SUPER MEGA WIN");

// <------- FIM FORTUNE MOUSE ------->

// <------- FORTUNE RABBIT ------->

// Função para gerar um número aleatório dentro de um intervalo específico
function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função para atualizar o valor
function atualizarValor(
  classe,
  valorInicial,
  valorFinal,
  intervalo,
  descricao
) {
  let valorAtual =
    parseInt(localStorage.getItem("valorAtual_" + classe)) || valorInicial;

  setInterval(() => {
    // Aumenta o valor até o valor final
    if (valorAtual < valorFinal) {
      valorAtual += 1;
    } else {
      // Se atingir o valor final, reinicia para o valor inicial
      valorAtual = valorInicial;
    }

    // Atualiza o valor na página
    const elementoValorAtual = document.querySelector("." + classe);
    elementoValorAtual.textContent = valorAtual + " " + descricao;

    // Salva o valor atual no localStorage
    localStorage.setItem("valorAtual_" + classe, valorAtual.toString());
  }, intervalo * 1000); // intervalo em milissegundos

  // Atualiza o valor pela primeira vez ao carregar a página
  const elementoValorAtual = document.querySelector("." + classe);
  elementoValorAtual.textContent = valorAtual + " " + descricao;
}

// Chama a função para iniciar o processo para .valor-atual
atualizarValor("valor-atual-rabbit", 1856, 10569, 7, "BIG WIN");

// Chama a função para iniciar o processo para .valor-atual2
atualizarValor("valor-atual-rabbit2", 932, 6125, 10, "MEGA WIN");

// Chama a função para iniciar o processo para .valor-atual3
atualizarValor("valor-atual-rabbit3", 188, 3524, 18, "SUPER MEGA WIN");

// <------- FIM FORTUNE RABBIT ------->

// <------- MINES ------->

// Função para gerar um número aleatório dentro de um intervalo específico
function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function atualizarValorMines(
  classe,
  valorInicial,
  valorFinal,
  intervalo,
  descricao
) {
  let valorAtual =
    parseInt(localStorage.getItem("valorAtual_" + classe)) || valorInicial;

  const intervalId = setInterval(() => {
    // Aumenta o valor até o valor final ou até 6125
    if (valorAtual < valorFinal && valorAtual < 6125) {
      valorAtual += 1;
    } else {
      // Se atingir o valor final ou 6125, reinicia para o valor inicial
      valorAtual = valorInicial;
    }

    // Atualiza o valor na página
    const elementoValorAtual = document.querySelector("." + classe);
    elementoValorAtual.textContent = valorAtual + " " + descricao;

    // Salva o valor atual no localStorage
    localStorage.setItem("valorAtual_" + classe, valorAtual.toString());

    // Se atingir 6125, limpa o intervalo para parar a contagem
    if (valorAtual >= 6125) {
      clearInterval(intervalId);
    }
  }, intervalo * 1000); // intervalo em milissegundos

  // Atualiza o valor pela primeira vez ao carregar a página
  const elementoValorAtual = document.querySelector("." + classe);
  elementoValorAtual.textContent = valorAtual + " " + descricao;
}

// Chama a função para iniciar o processo para .valor-atual
atualizarValorMines("valor-atual-mines", 1132, 10569, 15, "GREENS");

// Chama a função para iniciar o processo para .valor-atual2
atualizarValorMines("valor-atual-mines2", 4, 6125, 290, "REDS");

// Função para obter o valor atual armazenado localmente
function getSavedValueMines() {
  return (
    JSON.parse(localStorage.getItem("currentValueMines")) || {
      value: "96.87",
      timestamp: 0,
    }
  );
}

// Função para atualizar o valor exibido e armazená-lo localmente
function updateValueMines(value) {
  const currentValue = document.querySelector(".valor-atual-mines3");
  currentValue.textContent = value + "%";
  localStorage.setItem(
    "currentValueMines",
    JSON.stringify({ value: value, timestamp: Date.now() })
  );
}

// Função para gerar um novo valor
function generateNewValueMines() {
  return (Math.random() * (99.96 - 96.87) + 96.87).toFixed(2);
}

// Função para atualizar o valor a cada 100 segundos
function updateValueIntervalMines() {
  updateValueMines(generateNewValueMines());
  setInterval(() => {
    updateValueMines(generateNewValueMines());
  }, 100000); // 100 segundos
}

// Verificar se há um valor armazenado localmente e atualizar a exibição
document.addEventListener("DOMContentLoaded", () => {
  const savedValue = getSavedValueMines();
  const currentTime = Date.now();
  const storedTime = savedValue.timestamp;
  const elapsedTime = currentTime - storedTime;
  if (elapsedTime < 100000) {
    updateValueMines(savedValue.value);
    setTimeout(updateValueIntervalMines, 100000 - elapsedTime);
  } else {
    updateValueIntervalMines();
  }
});
// <------- FIM MINES ------->

// <------- CRASH ------->

// Função para gerar um número aleatório dentro de um intervalo específico
function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function atualizarValorCrash(
  classe,
  valorInicial,
  valorFinal,
  intervalo,
  descricao
) {
  let valorAtual =
    parseInt(localStorage.getItem("valorAtual_" + classe)) || valorInicial;

  const intervalId = setInterval(() => {
    // Aumenta o valor até o valor final ou até 6125
    if (valorAtual < valorFinal && valorAtual < 6125) {
      valorAtual += 1;
    } else {
      // Se atingir o valor final ou 6125, reinicia para o valor inicial
      valorAtual = valorInicial;
    }

    // Atualiza o valor na página
    const elementoValorAtual = document.querySelector("." + classe);
    elementoValorAtual.textContent = valorAtual + " " + descricao;

    // Salva o valor atual no localStorage
    localStorage.setItem("valorAtual_" + classe, valorAtual.toString());

    // Se atingir 6125, limpa o intervalo para parar a contagem
    if (valorAtual >= 6125) {
      clearInterval(intervalId);
    }
  }, intervalo * 1000); // intervalo em milissegundos

  // Atualiza o valor pela primeira vez ao carregar a página
  const elementoValorAtual = document.querySelector("." + classe);
  elementoValorAtual.textContent = valorAtual + " " + descricao;
}

// Chama a função para iniciar o processo para .valor-atual
atualizarValorCrash("valor-atual-crash", 1255, 10569, 15, "GREENS");

// Chama a função para iniciar o processo para .valor-atual2
atualizarValorCrash("valor-atual-crash2", 7, 6125, 300, "REDS");

// Função para obter o valor atual armazenado localmente
function getSavedValueCrash() {
  return (
    JSON.parse(localStorage.getItem("currentValueCrash")) || {
      value: "96.87",
      timestamp: 0,
    }
  );
}

// Função para atualizar o valor exibido e armazená-lo localmente
function updateValueCrash(value) {
  const currentValue = document.querySelector(".valor-atual-crash3");
  currentValue.textContent = value + "%";
  localStorage.setItem(
    "currentValueCrash",
    JSON.stringify({ value: value, timestamp: Date.now() })
  );
}

// Função para gerar um novo valor
function generateNewValueCrash() {
  return (Math.random() * (99.96 - 96.87) + 96.87).toFixed(2);
}

// Função para atualizar o valor a cada 100 segundos
function updateValueIntervalCrash() {
  updateValueCrash(generateNewValueCrash());
  setInterval(() => {
    updateValueCrash(generateNewValueCrash());
  }, 100000); // 100 segundos
}

// Verificar se há um valor armazenado localmente e atualizar a exibição
document.addEventListener("DOMContentLoaded", () => {
  const savedValue = getSavedValueCrash();
  const currentTime = Date.now();
  const storedTime = savedValue.timestamp;
  const elapsedTime = currentTime - storedTime;
  if (elapsedTime < 100000) {
    updateValueCrash(savedValue.value);
    setTimeout(updateValueIntervalCrash, 100000 - elapsedTime);
  } else {
    updateValueIntervalCrash();
  }
});
// <------- FIM CRASH ------->
// <------- FIM VALORES JOGOS ------->
