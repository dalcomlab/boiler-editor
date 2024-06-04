export class SelectPolygonRender {
    constructor(polygon) {
        this.polygon = polygon;
    }

    render(ctx) {
        const polygon  = this.polygon;
        const points = polygon.points;

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

        const patternCanvas = document.createElement('canvas');
        const width = Math.abs(polygon.maxPoint.x - polygon.minPoint.x);
        const height = Math.abs(polygon.maxPoint.y - polygon.minPoint.y);
        patternCanvas.width = width;
        patternCanvas.height = height;
        const pctx = patternCanvas.getContext('2d');

        // 빗금 그리기
        pctx.strokeStyle = 'black';
        pctx.lineWidth = 1;
        pctx.beginPath();
        pctx.moveTo(0, height);
        pctx.lineTo(width, 0);
        pctx.stroke();

        ctx.fillColor = 'grey';
        ctx.fillStyle = ctx.createPattern(patternCanvas, 'repeat');
        ctx.fill();

        ctx.restore();
    }
}