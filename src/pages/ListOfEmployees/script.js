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
    img: '/src/assets/images/userEmployee.png ',
    nome: 'Pedro',
    sobrenome: 'Henrique',
    cargo: 'estoquista',
    email: 'pedrohenrique@gmail.com',
    numeroTelefone: "(11) 96539-0497",
    dataContratacao: "2024-12-10", 
    salario: 2500.00 
  },
  {
    img: '/src/assets/images/userEmployee.png ',
    nome: 'Maria',
    sobrenome: 'Clara',
    cargo: 'gerente',
    email: 'mariaclara@gmail.com',
    numeroTelefone: "(11) 98765-4321",
    dataContratacao:"2024-11-15", 
    salario: 4500.00 
  },
  {
    img: '/src/assets/images/userEmployee.png ',
    nome: 'João',
    sobrenome: 'Silva',
    cargo: 'vendedor',
    email: 'joaosilva@gmail.com',
    numeroTelefone: "(11) 99876-5432",
    dataContratacao: "2024-10-05", 
    salario: 3000.00 
  },
  {
    img: '/src/assets/images/userEmployee.png ',
    nome: 'Ana',
    sobrenome: 'Beatriz',
    cargo: 'supervisora',
    email: 'anabeatriz@gmail.com',
    numeroTelefone: "(11) 91234-5678",
    dataContratacao: "2024-09-20", 
    salario: 4000.00 
  }
];

// Selecionando container dos funcionários

const containerFuncionarios = document.querySelector(".cards-employee-container");

// Percorrendo funcionarios e criando cards

funcionarios.forEach(funcionario => {
  const card = document.createElement("div");
  card.className = 'card-employee';

  card.innerHTML = `
    <img src="${funcionario.img}" alt="User Employee Image" />
    <strong>${funcionario.nome} ${funcionario.sobrenome || ""}</strong>
    <p>${funcionario.cargo}</p>
    <span class="emailFuncionario">${funcionario.email}</span>
    <span class="telefoneFuncionario">${funcionario.numeroTelefone}</span>
  `;

  const detailsButton = document.createElement('button');
  detailsButton.setAttribute("id", "details-btn")
  detailsButton.type = 'button';
  detailsButton.innerText = 'Detalhes';
  detailsButton.onclick = () => openModal(funcionario); // Passa o funcionário ao abrir o modal
  card.appendChild(detailsButton);

  containerFuncionarios.appendChild(card)
})

// Seleção dos elementos DOM

const modalEmployee = document.querySelector(".modal-container");

const titleHeader = document.querySelector(".titleHeader")
const emailHeader = document.querySelector(".emailHeader")
const dataBtn = document.querySelector("#data-btn")
const permissionsBtn = document.querySelector("#permission-btn")
const dataForm = document.querySelector("#data-form")
const permissionsForm = document.querySelector("#permissions-form")
const deleteEmployeeBtn = document.querySelector("#del-employee-btn");
const cancelEditEmployee = document.querySelector("#cancel-btn")
const saveEditEmployee = document.querySelector("#save-btn")
const openModalFuncionario = document.getElementById("details-btn")

