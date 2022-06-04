

function searchToggle() {
  let searchFild = document.getElementById("search");

  if (searchFild.classList.contains("visble")) {
    searchFild.parentElement.submit();
    searchFild.classList.remove("visble");
  } else {
    searchFild.classList.add("visble");
    searchFild.focus();
    searchFild.focus();
  }
}

window.onload = function () {
    document.getElementsByClassName("search-icon")[0].onclick =searchToggle;
    // document.getElementById("search").onblur = function () {
    //     if(this.classList.contains("visble")){
    //         this.classList.remove("visble");
    //     }
    // }
    
};

// Some random colors
const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#87cefa", "#F85F36"];

const numBalls = 80;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 500)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 500)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random() * .5}em`;
  ball.style.height = ball.style.width;
  
  balls.push(ball);
  document.getElementsByClassName("animation")[0].append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -22 : 22),
    y: Math.random() * 24
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 3000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});