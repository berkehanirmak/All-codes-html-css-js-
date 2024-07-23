document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".box");

  boxes.forEach((box) => {
    let percentage = 0;
    const targetPercentage = box.style.getPropertyValue("--i");
    const color = box.style.getPropertyValue("--clr");
    const circle = box.querySelector(".circle");

    const interval = setInterval(() => {
      if (percentage >= targetPercentage) {
        clearInterval(interval);
      } else {
        percentage++;
        circle.style.setProperty("--percent", percentage);
        circle.style.background = `conic-gradient(from 0deg, ${color} ${
          percentage * 3.6
        }deg, #333 ${percentage * 3.6}deg)`;
      }
    }, 17);
  });
});
