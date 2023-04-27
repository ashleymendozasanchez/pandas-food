const menuIcon = document.querySelector(".menu-icono");
const menuTab = document.getElementsByClassName("tab");
const tab1 = document.querySelector(".pro1");
const tab2 = document.querySelector(".pro2");
const tab3 = document.querySelector(".pro3");

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
