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

// LOGICA PARA MODAL

// Pega elementos do DOM
const modalPedidos = document.getElementById("myModalOrders");
const modalTransacoes = document.getElementById("myModalTransactions");
const modalProdutos = document.getElementById("myModalProducts");
const openModalBtn = document.getElementsByClassName("content-report");
const closeModal = document.getElementsByClassName("close");

let modalOpened;

// Abre a modal dinamicamente
for (let index = 0; index < openModalBtn.length; index++) {
  openModalBtn[index].addEventListener("click", function () {
    if (openModalBtn[index].innerHTML.includes("produtos")) {
      modalOpened = modalProdutos;
      modalProdutos.style.display = "block";
      return;
    }
    if (openModalBtn[index].innerHTML.includes("Transações")) {
      modalOpened = modalTransacoes;
      modalTransacoes.style.display = "block";
      return;
    }
    if (openModalBtn[index].innerHTML.includes("pedidos")) {
      modalOpened = modalPedidos;
      modalPedidos.style.display = "block";
      return;
    }
  });
}

// Fecha a modal ao clicar no X
for (let index = 0; index < closeModal.length; index++) {
  closeModal[index].onclick = function () {
    modalOpened.style.display = "none";
  };
}

// Fecha a modal ao clicar fora do conteúdo
window.onclick = function (event) {
  if (event.target == modalOpened) {
    modalOpened.style.display = "none";
  }
};
