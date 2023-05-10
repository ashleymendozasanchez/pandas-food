const menuIcon = document.querySelector(".menu-icono");
const menuTab = document.getElementsByClassName("tab");
const tab1 = document.querySelector(".pro1");
const tab2 = document.querySelector(".pro2");
const tab3 = document.querySelector(".pro3");
const buy = document.getElementsByClassName(".buy");
const modal = document.querySelector("#modal");
const modalButton = document.querySelector("#modal-button");
const close = document.querySelector("#cerrar-modal");

menuIcon.addEventListener("click", () => {
  document.querySelector(".menu-icono").classList.toggle("open");
  document.querySelector(".nav-bar").classList.toggle("show");
});

for (let i = 0; i < menuTab.length; i++) {
  menuTab[i].addEventListener("click", () => {
    switch (i) {
      case 0:
        menuTab[i].classList.toggle("active");
        tab1.classList.toggle("hidden");
        break;
      case 1:
        menuTab[i].classList.toggle("active");
        tab2.classList.toggle("hidden");
        break;
      case 2:
        menuTab[i].classList.toggle("active");
        tab3.classList.toggle("hidden");
        break;
    }
  });
}

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("buy")) {
    modal.style.display = "flex";
  } else if (e.target.id === "modal-button") {
    modal.style.display = "none";
  } else if (e.target.id === "cerrar-modal") {
    modal.style.display = "none";
  }
});
