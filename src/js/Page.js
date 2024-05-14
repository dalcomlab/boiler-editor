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
        const sX = coordinate.wayPoint.x;
        const sY = coordinate.wayPoint.y;

        const width = this.ctx.canvas.width;
        const height = this.ctx.canvas.height;

        this.ctx.clearRect(sX-1, sY-1, width+2, height+2);
        this.renderGridLine(sX, sY, height, true);
        this.renderGridLine(sY, sX, width, false);
    }

    renderGridLine(sP, sP1, lineLength, isVertical) {
        const gridSize = this.gridSize;
        const gridCount = this.gridCount;

        let gridNum = 0;
        const lineCount = lineLength / gridSize;
        for (let i = 0; i <= lineCount; ++i) {
            const p = i * gridSize + sP;

            const gridLineCheck = gridNum++ % gridCount === 0;
            const color = gridLineCheck ? 'rgba(0, 0, 0, 0.6)' : 'rgb(129, 138, 138)';
            const width = gridLineCheck ? 2 : 1;
            const line = this.getLinePoint({x: p, y: sP1}, {x: p, y: sP1 + lineLength}, isVertical);
            this.painter.line(line.p1, line.p2, color, width);
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
        }

        this.ctx.setTransform(dpr, 0, 0, dpr, orgWayPoint.x, orgWayPoint.y);
    }
}