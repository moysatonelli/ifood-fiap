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

// Função para carregar estados de um arquivo JSON e adicionar ao select
async function loadUf() {
  try {
    const response = await fetch("estados.json");
    const data = await response.json();
    const select = document.querySelector("#estado");

    data.forEach((estado) => {
      const option = document.createElement("option");
      option.value = estado.value;
      option.textContent = estado.name;
      select.appendChild(option);
    });
  } catch (error) {
    console.error("Erro ao carregar estados:", error);
  }
}

loadUf();

// Função para upload de imagem
const previewImage = document.getElementById("preview-image");
const photoInput = document.getElementById("photo");

photoInput.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      previewImage.src = e.target.result;
    };

    reader.readAsDataURL(file);
  }
});

photoInput.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const img = new Image();
      img.onload = function () {
        const canvas = document.createElement("canvas");
        canvas.width = 235;
        canvas.height = 251;
        const ctx = canvas.getContext("2d");

        // Manter proporção e evitar corte
        const aspectRatio = img.width / img.height;
        let drawWidth = 235;
        let drawHeight = 251;
        if (aspectRatio > 1) {
          // Imagem mais larga que alta
          drawHeight = Math.round(drawWidth / aspectRatio);
        } else {
          drawWidth = Math.round(drawHeight * aspectRatio);
        }
        const x = (235 - drawWidth) / 2;
        const y = (251 - drawHeight) / 2;

        ctx.drawImage(img, x, y, drawWidth, drawHeight);
        previewImage.src = canvas.toDataURL();
      };
      img.src = e.target.result;
    };

    reader.readAsDataURL(file);
  }
});
