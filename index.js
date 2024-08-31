let movingCircle = document.getElementById("cursor");

const mouseCursor = (e) => {
  movingCircle.style.left = e.clientX + "px";
  movingCircle.style.top = e.clientY + "px";
};

document.addEventListener("mousemove", mouseCursor);

const color = ["red", "blue", "green"];
let i = 0;
setInterval(() => {
  i = i % color.length;
  console.log(i);
  movingCircle.style.backgroundColor = color[i];
  i++;
}, 5000);
