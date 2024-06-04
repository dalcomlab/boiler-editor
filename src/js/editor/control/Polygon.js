import {Control} from "./Control.js";
import {HoverPolygonRender} from "./render/HoverPolygonRender.js";
import {SelectPolygonRender} from "./render/SelectPolygonRender.js";

export class Polygon extends Control {
    constructor() {
        super();
        this._points = [];
        this._fillColor = 'rgb(0,255,5)';
        this._lineColor = 'rgb(0,255,5)';
        this._lineWidth = 7;
        this._opacity = 0.2;
        this._minPoint = {x: 0, y: 0};
        this._maxPoint = {x: 0, y: 0};
    }

    get points() {
        return this._points;
    }

    get fillColor() {
        return this._fillColor;
    }

    set fillColor(value) {
        this._fillColor = value;
    }

    get lineColor() {
        return this._lineColor;
    }

    set lineColor(value) {
        this._lineColor = value;
    }

    get lineWidth() {
        return this._lineWidth;
    }

    set lineWidth(value) {
        this._lineWidth = value;
    }

    get opacity() {
        return this._opacity;
    }

    set opacity(value) {
        this._opacity = value;
    }

    get minPoint() {
        return this._minPoint;
    }

    get maxPoint() {
        return this._maxPoint;
    }

    update() {
        const points = this.points;
        const p0 = points[0];
        this._minPoint.x = p0.x;
        this._minPoint.y = p0.y;

        points.forEach(p => {
            this._minPoint.x = Math.min(this._minPoint.x, p.x);
            this._minPoint.y = Math.min(this._minPoint.y, p.y);
            this._maxPoint.x = Math.max(this._maxPoint.x, p.x);
            this._maxPoint.y = Math.max(this._maxPoint.y, p.y);
        })
    }

    render(ctx) {
        this.#drawPolygon(ctx);
    }

    #drawPolygon(ctx) {
        const points = this.points;

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
        ctx.lineWidth = this.lineWidth;

        if (this.fillColor !== 'none') {
            ctx.globalAlpha = this.opacity;
            ctx.fillStyle = this.fillColor;
            ctx.fill();
        }

        ctx.globalAlpha = 1;
        ctx.strokeStyle = this.lineColor;
        ctx.stroke();
        ctx.restore();
    }

    ptInControl(p) {
        let x = p.x, y = p.y;
        let inside = false;
        const points = this._points;
        for (let i = 0, j = points.length - 1; i < points.length; j = i++) {
            let xi = points[i].x, yi = points[i].y;
            let xj = points[j].x, yj = points[j].y;
            let intersect = ((yi > y) !== (yj > y)) &&
                (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
            if (intersect) inside = !inside;
        }
        return inside;
    }

    ptInSelectControl(p) {
        return this.ptInControl(p) ?
            new SelectPolygonRender(this) : null;
    }

    ptInHoverControl(p) {
        return this.ptInControl(p) ?
            new HoverPolygonRender(this) : null;
    }
}