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

// CHATBOT
const chaticon = document.querySelector(".chatbot-icon");
// AQUI VOCE COLOCOU UM ESCUTADOR DE EVENTO, PARA QUE QUANDO O USUARIO CLICAR, MUDE O DISPLAY NONE PARA FLEX NO CONTAINER DO CHAT-CONTAINER, COM ISSO APARECE O CHATBOT
chaticon.addEventListener("click", function () {
  // PEGUEI O CONTAINER DO CHATBOT
  const chatbot = document.querySelector(".chat-container");
  const sinalizador = document.querySelector(".sinalizador-chat");
  // SE ELE JA ESTIVER ABERTO
  if (chatbot.style.display === "flex") {
    // AQUI ELE FECHA O CONTAINER(SOME DA TELA)
    chatbot.style.display = "none";
    // MOSTRA O SINALIZADOR NOVAMENTE
    sinalizador.style.display = "block";
    return;
  }
  // AQUI SÓ VAI ACONTECER, SE O CHATBOT TIVER A PROPRIEDADE DISPLAY = "NONE" ou seja, ELE VAI ESTAR FECHADO E VAMOS ABRIR
  chatbot.style.display = "flex";
  // ESCONDE O SINALIZADOR
  sinalizador.style.display = "none";
});
// ALGORITMO PARA FECHAR O CONTAINER DO CHAT]
const closechat = document.querySelector(".fechar");
closechat.addEventListener("click", function () {
  const chatbot = document.querySelector(".chat-container");
  const sinalizador = document.querySelector(".sinalizador-chat");
  if(chatbot.style.display === "flex") {
    chatbot.style.display = "none";
    // MOSTRA O SINALIZADOR NOVAMENTE
    sinalizador.style.display = "block";
    return;
  }
});
// SINALIZAR DO CHAT
const sinalizador = document.querySelector(".sinalizador-chat");
sinalizador.addEventListener("click", function () {
  const chatbot = document.querySelector(".chat-container");
  // AQUI SÓ VAI ACONTECER SE O CHATBOT TIVER A PROPRIEDADE DISPLAY = "NONE"
  if (chatbot.style.display === "none" || chatbot.style.display === "") {
    chatbot.style.display = "flex";
    // ESCONDE O SINALIZADOR
    sinalizador.style.display = "none";
    return;
  }  
});
// Função para enviar mensagem do usuário
function sendMessage() {
  var userInput = document.getElementById('user-input').value.trim().toLowerCase();

  if (userInput !== "") {
      // Certifique-se de que a mensagem do bot foi adicionada
      var history = document.getElementById('history');
      var firstBotMessageExists = history.querySelector('.bot-message');
      
      if (!firstBotMessageExists) {
          // Se por algum motivo a mensagem inicial não foi adicionada, a adiciona aqui
          var initialBotMessage = document.createElement('div');
          initialBotMessage.classList.add('bot-message');
          initialBotMessage.innerHTML = "<p>Olá! Como posso ajudar você hoje?</p>";
          history.appendChild(initialBotMessage);
      }

      // Criar um novo bloco de mensagem do usuário
      var userMessage = document.createElement('div');
      userMessage.classList.add('user-message');
      userMessage.innerHTML = `<p>${userInput}</p>`;
      history.appendChild(userMessage);
      
      // Limpar o campo de input
      document.getElementById('user-input').value = "";

      // Respostas específicas do bot
      setTimeout(function() {
          var botMessage = document.createElement('div');
          botMessage.classList.add('bot-message');
          
          // Verifica qual foi a entrada do usuário e responde de acordo
          if (userInput.includes('dashboard')) {
              botMessage.innerHTML = "<p>Aqui estão as informações do seu dashboard: [detalhes do dashboard]</p>";
          } else if (userInput.includes('pedidos')) {
              botMessage.innerHTML = "<p>Você tem X pedidos pendentes. Aqui estão os detalhes: [detalhes dos pedidos]</p>";
          } else if (userInput.includes('agenda')) {
              botMessage.innerHTML = "<p>Esta é a sua agenda para hoje: [detalhes da agenda]</p>";
          } else {
              botMessage.innerHTML = "<p>Desculpe, não entendi sua solicitação. Tente perguntar sobre 'dashboard', 'pedidos' ou 'agenda'.</p>";
          }

          history.appendChild(botMessage);
          
          // Rolagem automática para o final
          history.scrollTop = history.scrollHeight;
      }, 1000);
  }
}

document.getElementById('send').addEventListener('click', sendMessage);

document.getElementById('user-input').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
      sendMessage();
  }
});