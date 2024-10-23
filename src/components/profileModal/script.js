const optionResult = document.querySelector(".option-result");

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