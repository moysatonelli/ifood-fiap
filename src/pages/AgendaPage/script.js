const colors = [
    '#636363', 
    '#8AFF6D', 
    '#6D73FF', 
    '#FF6D6D', 
  ];
  
  let events = [
    {
      title: 'Reunião',
      start: '2024-08-28T10:00:00',
      end: '2024-08-28T15:00:00',
      color: getRandomColor()
    },
    {
      title: 'Evento 2',
      start: '2024-09-10T10:30:00',
      end: '2024-09-10T12:30:00',
      color: getRandomColor()
    },
    {
      title: 'Evento 2',
      start: '2024-08-25T01:00:00',
      end: '2024-08-25T15:00:00',
      color: getRandomColor()
    }
  ];
  
  function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }
  
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
          buttonText: 'Anual'
        },
        timelineDay: {
          type: 'timeline',
          duration: { days: 1 },
          buttonText: 'Diária'
        }
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
      }
    });
  
    calendar.render();
    
    // Fecha o popup ao clicar no botão "Cancelar"
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
      color: getRandomColor() 
    };
  
    events.push(newEvent); 
  
    calendar.addEvent(newEvent); // Adiciona o evento ao calendário
  
    newTitle.value = "";
    newEventStartDate.value = "";
    newEventEndDate.value = "";
  
    document.getElementById('addEventModal').style.display = 'none';
  });
  