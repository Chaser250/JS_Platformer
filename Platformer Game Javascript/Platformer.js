const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext('2d');
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;
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
        ctx.fillStyle = color;
        switch (shape) {
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

const player = new Sprite(400, 400, 30, 30, "rectangle", "00008b");
player.draw;





