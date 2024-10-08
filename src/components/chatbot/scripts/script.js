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

// Evento para o botão de enviar
document.getElementById('send').addEventListener('click', sendMessage);

// Evento para capturar a tecla Enter no campo de input
document.getElementById('user-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});
