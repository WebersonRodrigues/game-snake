let dom_replay = document.querySelector("#replay");
let dom_score = document.querySelector("#score");
let dom_canvas = document.querySelector("#canvas");

let canvas = document.createElement('canvas');

dom_canvas.appendChild(canvas);

let ctx = canvas.getContext('2d');

const W = (canvas.width = 400);
const H = (canvas.height = 400);

let snake,
    food,
    currentHue,
    cells = 20,
    cellSize,
    isGameOver = false,
    tails = [],
    score = 00,
    maxScore = window.localStorage.getItem("maxScore") || undefined,
    particles =[],
    splashingParticleCount = 20,
    cellsCount,
    requestID;

    