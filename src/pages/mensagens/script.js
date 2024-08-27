const notifications = [
  {
    id: 1,
    from: "Ifood",
    title: "Reposição de estoque",
    message:
      "Olá Thiago! Você sabia que agora novos parceiros do Ifood possuem benefícios de afiliados também!? É isso aí! De agora em diante você terá um link que, quando divulgado para novos potenciais parceiros Ifood, você recebe comissão recorrente se realizar o cadastro pelo seu link! Para habilitar seu link de afiliado, entre em contato",
    read: false,
  },
  {
    id: 2,
    from: "Ifood",
    title: "Nova atualização de políticas",
    message:
      "Prezado parceiro, atualizamos nossas políticas de entrega. Por favor, revise as mudanças para continuar oferecendo o melhor serviço.",
    read: false,
  },
  {
    id: 3,
    from: "Ifood",
    title: "Promoções especiais",
    message:
      "Aproveite nossas novas campanhas de marketing para aumentar suas vendas durante o fim de semana.",
    read: true,
  },
  {
    id: 4,
    from: "Ifood",
    title: "Suporte ao parceiro",
    message:
      "Olá, Thiago! Estamos aqui para ajudar. Caso tenha dúvidas ou precise de assistência, entre em contato com nosso suporte.",
    read: true,
  },
];

const messagesContainer = document.getElementById("container-messages");
const messageCard = document.getElementById("message-card");

function displayMessages(filteredNotifications) {
  messagesContainer.innerHTML = "";

  filteredNotifications.forEach((item) => {
    const message = document.createElement("div");
    message.classList.add("message");

    const titleMessage = document.createElement("p");
    titleMessage.id = "title-message";

    const messageContent = document.createElement("p");

    const icon = document.createElement("div");
    icon.id = "icon";

    messagesContainer.appendChild(message);
    message.appendChild(icon);
    message.appendChild(titleMessage);
    message.appendChild(messageContent);

    titleMessage.innerHTML = `De: ${item.from} - ${item.title}`;
    messageContent.innerHTML = `${item.message.slice(0, 40)}...`;

    // Adiciona um evento de clique para exibir a mensagem completa no message-card
    message.addEventListener("click", () => {
      showMessageInCard(item);
    });
  });
}

function showMessageInCard(message) {
  // Limpa o conteúdo anterior do message-card
  messageCard.innerHTML = "";

  // Cria e adiciona os elementos para o título e conteúdo da mensagem
  const messageTitle = document.createElement("h1");
  messageTitle.innerText = `De: ${message.from} - ${message.title}`;

  const illustration = document.createElement("img");
  illustration.src = "./img/portal-parceiro.svg";
  illustration.id = "ifood-img";

  const messageContent = document.createElement("p");
  messageContent.innerText = message.message;

  messageCard.appendChild(messageTitle);
  messageCard.appendChild(illustration);
  messageCard.appendChild(messageContent);

  messageCard.style.display = "flex";
}

function setActiveFilter(activeElement) {
  const filterLinks = document.querySelectorAll("#options-filter a");

  filterLinks.forEach((link) => link.classList.remove("active"));

  activeElement.classList.add("active");
}

document.getElementById("filter-unread").addEventListener("click", (e) => {
  e.preventDefault();
  const unreadMessages = notifications.filter((item) => !item.read);
  displayMessages(unreadMessages);
  hideMessageCard();
  setActiveFilter(e.target);
});

document.getElementById("filter-read").addEventListener("click", (e) => {
  e.preventDefault();
  const readMessages = notifications.filter((item) => item.read);
  displayMessages(readMessages);
  hideMessageCard();
  setActiveFilter(e.target);
});

document.getElementById("filter-all").addEventListener("click", (e) => {
  e.preventDefault();
  displayMessages(notifications);
  hideMessageCard();
  setActiveFilter(e.target);
});
displayMessages(notifications);
setActiveFilter(document.getElementById("filter-all"));

function hideMessageCard() {
  messageCard.style.display = "none";
}



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
  logoIfood.src = "../../assets/images/logoIfood.svg";
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
  logoIfood.src = "../../assets/images/ifood.png";
  logoIfood.style.width = "100px";
  logoIfood.style.height = "100px";
});
// FIM SCRIPTS PARA SIDEBAR

