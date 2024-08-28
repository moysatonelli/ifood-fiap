const ctx = document.getElementById("chart");
const ctxExpense = document.getElementById("chart-expense");

const weeklyBtn = document.getElementById("weekly-btn");
const monthBtn = document.getElementById("month-btn");
const yearBtn = document.getElementById("year-btn");

const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
    datasets: [
      {
        label: "Pedidos Regulares",
        data: [1, 2, 6, 4, 3, 3],
        borderWidth: 2,
        tension: 0.4,
      },
      {
        label: "Entregas Exclusivas",
        data: [4, 1, 1, 6, 5, 1],
        borderWidth: 2,
        tension: 0.4,
      },
      {
        label: "Pedidos Promocionais",
        data: [3, 1, 2, 8, 3, 5],
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        align: "start",
        labels: {
          usePointStyle: true,
        },
      },
    },
  },
});

function updateChart(view) {
  let labels, data1, data2, data3;

  if (view === "semanal") {
    labels = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    data1 = [1, 2, 6, 4, 3, 3];
    data2 = [4, 1, 1, 6, 5, 1];
    data3 = [3, 1, 2, 8, 3, 5];

    weeklyBtn.classList.add("selected");
    monthBtn.classList.remove("selected");
    yearBtn.classList.remove("selected");
  } else if (view === "mensal") {
    labels = ["Semana 1", "Semana 2", "Semana 3", "Semana 4"];
    data1 = [14, 19, 7, 20, 18, 25, 6];
    data2 = [15, 12, 14, 16, 20, 17, 15];
    data3 = [18, 13, 16, 19, 14, 17, 15];

    weeklyBtn.classList.remove("selected");
    monthBtn.classList.add("selected");
    yearBtn.classList.remove("selected");
  } else if (view === "anual") {
    labels = [
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
    ];
    data1 = [100, 120, 150, 170, 190, 200, 210, 220, 230, 240, 250, 260];
    data2 = [80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190];
    data3 = [90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200];

    weeklyBtn.classList.remove("selected");
    monthBtn.classList.remove("selected");
    yearBtn.classList.add("selected");
  }

  myChart.data.labels = labels;
  myChart.data.datasets[0].data = data1;
  myChart.data.datasets[1].data = data2;
  myChart.data.datasets[2].data = data3;

  myChart.update();
}


const chartExpense = new Chart(ctxExpense, {
    type: "bar",
    data: {
      labels: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
      datasets: [
        {
          label: "", // Define o label como uma string vazia
          data: [1, 2, 6, 4, 3, 3],
          backgroundColor: "red",
          borderColor: "darkred",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      plugins: {
        legend: {
          display: false, // Desabilita a legenda
        },
      },
    },
  });