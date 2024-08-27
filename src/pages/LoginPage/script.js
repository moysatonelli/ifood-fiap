const togglePassword = document.querySelector(".toggle-password");
const passwordInput = document.getElementById("password")

togglePassword.addEventListener("click", () => {
    togglePassword.classList.toggle("fa-regular")
    togglePassword.classList.toggle("fa-eye")
    togglePassword.classList.toggle("fa-regular")
    togglePassword.classList.toggle("fa-eye-slash")

    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
})