// Função para formatar o valor do input como moeda
function formatCurrency(value) {
  // Remove caracteres não numéricos, exceto ponto e vírgula
  value = value.replace(/[^\d,\.]/g, '');

  // Se já contém vírgula, formatar para o padrão brasileiro de dinheiro
  if (value.includes(',')) {
    let parts = value.split(',');
    let integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    let decimalPart = parts[1].substring(0, 2); // Limitar a 2 casas decimais
    return `${integerPart},${decimalPart}`;
  }

  // Para valores sem vírgula, apenas adiciona os pontos nos milhares
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Selecionando o input de salário
const inputSalario = document.getElementById('salario');

// Evento que formata o valor enquanto o usuário digita
inputSalario.addEventListener('input', function(e) {
  const valorFormatado = formatCurrency(e.target.value);
  inputSalario.value = valorFormatado;
});


// Evento para selecionar formulário de dados básicos

dataBtn.addEventListener('click', () =>{
  dataBtn.classList.add("checked-button")
  permissionsBtn.classList.remove("checked-button")

  dataForm.classList.add("edit-form")
  dataForm.classList.remove("hide")
  permissionsForm.classList.add("hide")
  permissionsForm.classList.remove("edit-form")

})

// Evento para selecionar formulário de permissões 

permissionsBtn.addEventListener('click', () =>{
  dataBtn.classList.remove("checked-button")
  permissionsBtn.classList.add("checked-button")
  permissionsBtn.classList.remove("unchecked-button")

  permissionsForm.classList.add("edit-form")
  permissionsForm.classList.remove("hide")
  dataForm.classList.add("hide")
  dataForm.classList.remove("edit-form")

})


// Evento do botão de "cancelar"

cancelEditEmployee.addEventListener('click', closeModal)

// Função para abrir o modal e preencher os dados do funcionário
function openModal(funcionario) {

  //mostrar modal

  modalEmployee.classList.add("modal-container");
  modalEmployee.classList.remove("hide");

  //selecionando imagem

  document.getElementById('real-file').value = '';



  // Preenche os campos do modal com as informações do funcionário

  document.getElementById('titleHeader').innerText = funcionario.nome;
  document.getElementById('emailHeader').innerText = funcionario.email;
  document.getElementById('nome').value = funcionario.nome;
  document.getElementById('sobrenome').value = funcionario.sobrenome;
  document.getElementById('email').value = funcionario.email;
  document.getElementById('tel').value = funcionario.numeroTelefone;
  document.getElementById('cargo').value = funcionario.cargo;
  document.getElementById('salario').value = funcionario.salario;
  document.getElementById('dataContratacao').value = funcionario.dataContratacao;


  
  // Verifica se a imagem do funcionário está definida e se é uma URL de dados ou um caminho de arquivo

  const imgSrc = funcionario.img.startsWith('data:') ? funcionario.img : funcionario.img;
  document.getElementById('profile-pic').style.backgroundImage = `url(${imgSrc})`;

  // Define a função de salvar as alterações
  document.getElementById('edit-modal').onsubmit = function(e) {
    e.preventDefault();
    saveChanges(funcionario); // Passa o funcionário atual para salvar as alterações
  };

  // Define a função de excluir o funcionário

  document.getElementById('del-employee-btn').onclick = function() {
    deleteEmployee(funcionario);
  };

  // Define a função de salvar as alterações do funcionário

  saveEditEmployee.onclick = function() {
    saveChanges(funcionario); // Chama a função para salvar as alterações
  };

  // Manipulação do upload da imagem
  const fotoInput = document.getElementById('real-file');
  fotoInput.onchange = function() {
    if (fotoInput.files && fotoInput.files[0]) {
      const reader = new FileReader();
    
      reader.onload = function(e) {
        // Atualiza o background-image antes de salvar
        document.getElementById('profile-pic').style.backgroundImage = `url(${e.target.result})`;
        funcionario.img = e.target.result; // Atualiza o objeto do funcionário com a nova imagem
      };
      reader.readAsDataURL(fotoInput.files[0]); // Lê o arquivo como URL de dados
    }
  };



}


// Função para salvar as alterações feitas no modal
function saveChanges(funcionario) {
  // Armazena o email original para a busca do card
  const emailOriginal = funcionario.email;

  // Atualiza os valores do funcionário com os dados do formulário
  funcionario.nome = document.getElementById('nome').value;
  funcionario.sobrenome = document.getElementById('sobrenome').value;
  funcionario.email = document.getElementById('email').value;
  funcionario.numeroTelefone = document.getElementById('tel').value;
  funcionario.cargo = document.getElementById('cargo').value;
  funcionario.salario = parseFloat(document.getElementById('salario').value);
  funcionario.dataContratacao = new Date(document.getElementById('dataContratacao').value);

  // Manipula o upload de imagem (caso o usuário tenha selecionado uma nova)
  const fotoInput = document.getElementById('real-file');
  if (fotoInput.files && fotoInput.files[0]) {
    const reader = new FileReader();
    reader.onload = function(e) {
      funcionario.img = e.target.result; // Atualiza a imagem com a nova imagem
      updateEmployeeCard(funcionario, emailOriginal); // Passa o email original
    };
    reader.readAsDataURL(fotoInput.files[0]); // Lê o arquivo como URL de dados
  } else {
    updateEmployeeCard(funcionario, emailOriginal); // Atualiza o card com os dados (sem imagem nova)
  }

  closeModal(); // Fecha o modal após salvar
}


// Função para atualizar o card do funcionário com os novos dados
// Função para atualizar o card do funcionário com os novos dados
function updateEmployeeCard(funcionario, emailOriginal) {
  // Seleciona o card do funcionário com base no email original
  const employeeCard = Array.from(document.querySelectorAll('.card-employee')).find(card =>
    card.querySelector('.emailFuncionario').innerText === emailOriginal
  );

  if (employeeCard) {
    // Atualiza a imagem, nome, cargo, email e telefone no card
    if (funcionario.img) {
      employeeCard.querySelector('img').src = funcionario.img; // Atualiza a imagem
    }
    employeeCard.querySelector('strong').innerText = `${funcionario.nome} ${funcionario.sobrenome}`;
    employeeCard.querySelector('p').innerText = funcionario.cargo;
    employeeCard.querySelector('.emailFuncionario').innerText = funcionario.email;
    employeeCard.querySelector('.telefoneFuncionario').innerText = funcionario.numeroTelefone;
  }
}


// Função para excluir o funcionário
function deleteEmployee(funcionario) {
  const confirmDelete = confirm(`Tem certeza que deseja excluir o funcionário ${funcionario.nome}?`);
  if (confirmDelete) {
    // Remove o funcionário da lista
    funcionarios = funcionarios.filter(emp => emp !== funcionario);

    // Remove o card do funcionário do DOM
    const employeeCard = Array.from(document.querySelectorAll('.card-employee')).find(card =>
      card.querySelector('strong').innerText.includes(funcionario.nome)
    );
    if (employeeCard) {
      employeeCard.remove();
    }

    closeModal(); // Fecha o modal após excluir
  }
}

// Função para fechar o modal
function closeModal() {
  modalEmployee.classList.remove("modal-container");
  modalEmployee.classList.add("hide");
}

