import {CommandRender} from "./CommandRender.js";

export class CreatePolygonCreateRender extends CommandRender {
    constructor(polygon) {
        super();
        this.polygon = polygon;
    }

    render(painter) {
        let p1;
        const points = this.polygon.points;
        if (points.length < 2) {
            return;
        }

        for (let i = 1; i < points.length;++i) {
            p1 = points[i-1];
            const p2 = points[i];
            painter.line(p1, p2);
        }
    }
}