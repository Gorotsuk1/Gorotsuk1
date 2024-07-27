// Отключение правой кнопки мыши на видео
document
  .getElementById("videoPres")
  .addEventListener("contextmenu", function (event) {
    event.preventDefault();
  });

// Общий запрет правой кнопки мыши на всей странице
document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});
