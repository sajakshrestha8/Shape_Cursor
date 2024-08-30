let movingCircle = document.getElementById("cursor");

const mouseCursor = (e) => {
  movingCircle.style.left = e.clientX + "px";
  movingCircle.style.top = e.clientY + "px";
};

document.addEventListener("mousemove", mouseCursor);

const changingColor = () => {
  const color = ["red", "blue", "green"];
  for (let i = 0; i <= color.length; i++) {
    setInterval(() => {
      movingCircle.style.backgroundColor = color[i];
    }, 1000);
  }
};
