let clickPoints = [];
let polygonCounter = 0;

const canvasElement = document.getElementById("drawArea");
const ctx = canvasElement.getContext("2d");

const finishBtn = document.getElementById("finishBtn");
const undoBtn = document.getElementById("undoBtn");
const resetBtn = document.getElementById("resetBtn");
const info = document.getElementById("info");

function generateRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
}

function distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.sqrt(dx * dx + dy * dy);
}

function calculatePerimeter(points) {
    if (points.length < 3) return 0;

    let sum = 0;
    for (let i = 0; i < points.length - 1; i++) {
        sum += distance(points[i], points[i + 1]);
    }
    // closing: last point -> first point
    sum += distance(points[points.length - 1], points[0]);

    return sum;
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
}

function drawPoint(p) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
    ctx.fill();
}

function redrawScene() {
    clearCanvas();

    // draw preview lines (open path) + points
    if (clickPoints.length === 0) {
        renderInfo();
        return;
    }

    ctx.save();

    ctx.fillStyle = "#000";
    for (const p of clickPoints) drawPoint(p);

    // open line (gray)
    if (clickPoints.length >= 2) {
        ctx.beginPath();
        ctx.moveTo(clickPoints[0].x, clickPoints[0].y);
        for (let i = 1; i < clickPoints.length; i++) {
            ctx.lineTo(clickPoints[i].x, clickPoints[i].y);
        }
        ctx.strokeStyle = "#666";
        ctx.lineWidth = 2;
        ctx.stroke();
    }

    ctx.restore();
    renderInfo();
}

function drawPolygon(points, color) {
    if (points.length < 3) return;

    ctx.save();
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);

    for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
    }

    // zatvori poligon
    ctx.lineTo(points[0].x, points[0].y);

    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.restore();
}

function renderInfo(extraMessage = "") {
    const n = clickPoints.length;
    const last = n > 0 ? clickPoints[n - 1] : null;

    info.innerHTML = `
    <div>
      <span class="pill">Points: ${n}</span>
      <span class="pill">Polygons drawn: ${polygonCounter}</span>
    </div>
    <div>
      Last point: ${
        last ? `x=${Math.round(last.x)}, y=${Math.round(last.y)}` : "—"
    }
    </div>
    ${extraMessage ? `<div><b>${extraMessage}</b></div>` : ""}
    <div style="opacity:.8;margin-top:6px;">
      Click the points. When you have at least 3 points, click <b>Finish polygon</b>.
    </div>
  `;
}

// --- events ---
canvasElement.addEventListener("click", function (event) {
    const rect = canvasElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    clickPoints.push({ x, y });
    redrawScene();
});

finishBtn.addEventListener("click", function () {
    if (clickPoints.length < 3) {
        renderInfo("A minimum of 3 points is required for a polygon.");
        return;
    }

    const color = generateRandomColor();
    drawPolygon(clickPoints, color);

    const perimeter = calculatePerimeter(clickPoints);
    polygonCounter++;

    renderInfo(`Polygon #${polygonCounter} (${clickPoints.length} sides) | Perimeter: ${perimeter.toFixed(2)} px | Color: ${color}`);

    // reset for the next polygon
    clickPoints = [];
});

undoBtn.addEventListener("click", function () {
    if (clickPoints.length === 0) return;
    clickPoints.pop();
    redrawScene();
});

resetBtn.addEventListener("click", function () {
    clearCanvas();
    clickPoints = [];
    polygonCounter = 0;
    renderInfo("Resetovano.");
});

// init
renderInfo();
