const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext('2d');
//ctx.canvas.width = window.innerWidth;
//ctx.canvas.height = window.innerHeight;
class Sprite {
    constructor(x, y, width, height, shape, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.shape = shape;
        this.color = color;
    };
    draw() {
        ctx.fillStyle = this.color;
        switch (this.shape) {
            case "rectangle":
                ctx.fillRect(this.x, this.y, this.width, this.height * -1);
                break;
            case "triangle":
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.x + (this.width / 2), this.y - this.height);
                ctx.lineTo(this.x + (this.width), this.y);
                ctx.lineTo(this.x, this.y)
                ctx.fill();
                ctx.closePath();
                break;
            case "circle":
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.width / 2, 0, 2 * Math.PI);
                ctx.fill();
                ctx.closePath();
                break
        };
    };
}

let keys = {
    left: 0,
    right: 0,
    up: 0,
    shift: 0
}
window.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft' || e.key === 'KeyA')
        keys.left++;
    if (e.key === 'ArrowRight' || e.key === 'KeyD')
        keys.right++;
    if (e.key === 'ArrowUp' || e.key === 'KeyW' || e.key === 'Space')
        keys.up++;
    if (e.key === 'ShiftLeft' || e.key === 'ShiftRight')
        keys.shift++;      
    }
});

window.addEventListener('keyup', function (e) {
    if (e.key === 'ArrowLeft')
        keys.left = false;
    if (e.key === 'ArrowRight')
        keys.right = false;
});


const player = new Sprite(60, 60, 15, 15, "rectangle", "#00008b");
player.draw();





