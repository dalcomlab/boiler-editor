export class HoverPolygonRender {
    constructor(polygon) {
        this.polygon = polygon;
    }

    render(ctx) {
        const points = this.polygon.points;

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);

        for (let i = 1; i < points.length; ++i) {
            const p = points[i];
            ctx.lineTo(p.x, p.y);
        }
        const st = points[0];
        ctx.lineTo(st.x, st.y);
        ctx.closePath();

        if (this.fillColor !== 'none') {
            ctx.globalAlpha = 0.5;
            ctx.fillStyle = 'rgb(53,155,255)';
            ctx.fill();
        }
        ctx.restore();
    }
}