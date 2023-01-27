var x = 0;
var y = 0;

document.addEventListener("keydown", (mover_caja) => {
  var cubo = document.getElementById("cubo");

  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  switch (mover_caja.code) {
    case "ArrowDown":
      if (y >= screenHeight - 110) break;
      cubo.style.top = (y += 20) + "px";
      break;
    case "ArrowUp":
      if (y <= 0) break;
      cubo.style.top = (y -= 10) + "px";
      break;
    case "ArrowLeft":
      if (x <= 0) break;
      cubo.style.left = (x -= 10) + "px";
      break;
    case "ArrowRight":
      if (x >= screenWidth - 110) break;
      cubo.style.left = (x += 10) + "px";
      break;
  }

});
