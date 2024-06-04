export class Painter {
    constructor(ctx) {
        this.ctx = ctx;
    }

    line(p1, p2, color = 'black', width = 1, opacity = 1) {
        const ctx = this.ctx;
        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.globalAlpha = opacity;
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
        return this;
    }

    drawImage(img, x, y, w, h) {
        this.ctx.drawImage(img, x, y, w, h);
    }
}