const togglePassword = document.querySelector(".toggle-password");
const passwordInput = document.getElementById("password");
const formLogin = document.getElementById("login");

togglePassword.addEventListener("click", () => {
  togglePassword.classList.toggle("fa-regular");
  togglePassword.classList.toggle("fa-eye");
  togglePassword.classList.toggle("fa-regular");
  togglePassword.classList.toggle("fa-eye-slash");

  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
});

formLogin.addEventListener("submit", function (event) {
  event.preventDefault();

  console.log("Login");
  window.location.href = "/src/pages/dashboard/index.html";
});
