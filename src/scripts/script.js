// SCRIPTS PARA SIDEBAR
// PEGA TODOS OS ELEMENTOS LI
const liElements = document.querySelectorAll("li");

// PEGAR SIDEBAR
const sidebar = document.querySelector(".sidebar");

//LOGO SIDEBAR
const logoIfood = document.querySelector(".logo");

// PARA CADA LI PEGA AS DIV SUB NAV E SETA PARA ABRIR
liElements.forEach((li) => {
  li.addEventListener("click", function () {
    const subNav = this.querySelector(".sub-nav");

    if (subNav) {
      subNav.classList.toggle("show");
    }
  });
});

// FECHA TODAS SUBNAV ABERTAS
sidebar.addEventListener("mouseleave", function () {
  logoIfood.src = "./assets/images/logoIfood.svg";
  logoIfood.style.width = "40px";
  logoIfood.style.height = "40px";
  // Verifica se a sidebar está fechada
  if (!sidebar.classList.contains("open")) {
    // Fecha todas as sub-navs abertas
    const openSubNavs = document.querySelectorAll(".sub-nav.show");
    openSubNavs.forEach((subNav) => {
      subNav.classList.remove("show");
    });
  }
});

// QUANDO O MOUSE ENTRAR NA SIDEBAR
sidebar.addEventListener("mouseover", function () {
  logoIfood.src = "./assets/images/ifood.png";
  logoIfood.style.width = "100px";
  logoIfood.style.height = "100px";
});
// FIM SCRIPTS PARA SIDEBAR

// AQUI VOCÊ PEGOU O CHATICON
const chaticon = document.querySelector(".chatbot-icon");

// AQUI VOCE COLOCOU UM ESCUTADOR DE EVENTO, PARA QUE QUANDO O USUARIO CLICAR, MUDE O DISPLAY NONE PARA FLEX NO CONTAINER DO CHAT-CONTAINER, COM ISSO APARECE O CHATBOT
chaticon.addEventListener("click", function () {
  // PEGUEI O CONTAINER DO CHATBOT
  const chatbot = document.querySelector(".chat-container");

  // SE ELE JA ESTIVER ABERTO
  if (chatbot.style.display === "flex") {
    // AQUI ELE FECHA O CONTAINER(SOME DA TELA)
    chatbot.style.display = "none";
    // E NAO PASSA DAQUI, OU SEJA nÃO VAI EXECUTAR AS LINHAS PRA BAIXO DAQUI.
    // COM ISSO O CHATBOT FECHA
    return;
  }

  // AQUI SÓ VAI ACONTECER, SE O CHATBOT TIVER A PROPRIEDADE DISPLAY = "NONE" ou seja, ELE VAI ESTAR FECHADO E VAMOS ABRIR
  chatbot.style.display = "flex";
});

// ALGORITMO PARA FECHAR O CONTAINER DO CHAT]
// PASSO 1 - PEGAR O ELEMENTO X
// PASSO 2 - APÓS PEGAR O ELEMENTO, ADICIONAR UM ESCUTADOR
// PASSO 3 - O ESCUTADO PRECISA TER O EVENTO "CLICK"
// PASSO 4 - DENTRO DA FUNÇÃO DO ESCUTADO, PRECISO COLOCAR DISPLAY = "NONE" NO CONTAINER DO CHATBOT
