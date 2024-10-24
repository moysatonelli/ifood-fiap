const optionResult = document.querySelector(".modal-option-result");
const modal = document.querySelector(".modal-modal-container")


document.querySelector(".modal-header-options-container").addEventListener("click", () =>{
    optionResult.innerHTML = `<form action="" class="modal-form">
                    <div class="modal-change-picture">
                        <div class="modal-profile-picture"></div>
                        <label for="upload-picture" class="modal-upload-picture">Carregar Imagem</label>
                        <input type="file" id="upload-picture" hidden>

                    </div>
                    <div class="modal-fields">
                        <div class="modal-field">
                            <label for="profile-name">Nome do Perfil</label>
                            <input type="text" id="profile-name">
                        </div>
                        <div class="modal-field">
                            <label for="profile-email">E-mail</label>
                            <input type="email" id="profile-email">
                        </div>
                        <div class="modal-field">
                            <label for="profile-tel">Número de Telefone</label>
                            <input type="tel" id="profile-tel">
                        </div>
                        <div class="modal-field">
                            <label for="profile-acess">Nível de Acesso</label>
                            <select disabled name="profile-acess" id="profile-acess">
                                <option value="gerente">Gerente</option>
                                <option value="funcionario">Funcionário</option>
                                <option value="supervisor">Supervisor</option>
                                <option value="analista">Analista</option>
                            </select>
                        </div>
                        <div class="modal-field">
                            <label for="profile-alert">Preferência de Notificação</label>
                            <select name="profile-alert" id="profile-aler">
                                <option value="SMS">SMS</option>
                                <option value="whatsapp">Whatsapp</option>
                                <option value="email">email</option>
                            </select>
                        </div>
                        <div class="modal-field">
                            <label for="profile-nasc">Data de Nascimento</label>
                            <input type="date" id="profile-nasc">
                        </div>
                    </div>
                    <div class="modal-buttons-form-profile">
                        <button class="modal-exit-btn"><a href="../../pages/LoginPage/index.html">Sair da Conta</a></button>
                        <button class="modal-save-btn" type="submit">Salvar</button>
                    </div>
                </form>`
})

document.getElementById("modal-restaurant-data").addEventListener("click", () =>{
    optionResult.innerHTML = `<form action="" class="modal-form">
                    <h1>Dados do Restaurante</h1>
                    <div class="modal-fields">
                        <div class="modal-field">
                            <label for="restaurant-name">Nome do Restaurante</label>
                            <input type="text" id="restaurant-name">
                        </div>
                        <div class="modal-field">
                            <label for="restaurant-cep">CEP</label>
                            <input type="number" id="restaurant-cep">
                        </div>
                        <div class="modal-field">
                            <label for="restaurant-adress">Endereço</label>
                            <input type="text" id="restaurant-adress">
                        </div>
                        <div class="modal-field">
                            <label for="restaurant-cnpj">NPJ</label>
                            <input type="number" id="restaurant-cnpj">
                        </div>
                        <div class="modal-field">
                            <label for="restaurant-operation">Funcionamento</label>
                            <input type="text" id="restaurant-operation">
                        </div>
                        <div class="modal-field">
                            <label for="cozinha">Categoria da Cozinha</label>
                            <select id="modal-cozinha" name="cozinha">
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
                    <div class="modal-buttons-form-profile">
                        <button class="modal-save-btn" type="submit">Salvar</button>
                    </div>
                </form>`
})

document.getElementById("modal-restaurant-settings").addEventListener("click", () => {
    optionResult.innerHTML = `<form action="" class="modal-form">
        <h1>Configurações Operacionais</h1>
        <div class="modal-fields">
            <div class="modal-left-fields">
                <div class="modal-field">
                    <label for="modal-restaurant-status">Status do Restaurante</label>
                    <button id="modal-toggle-status-restaurant" class="modal-toggle-status-btn-open">aberto</button>
                </div>
                <div class="modal-field">
                    <label for="restaurant-delivery-value">Taxa de entrega</label>
                    <input type="number" id="restaurant-delivery-value">
                </div>
                <div class="modal-field">
                    <label for="profile-nasc">Raio da Área de Entrega (km)</label>
                    <input type="number" id="profile-nasc">
                    <iframe class="modal-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.7630262912417!2d-46.73659782505752!3d-23.541024178813757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef8a6b0e6b435%3A0x6539c61690d9cf06!2sAv.%20Manuel%20Bandeira%2C%20360%20-%20Vila%20Leopoldina%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005317-020!5e0!3m2!1spt-PT!2sbr!4v1729702931771!5m2!1spt-PT!2sbr"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div class="modal-right-fields">
                <div class="modal-field">
                    <label for="restaurant-max-orders">Capacidade de Pedidos por Hora</label>
                    <input type="number" id="restaurant-max-orders">
                </div>
                <div class="modal-field">
                    <label for="restaurant-payments">Formas de Pagamento</label>
                    <div class="modal-paymment-method-container">
                        <div class="modal-paymment-method">
                            <label for="pix">Pix</label>
                            <input type="checkbox" id="pix">
                        </div>
                        <div class="modal-paymment-method">
                            <label for="credit-card">Cartão de Crédito</label>
                            <input type="checkbox" id="credit-card">
                        </div>
                        <div class="modal-paymment-method">
                            <label for="meal-voucher">Vale Refeição</label>
                            <input type="checkbox" id="meal-voucher">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-buttons-form-profile">
            <button class="modal-save-btn" type="submit">Salvar</button>
        </div>
    </form>`;

    // Adiciona o event listener após o botão ser inserido no DOM
    const toggleStatusBtn = document.getElementById("modal-toggle-status-restaurant");
    toggleStatusBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (toggleStatusBtn.innerHTML == "aberto") {
            toggleStatusBtn.innerHTML = "fechado";
        } else {
            toggleStatusBtn.innerHTML = "aberto";
        }
        toggleStatusBtn.classList.toggle("modal-toggle-status-btn-close");
    });
});

