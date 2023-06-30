const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 500;
const CANVAS_HEIGHT = canvas.height = 300;
let gameSpeed = 15;

const backgroundLayer1 = new Image();
backgroundLayer1.src = 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/dd1c3d16532917.562ad5374e593.png';
const backgroundLayer2 = new Image();
backgroundLayer2.src = '../backgroundLayers/layer-2.png';
const backgroundLayer3 = new Image();
backgroundLayer3.src = '../backgroundLayers/layer-3.png';
const backgroundLayer4 = new Image();
backgroundLayer4.src = '../backgroundLayers/layer-4.png';
const backgroundLayer5 = new Image();
backgroundLayer5.src = '../backgroundLayers/layer-5.png';

let x = 0;
let x2 = 400;

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(backgroundLayer1, x, 0);
    ctx.drawImage(backgroundLayer1, x2, 0);
    if (x < -400) x = 400 + x2 - gameSpeed;
    else x -= gameSpeed;
    if (x2 < -400) x2 = 400 + x - gameSpeed;
    else x2 -= gameSpeed;
    requestAnimationFrame(animate);
};
animate();