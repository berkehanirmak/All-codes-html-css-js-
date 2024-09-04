const btn = document.querySelectorAll(".btn");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function (e) {
    if (btn[i].querySelector("i").classList.contains("fa-plane")) {
      const isActive = btn[i].classList.contains("button-clicked");

      if (isActive) {
        btn.forEach((button) => {
          button.disabled = false;
          button.classList.remove("button-clicked");
          button.firstElementChild.classList.remove("icon-clicked");
        });
      } else {
        btn.forEach((button) => {
          button.disabled = true;
          button.classList.remove("button-clicked");
          button.firstElementChild.classList.remove("icon-clicked");
        });
        btn[i].classList.add("button-clicked");
        btn[i].firstElementChild.classList.add("icon-clicked");
        btn[i].disabled = false;
      }
    } else {
      btn[i].classList.toggle("button-clicked");
      btn[i].firstElementChild.classList.toggle("icon-clicked");
    }
  });
}
