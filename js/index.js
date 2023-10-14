let element = document.querySelectorAll(".element-sobre");

element.forEach((el) => {
  el.addEventListener("click", () => {
    el.classList.toggle("ativo");
  });
});
