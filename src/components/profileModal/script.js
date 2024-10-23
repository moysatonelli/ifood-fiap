const optionResult = document.querySelector(".option-result");
const toggleStatusBtn = document.getElementById("toggle-status-restaurant")

document.querySelector(".header-options-container").addEventListener("click", () =>{
    optionResult.innerHTML = `<form action="" class="profile-form">
                    <div class="change-picture">
                        <div class="profile-picture"></div>
                        <label for="upload-picture" class="upload-picture">Carregar Imagem</label>
                        <input type="file" id="upload-picture" hidden>

                       
                    </div>
                    <div class="fields">
                        <div class="field">
                            <label for="profile-name">Nome do Perfil</label>
                            <input type="text" id="profile-name">
                        </div>
                        <div class="field">
                            <label for="profile-email">E-mail</label>
                            <input type="email" id="profile-email">
                        </div>
                        <div class="field">
                            <label for="profile-tel">Número de Telefone</label>
                            <input type="tel" id="profile-tel">
                        </div>
                        <div class="field">
                            <label for="profile-acess">Nível de Acesso</label>
                            <select disabled name="profile-acess" id="profile-acess">
                                <option value="gerente">Gerente</option>
                                <option value="funcionario">Funcionário</option>
                                <option value="supervisor">Supervisor</option>
                                <option value="analista">Analista</option>
                            </select>
                        </div>
                        <div class="field">
                            <label for="profile-acess">Preferência de Notificação</label>
                            <select name="profile-alert" id="profile-aler">
                                <option value="SMS">SMS</option>
                                <option value="whatsapp">Whatsapp</option>
                                <option value="email">email</option>
                            </select>
                        </div>
                        <div class="field">
                            <label for="profile-nasc">Data de Nascimento</label>
                            <input type="date" id="profile-nasc">
                        </div>
                    </div>
                    <div class="buttons-form-profile">
                        <button class="exit-btn">Sair da Conta</button>
                        <button class="save-btn" type="submit">Salvar</button>
                    </div>
                </form>`
})

document.getElementById("restaurant-data").addEventListener("click", () =>{
    optionResult.innerHTML = `<form action="" class="profile-form">
                    <h1>Dados do Restaurante</h1>
                    <div class="fields">
                        <div class="field">
                            <label for="restaurant-name">Nome do Restaurante</label>
                            <input type="text" id="restaurant-name">
                        </div>
                        <div class="field">
                            <label for="restaurant-cep">CEP</label>
                            <input type="number" id="restaurant-cep">
                        </div>
                        <div class="field">
                            <label for="restaurant-adress">Endereço</label>
                            <input type="text" id="restaurant-adress">
                        </div>
                        <div class="field">
                            <label for="restaurant-cnpj">NPJ</label>
                            <input type="number" id="restaurant-cnpj">
                        </div>
                        <div class="field">
                            <label for="restaurant-operation">Funcionamento</label>
                            <input type="text" id="restaurant-operation">
                        </div>
                        <div class="field">
                            <label for="cozinha">Categoria da Cozinha</label>
                            <select id="cozinha" name="cozinha">
                                <option value="fastfood">Fast Food</option>
                                <option value="brasileira">Brasileira</option>
                                <option value="italiana">Italiana</option>
                                <option value="japonesa">Japonesa</option>
                                <option value="chinesa">Chinesa</option>
                                <option value="mexicana">Mexicana</option>
                                <option value="arabe">Árabe</option>
                                <option value="saudavel">Saudável</option>
                                <option value="vegetariana_vegana">Vegetariana/Vegana</option>
                                <option value="frutos_mar">Frutos do Mar</option>
                                <option value="churrasco">Churrasco</option>
                                <option value="pizza">Pizza</option>
                                <option value="salgados">Salgados</option>
                                <option value="doces">Doces/Sobremesas</option>
                                <option value="sanduiches">Sanduíches</option>
                                <option value="indiana">Comida Indiana</option>
                                <option value="cafe_lanches">Café e Lanches</option>
                                <option value="francesa">Culinária Francesa</option>
                                <option value="mediterranea">Culinária Mediterrânea</option>
                            </select>
                        </div>
                    </div>
                    <div class="buttons-form-profile">
                        <button class="save-btn" type="submit">Salvar</button>
                    </div>
                </form>`
})

document.getElementById("restaurant-settings").addEventListener("click", () =>{
    optionResult.innerHTML = ` <form action="">
                    <h1>Configurações Operacionais</h1>
                   
                   

                    <div class="fields">
                        <div class="left-fields">
                            <div class="field">
                                <label for="restaurant-status">Status do Restaurante</label>
                                <button id="toggle-status-restaurant" class="toggle-status-btn-open ">aberto</button>
                            </div>
                            <div class="field">
                                <label for="restaurant-delivery-value">Taxa de entrega</label>
                                <input type="number" id="restaurant-delivery-value">
                            </div>
                            <div class="field">
                                <label for="profile-nasc">Raio da Área de Entrega (km)</label>
                                <input type="number" id="profile-nasc">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.7630262912417!2d-46.73659782505752!3d-23.541024178813757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef8a6b0e6b435%3A0x6539c61690d9cf06!2sAv.%20Manuel%20Bandeira%2C%20360%20-%20Vila%20Leopoldina%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005317-020!5e0!3m2!1spt-PT!2sbr!4v1729702931771!5m2!1spt-PT!2sbr"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
    
                        <div class="right-fields">
                            <div class="field">
                                <label for="restaurant-max-orders">Capacidade de Pedidos por Hora</label>
                                <input type="number" id="restaurant-max-orders">
                            </div>
                            
                            <div class="field ">
                                <label for="restaurant-payments">Formas de Pagamento</label>
                                <div class="paymment-method-container">
                                    <div class="paymment-method">
                                        <label for="pix">Pix</label>
                                        <input type="checkbox" id="pix">
                                    </div>
                                    <div class="paymment-method">
                                        <label for="credit-card">Cartão de Crédito</label>
                                        <input type="checkbox" id="credit-card">
                                    </div>
                                    <div class="paymment-method">
                                        <label for="meal-voucher">Vale Refeição</label>
                                        <input type="checkbox" id="meal-voucher">
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div class="buttons-form-profile">
                        <button class="exit-btn">Sair da Conta</button>
                        <button class="save-btn" type="submit">Salvar</button>
                    </div>
                    
                </form>`
})

toggleStatusBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    if(toggleStatusBtn.innerHTML == "aberto") {
        toggleStatusBtn.innerHTML = "fechado"
    } else {
        toggleStatusBtn.innerHTML = "aberto"
    }
    toggleStatusBtn.classList.toggle("toggle-status-btn-close")
})