const canvas = document.getElementById('canvas2');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;
let gameSpeed = 15;

const backgroundLayer1 = new Image();
backgroundLayer1.src = '../backgroundLayers/layer-1.png';
const backgroundLayer2 = new Image();
backgroundLayer2.src = 'file:///Users/morgannelson/Desktop/GameDevelopment/project2/backgroundLayers/layer-1.png';
const backgroundLayer3 = new Image();
backgroundLayer3.src = '../backgroundLayers/layer-3.png';
const backgroundLayer4 = new Image();
backgroundLayer4.src = '../backgroundLayers/layer-4.png';
const backgroundLayer5 = new Image();
backgroundLayer5.src = "../backgroundLayers/layer-5.png";

let x = 0;
let x2 = 2400;

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(backgroundLayer2, x, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(backgroundLayer2, x2, 0);
    if (x < -2400) x = 2400 + x2 - gameSpeed;
    else x -= gameSpeed;
    if (x2 < -2400) x2 = 2400 + x - gameSpeed;
    else x2 -= gameSpeed;
    requestAnimationFrame(animate);
};
animate();