document.getElementById("modal-restaurant-menu").addEventListener("click", () =>{
    optionResult.innerHTML = `<form action="" class="modal-form">

                    <h1>Cardápio</h1>
                    
                    <table class="modal-table">
                        <tr>
                            <th>Nome</th>
                            <th>Preço</th>
                            <th>Categoria</th>
                            <th>Remover Prato</th>
                        </tr>
                        <tr>
                            <td>Hambúrguer Clássico</td>
                            <td>24,90</td>
                            <td>Prato Principal</td>
                            <td><button>REMOVER</button></td>
                        </tr>
                        <tr>
                        <td>Pizza Marguerita</td>
                        <td>45,00</td>
                        <td>Prato Principal</td>
                        <td><button>REMOVER</button></td>
                    </tr>
                    <tr>
                        <td>Frango à Parmegiana</td>
                        <td>32,50</td>
                        <td>Prato Principal</td>
                        <td><button>REMOVER</button></td>
                    </tr>
                    <tr>
                        <td>Salada Caesar</td>
                        <td>19,90</td>
                        <td>Entradas</td>
                        <td><button>REMOVER</button></td>
                    </tr>
                    <tr>
                        <td>Espaguete à Carbonara</td>
                        <td>27,00</td>
                        <td>Prato Principal</td>
                        <td><button>REMOVER</button></td>
                    </tr>
                    <tr>
                        <td>Risoto de Cogumelos</td>
                        <td>39,90</td>
                        <td>Prato Principal</td>
                        <td><button>REMOVER</button></td>
                    </tr>
                    <tr>
                        <td>Brownie de Chocolate</td>
                        <td>12,50</td>
                        <td>Sobremesas</td>
                        <td><button>REMOVER</button></td>
                    </tr>
                    <tr>
                        <td>Mousse de Maracujá</td>
                        <td>10,00</td>
                        <td>Sobremesas</td>
                        <td><button>REMOVER</button></td>
                    </tr>
                   
                </table>
                <div class="modal-buttons-form-profile">
                    <button class="modal-save-btn" type="submit">Salvar</button>
                </div>
            </form>`
})

document.getElementById("modal-restaurant-special-hours").addEventListener("click", () => {
    optionResult.innerHTML = `<form action="" class="modal-form">
                    <h1>Horários Especiais</h1>
                
                    <table class="modal-table">
                        <tr>
                            <th>Data</th>
                            <th>Abertura</th>
                            <th>Fechamento</th>
                            <th>Remover Data</th>
                        </tr>
                        <tr>
                            <td>26/10</td>
                            <td>09:00</td>
                            <td>17:00</td>
                            <td><button class="modal-remove-btn">REMOVER</button></td>
                        </tr>
                        <tr>
                            <td>27/10</td>
                            <td>08:00</td>
                            <td>16:00</td>
                            <td><button class="modal-remove-btn">REMOVER</button></td>
                        </tr>
                        <tr>
                            <td>28/10</td>
                            <td>10:00</td>
                            <td>18:00</td>
                            <td><button class="modal-remove-btn">REMOVER</button></td>
                        </tr>
                        <tr>
                            <td>29/10</td>
                            <td>11:00</td>
                            <td>19:00</td>
                            <td><button class="modal-remove-btn">REMOVER</button></td>
                        </tr>
                        <tr>
                            <td>30/10</td>
                            <td>07:00</td>
                            <td>15:00</td>
                            <td><button class="modal-remove-btn">REMOVER</button></td>
                        </tr>
                        <tr>
                            <td>31/10</td>
                            <td>12:00</td>
                            <td>20:00</td>
                            <td><button class="modal-remove-btn">REMOVER</button></td>
                        </tr>
                        <tr>
                            <td colspan="4" class="modal-add-date-row">
                                <button class="modal-add-date-btn">ADICIONAR DATA</button>
                            </td>
                        </tr>
                    </table>
                
                    <div class="modal-buttons-form-profile">
                        <button class="modal-save-btn" type="submit">Salvar</button>
                    </div>
                </form>`
})

