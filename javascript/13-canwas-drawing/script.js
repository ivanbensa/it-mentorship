let clickPoints = [];

let canvasElement = document.getElementById("drawArea");
let ctx = canvasElement.getContext("2d");

let drawBtn = document.getElementById("drawBtn");
let resetBtn = document.getElementById("resetBtn");

canvasElement.addEventListener("click", function (event) {
    let rect = canvasElement.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;

    clickPoints.push({x: x, y: y});
});

drawBtn.addEventListener("click", function () {

    if (clickPoints.length >= 2) {
        ctx.beginPath();
        ctx.moveTo(clickPoints[0].x, clickPoints[0].y);

        for (let i = 1; i < clickPoints.length; i++) {
            ctx.lineTo(clickPoints[i].x, clickPoints[i].y);
        }

        ctx.stroke();
        clickPoints = [];
    }
});

resetBtn.addEventListener("click", function () {
    ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    clickPoints = [];
});
