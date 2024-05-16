import {Painter} from "./Painter.js";
import {Coordinate} from "./Coordinate.js";

export class Page {
    constructor(ctx) {
        this.ctx = ctx;
        this._painter = new Painter(ctx);
        this._coordinate = new Coordinate();
        this._shapes = [];

        this.gridSize = 25;
        this.gridCount = 5;
    }

    get shapes() {
        return this._shapes;
    }

    get painter() {
        return this._painter;
    }

    get coordinate() {
        return this._coordinate;
    }

    addShape(shape) {
        this.shapes.push(shape);
    }

    render() {
        this.renderBackground();
        this._shapes.forEach(s => {
            s.render();
        });
    }

    renderBackground() {
        this.renderGrid();

        const painter = this.painter;
        painter.line({x: 0, y: 0}, {x: 50, y: 50});
    }

    renderGrid() {
        const coordinate = this.coordinate;
        const width = this.ctx.canvas.width / coordinate.dpr;
        const height = this.ctx.canvas.height / coordinate.dpr;

        const sX = -coordinate.wayPoint.x;
        const eX = sX + width;
        const sY = -coordinate.wayPoint.y;
        const eY = sY + height;

        this.ctx.clearRect(sX-1, sY-1, width+2, height+2);
        this.renderGridLine(sX, eX, sY, eY, true);
        this.renderGridLine(sY, eY, sX, eX, false);
    }

    renderGridLine(sP, eP, sP1, eP1, isVertical) {
        const gridSize = this.gridSize;
        let rX = sP % gridSize;
        let gridIdx = Math.floor(sP/gridSize);

        if (rX !== 0) {
            gridIdx = sP < 0 ? gridIdx-1 : gridIdx+1;
            sP = (gridIdx) * gridSize;
        }

        for (let i = sP; i < eP;) {
            const lineWidth = (gridIdx % this.gridCount) === 0 ? 2 : 1;
            const color = (gridIdx % this.gridCount) === 0 ?
                'rgba(0, 0, 0, 0.6)' :
                'rgb(129, 138, 138)';
            isVertical ? this.painter.line({x: i, y:sP1}, {x: i, y: eP1}, color, lineWidth) :
                this.painter.line({x: sP1, y: i}, {x: eP1, y: i}, color, lineWidth);
            i += gridSize;
            ++gridIdx;
        }
    }

    getLinePoint(p1, p2, isVertical) {
        if (isVertical) {
            return {p1, p2};
        }

        return {p1: {x: p1.y, y: p1.x}, p2: {x: p2.y, y: p2.x}};
    }

    transform() {
        const wayPoint = this.coordinate.wayPoint;
        const dpr = this.coordinate.dpr;

        const orgWayPoint = {
            x: wayPoint.x * dpr,
            y: wayPoint.y * dpr
        };

        this.ctx.setTransform(dpr, 0, 0, dpr, orgWayPoint.x, orgWayPoint.y);
    }
}