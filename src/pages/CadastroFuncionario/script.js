
    // Função para carregar estados de um arquivo JSON e adicionar ao select
    async function loadUf() {
        try {
            const response = await fetch('estados.json'); 
            const data = await response.json(); 
            const select = document.querySelector('#estado'); 
    
            data.forEach(estado => {
                const option = document.createElement('option'); 
                option.value = estado.value; 
                option.textContent = estado.name; 
                select.appendChild(option); 
            });
        } catch (error) {
            console.error('Erro ao carregar estados:', error); 
        }
    }
    
    loadUf();

    // Função para upload de imagem
    const previewImage = document.getElementById('preview-image');
    const photoInput = document.getElementById('photo');

    photoInput.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
          const reader = new FileReader();
      
          reader.onload = function(e) {
            previewImage.src = e.target.result;
          };
      
          reader.readAsDataURL(file);
        }
    });


    photoInput.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
          const reader = new FileReader();
      
          reader.onload = function(e) {
            const img = new Image();
            img.onload = function() {
              const canvas = document.createElement('canvas');
              canvas.width = 235;
              canvas.height = 251;
              const ctx = canvas.getContext('2d');
      
              // Manter proporção e evitar corte
              const aspectRatio = img.width / img.height;
              let drawWidth = 235;
              let drawHeight = 251;
              if (aspectRatio > 1) { // Imagem mais larga que alta
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