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

// Início script funcionários e modal

let funcionarios = [
  {
    img: 'userEmployee.png',
    nome: 'Pedro Henrique',
    cargo: 'estoquista',
    email: 'pedrohenrique@gmail.com',
    numeroTelefone: "(11) 96539-0497"
  },
  {
    img: 'userEmployee.png',
    nome: 'Maria Clara',
    cargo: 'gerente',
    email: 'mariaclara@gmail.com',
    numeroTelefone: "(11) 98765-4321"
  },
  {
    img: 'userEmployee.png',
    nome: 'João Silva',
    cargo: 'vendedor',
    email: 'joaosilva@gmail.com',
    numeroTelefone: "(11) 99876-5432"
  },
  {
    img: 'userEmployee.png',
    nome: 'Ana Beatriz',
    cargo: 'supervisora',
    email: 'anabeatriz@gmail.com',
    numeroTelefone: "(11) 91234-5678"
  }
];

const containerFuncionarios = document.querySelector(".cards-employee-container");

funcionarios.forEach(funcionario => {
  const card = document.createElement("div");
  card.className = 'card-employee';

  card.innerHTML = `
    <img src="/src/assets/images/${funcionario.img}" alt="User Employee Image" />
    <strong>${funcionario.nome}</strong>
    <p>${funcionario.cargo}</p>
    <span>${funcionario.email}</span>
    <span>${funcionario.numeroTelefone}</span>
    <button type="button">Detalhes</button>
  `;

  containerFuncionarios.appendChild(card)
})

