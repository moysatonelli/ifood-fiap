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

// GRAFICO BARRA TAXA DE CONVERSAO
const ctx = document.getElementById("meuGrafico").getContext("2d");
new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ],
    datasets: [
      {
        label: "",
        data: [2, 3, 4, 5, 2, 3, 1, 2, 3, 2, 4, 3], // Dados de exemplo
        backgroundColor: "red", // Cor das barras
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Esconde a legenda
      },
      tooltip: {
        enabled: true,
      },
    },
  },
});

// GRAFICO DE PIZZA MARKET SHARE
const pizza = document.getElementById("marketShare").getContext("2d");
new Chart(pizza, {
  type: "doughnut", // Tipo de gráfico do tipo "rosca"
  data: {
    labels: ["Vermelho", "Cinza"],
    datasets: [
      {
        data: [75, 25], // Dados de exemplo
        backgroundColor: ["red", "lightgray"], // Cores do gráfico
        borderWidth: 0, // Sem borda nas fatias
      },
    ],
  },
  options: {
    responsive: true,
    cutout: "80%", // Tamanho do "buraco" no meio da rosca
    plugins: {
      legend: {
        display: false, // Esconde a legenda
      },
      tooltip: {
        enabled: false, // Desabilita os tooltips
      },
    },
  },
});

//GRAFICO DE ROI
const roi = document.getElementById("barrasRoi").getContext("2d");
new Chart(roi, {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun"],
    datasets: [
      {
        label: "Investimento Total",
        data: [50, 70, 90, 100, 40, 60],
        backgroundColor: "green",
        borderWidth: 1,
        barThickness: 13,
      },
      {
        label: "Retorno Gerado",
        data: [80, 120, 60, 90, 110, 50],
        backgroundColor: "red",
        borderWidth: 1,
        barThickness: 13,
      },
    ],
  },
  options: {
    indexAxis: "y",
    scales: {
      x: {
        beginAtZero: true,
      },
    },
  },
});

// GRAFICO DE FATURAMENTO
const invoice = document.getElementById("invoice").getContext("2d");
new Chart(invoice, {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun"],
    datasets: [
      {
        label: "Data",
        data: [3500, 2000, 1000, 2500, 1000, 4500],
        backgroundColor: "red",
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 6000,
        ticks: {
          color: "black",
        },
      },
      x: {
        ticks: {
          color: "black",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

// TURNOVER

const turnover = document.getElementById("turnoverChart").getContext("2d");
new Chart(turnover, {
  type: "bar",
  data: {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul"],
    datasets: [
      {
        label: "Contratações",
        data: [30, 40, 70, 90, 60, 50, 60],
        backgroundColor: "#ff4d4d",
      },
      {
        label: "Demissões",
        data: [20, 30, 40, 50, 30, 20, 40],
        backgroundColor: "#4caf50",
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
      },
      y: {
        stacked: true,
        grid: {
          borderDash: [5, 5],
        },
      },
    },
  },
});

// NPS
const nps = document.getElementById("nps").getContext("2d");
new Chart(nps, {
  type: "line",
  data: {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul"],
    datasets: [
      {
        label: "Pontuação NPS",
        data: [-60, -20, -60, 60, 0, 20, -60],
        borderColor: "red",
        backgroundColor: "red",
        tension: 0,
        fill: false,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
  },
});

// CLAIM
const claim = document.getElementById("claim").getContext("2d");
new Chart(claim, {
  type: "bar",
  data: {
    labels: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    datasets: [
      {
        label: "Vermelho",
        data: [40, 30, 50, 60, 50, 70, 60],
        backgroundColor: "red",
      },
      {
        label: "Cinza",
        data: [60, 70, 50, 40, 50, 30, 40],
        backgroundColor: "lightgray",
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        beginAtZero: true,
        max: 100, // Define a escala máxima para 100
      },
    },
    plugins: {
      legend: {
        display: false, // Não exibe a legenda
      },
    },
  },
});