document.getElementById("modal-restaurant-alerts").addEventListener("click", () => {
    optionResult.innerHTML = `<form action="" class="modal-form">
                    <h1>Notificações</h1>
                
                    <div class="toggles-container">
                        <div class="align-container-checkbox">
                            <div class="inputs-container">
                                <input type="checkbox" name="email" id="email" class="toggle-input">
                                <label for="email" class="toggle-label"></label>
                            </div>
                            <label class="modal-alert-label" for="email">E-mail</label>
                        </div>
                
                        <div class="align-container-checkbox">
                            <div class="inputs-container">
                                <input type="checkbox" name="sms" id="sms" class="toggle-input">
                                <label for="sms" class="toggle-label"></label>
                            </div>
                            <label class="modal-alert-label" for="sms">SMS</label>
                        </div>
                
                        <div class="align-container-checkbox">
                            <div class="inputs-container">
                                <input type="checkbox" checked name="whatsapp" id="whatsapp" class="toggle-input">
                                <label for="whatsapp" class="toggle-label"></label>
                            </div>
                            <label class="modal-alert-label" for="whatsapp">WhatsApp</label>
                        </div>
                
                        <div class="align-container-checkbox">
                            <div class="inputs-container">
                                <input type="checkbox" checked name="new-orders" id="new-orders" class="toggle-input">
                                <label for="new-orders" class="toggle-label"></label>
                            </div>
                            <label class="modal-alert-label" for="new-orders">Novos Pedidos</label>
                        </div>
                
                        <div class="align-container-checkbox">
                            <div class="inputs-container">
                                <input type="checkbox" checked name="restaurant-status" id="restaurant-status" class="toggle-input">
                                <label for="restaurant-status" class="toggle-label"></label>
                            </div>
                            <label class="modal-alert-label" for="restaurant-status">Status do Restaurante</label>
                        </div>
                    </div>

                    <div class="modal-buttons-form-profile">
                        <button class="modal-save-btn" type="submit">Salvar</button>
                    </div>
                </form>`
})

document.getElementById("modal-restaurant-coupons").addEventListener("click", () =>{
    optionResult.innerHTML = `<form action="" class="modal-form">
                    <h1>Cupons de Desconto</h1>
                
                    <table class="modal-table">
                        <tr>
                            <th>Código</th>
                            <th>Data Início</th>
                            <th>Data Fim</th>
                            <th>Desconto %</th>
                            <th>Status</th>
                        </tr>
                        <tr>
                            <td>DESCONTO10</td>
                            <td>01/10/2024</td>
                            <td>31/10/2024</td>
                            <td>10%</td>
                            <td style="color: red;">Inativo</td>
                        </tr>
                        <tr>
                            <td>PRIMEIRA20</td>
                            <td>01/10/2024</td>
                            <td>31/10/2024</td>
                            <td>20%</td>
                            <td style="color: red;">Inativo</td>
                        </tr>
                        <tr>
                            <td>FRETEGRATIS</td>
                            <td>01/10/2024</td>
                            <td>31/10/2024</td>
                            <td>15%</td>
                            <td style="color: green;">Ativo</td>
                        </tr>
                        <tr>
                            <td>FDS15</td>
                            <td>01/10/2024</td>
                            <td>31/10/2024</td>
                            <td>15%</td>
                            <td style="color: red;">Inativo</td>
                        </tr>
                        <tr>
                            <td>VERAO25</td>
                            <td>01/10/2024</td>
                            <td>31/10/2024</td>
                            <td>25%</td>
                            <td style="color: red;">Inativo</td>
                        </tr>
                        <tr>
                            <td>LANCHENIGHT</td>
                            <td>01/10/2024</td>
                            <td>31/10/2024</td>
                            <td>10%</td>
                            <td style="color: green;">Ativo</td>
                        </tr>
                        <tr>
                            <td>COMBO30</td>
                            <td>01/10/2024</td>
                            <td>31/10/2024</td>
                            <td>30%</td>
                            <td style="color: green;">Ativo</td>
                        </tr>
                        <tr>
                            <td colspan="5" class="modal-add-date-row">
                                <button class="modal-add-date-btn">Novo Cupom</button>
                            </td>
                        </tr>
                    </table>
                
                    <div class="modal-buttons-form-profile">
                        <button class="modal-save-btn" type="submit">Salvar</button>
                    </div>
                </form>`
})

document.querySelector(".modal-close-modal").addEventListener("click", ()=>{
    modal.style.display = "none";
})

document.querySelector(".perfil-user").addEventListener("click", () =>{
    modal.style.display = "flex";
})
