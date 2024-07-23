document
  .getElementById("togglePassword")
  .addEventListener("click", function (e) {
    const password = document.getElementById("password");
    const type =
      password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    this.textContent = type === "password" ? "👁️" : "👁️‍🗨️";
  });

document
  .getElementById("toggleConfirmPassword")
  .addEventListener("click", function (e) {
    const confirmPassword = document.getElementById("confirm-password");
    const type =
      confirmPassword.getAttribute("type") === "password" ? "text" : "password";
    confirmPassword.setAttribute("type", type);
    this.textContent = type === "password" ? "👁️" : "👁️‍🗨️";
  });
