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

    drawPolygon(polygon) {
        const points = polygon.points;

        const ctx = this.ctx;
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);

        for (let i = 1; i < points.length; ++i) {
            const p = points[i];
            ctx.lineTo(p.x, p.y);
        }
        const st = points[0];
        ctx.lineTo(st.x, st.y);
        ctx.closePath();

        ctx.save();
        ctx.globalAlpha = polygon.opacity;
        ctx.lineWidth = polygon.lineWidth;

        if (polygon.fillColor !== 'none') {
            ctx.fillStyle = polygon.fillColor;
            ctx.fill();
        }

        ctx.strokeStyle = polygon.lineColor;
        ctx.stroke();
        ctx.restore();
    }

    drawImage(img, x, y, w, h) {
        this.ctx.drawImage(img, x, y, w, h);
    }
}