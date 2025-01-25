const colors = [
    '#636363', 
    '#8AFF6D', 
    '#6D73FF', 
    '#FF6D6D', 
  ];
  
  let events = [
    {
      title: 'Reunião de Equipe',
      start: '2024-10-06T10:00:00',
      end: '2024-10-06T12:00:00',
      color: getRandomColor()
    },
    {
      title: 'Conferência Virtual',
      start: '2024-10-08T14:30:00',
      end: '2024-10-08T16:30:00',
      color: getRandomColor()
    },
    {
      title: 'Treinamento de Vendas',
      start: '2024-10-10T09:00:00',
      end: '2024-10-10T11:00:00',
      color: getRandomColor()
    },
    {
      title: 'Reunião com Cliente',
      start: '2024-10-12T11:30:00',
      end: '2024-10-12T13:00:00',
      color: getRandomColor()
    },
    {
      title: 'Evento Corporativo',
      start: '2024-10-14T08:00:00',
      end: '2024-10-14T12:00:00',
      color: getRandomColor()
    }
];

  
  function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }
  
const modalConfirm = document.querySelector(".hide")
const closeEventModal = document.querySelector(".close-modal");
const deleteBtnModal = document.querySelector("#delete-btn");
const cancelBtnModal = document.querySelector("#cancel-btn");

  const newTitle = document.getElementById("eventTitle");
  const newEventStartDate = document.getElementById("eventStart");
  const newEventEndDate = document.getElementById("eventEnd");
  const button = document.getElementById("submitForm");
  let calendar; 
  document.addEventListener('DOMContentLoaded', function() {
    const calendarEl = document.getElementById('calendar');
  
    calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      headerToolbar: {
        left: 'customAddEventButton prev,next today',
        center: 'title',
        right: 'dayGridMonth,yearGrid,timeGridWeek'
      },
      views: {
        yearGrid: {
          type: 'dayGrid',
          duration: { years: 1 },
          buttonText: 'Ano'
        },
        timelineDay: {
          type: 'timeline',
          duration: { days: 1 },
          buttonText: 'Diária'
        }
      },
      locale: 'pt-br',
      buttonText: {
        today: 'Hoje',      
        month: 'Mês',        
        week: 'Semana', 
        day: 'Dia',             
        list: 'Lista'           
      },
      events: events,
      editable: true,
      droppable: true,
      customButtons: {
        customAddEventButton: {
          text: '+',
          click: function() {
            document.getElementById('addEventModal').style.display = 'block';
          }
        }
      },
      eventDidMount: function(info) {

        const viewType = calendar.view.type; // Obter tipo de visualização atual
        if (viewType === 'dayGridMonth' || viewType === 'dayGridYear') {
          info.el.classList.add('annualAndMonthly'); // Adiciona classe cinza para mensal/anual
        } else if (viewType === 'timeGridWeek') {
          info.el.classList.add('weekly'); // Adiciona classe branca para semanal
        }

        const deleteIcon = document.createElement('span');
        deleteIcon.innerHTML = '<i class="fa-solid fa-trash"></i>'; 
        deleteIcon.classList.add('deleteIcon');
        
        deleteIcon.addEventListener('click', function (e) {
          e.stopPropagation(); // Evita que o clique no ícone selecione o evento
          
          document.body.classList.add("no-scroll");
          // Exibe o modal de confirmação
          modalConfirm.classList.remove("hide");
          modalConfirm.classList.add("modal-confirm");
        
          // Lida com o clique do botão de confirmação
          deleteBtnModal.onclick = () => {
            info.event.remove(); // Remove o evento do calendário
            events = events.filter(event => event.title !== info.event.title); // Remove o evento da lista
            
            modalConfirm.classList.remove("modal-confirm");
            modalConfirm.classList.add("hide");
            document.body.classList.remove("no-scroll");

          };
        
          
        });
        
        // Insere o ícone de lixeira no elemento do evento
        info.el.appendChild(deleteIcon);
        
      }
    });
  
    calendar.render();
    
    document.getElementById('cancelAddEvent').addEventListener('click', function() {
      document.getElementById('addEventModal').style.display = 'none';
    });
  });
  
  // Adiciona o novo evento ao calendário
  button.addEventListener("click", (e) => {
    e.preventDefault();
  
    const newEvent = {
      title: newTitle.value,
      start: newEventStartDate.value,
      end: newEventEndDate.value,
    };
  
    events.push(newEvent); 
  
    calendar.addEvent(newEvent); // Adiciona o evento ao calendário
  
    newTitle.value = "";
    newEventStartDate.value = "";
    newEventEndDate.value = "";
  
    document.getElementById('addEventModal').style.display = 'none';
  });

  cancelBtnModal.onclick = () => {
    // Esconde o modal sem remover o evento
    modalConfirm.classList.remove("modal-confirm");
    modalConfirm.classList.add("hide");
    document.body.classList.remove("no-scroll");

  };

  closeEventModal.onclick = () => {
    // Esconde o modal sem remover o evento
    modalConfirm.classList.remove("modal-confirm");
    modalConfirm.classList.add("hide");
    document.body.classList.remove("no-scroll");

  };
  