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
        const painter = this.painter;
        painter.line({x: 0, y: 0}, {x: 50, y: 50});
    }

    renderGrid() {
        const coordinate = this.coordinate;
        const sX = coordinate.wayPoint.x;
        const sY = coordinate.wayPoint.y;

        const width = this.ctx.canvas.width;
        const height = this.ctx.canvas.height;


    }

    renderGridLine(sP, eP, lineLength) {
        const gridSize = this.gridSize;
        const gridCount = this.gridCount;

        // let gridNum = 1;
        for (let i = sP; i < sP + width; i += gridSize) {
            // ++gridNum;
            this.painter.line({x: sP, y: 0}, {x: })
        }
    }
}