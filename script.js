const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let pieces = [];

for (let i = 0; i < 170; i++) {
    pieces.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 8 + 2,
        speed: Math.random() * 3 + 1,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`
    });
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    pieces.forEach(p => {
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, p.size, p.size);

        p.y += p.speed;

        if (p.y > canvas.height) {
            p.y = 0;
            p.x = Math.random() * canvas.width;
        }
    });

    requestAnimationFrame(update);
}

update();
function createSpark() {
  const spark = document.createElement("div");
  spark.classList.add("spark");
  spark.style.left = Math.random() * 100 + "vw";
  spark.style.animationDuration = 2 + Math.random() * 3 + "s";
  document.body.appendChild(spark);

  setTimeout(() => spark.remove(), 5000);
}

setInterval(createSpark, 200);
const birthday = new Date("March 6, 2026 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = birthday - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  document.getElementById("countdown").innerText =
    days + " Days to Level 17 🚀";
}, 1000);
