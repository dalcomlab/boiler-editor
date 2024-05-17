import {EventHandler} from "./EventHandler.js";
import {EventType} from "./EventType.js";
import {Polygon} from "../editor/control/Polygon.js";
import {CreatePolygonCreateRender} from "../editor/render/CreatePolygonCreateRender.js";
import {PointUtil} from "../util/PointUtil.js";
import {UndoItem} from "../../undo/UndoItem.js";

export class CreatePolygonEventHandler extends EventHandler {
    constructor() {
        super();
        this.polygon = null;
        this.util = new PointUtil();
    }

    get type() {
        return EventType.POLYGON;
    }

    onMouseDown(e) {
        if (this.polygon === null) {
            this.polygon = new Polygon();
            e.editor.addForegroundRender(new CreatePolygonCreateRender(this.polygon));
        }
    }

    onMouseMove(e) {
        if (this.polygon === null) {
            return;
        }

        const points = this.polygon.points;
        const pointsLen = points.length;
        if (pointsLen === 0) {
            return;
        }
        e.editor.render();

        e.editor.page.painter.line(points[pointsLen-1], e.curPoint);
    }

    onMouseUp(e) {
        const p = e.curPoint;
        this.polygon.points.push({x: p.x, y: p.y});
        if (this.checkClosePolygon()) {
            // this.polygon.update();
            e.editor.page.addControl(this.polygon);
            e.editor.removeForegroundRender();
            const polygon = this.polygon;
            e.editor.undoManager.addUndo(new UndoItem(
                () => {e.editor.page.removeControl(polygon)},
                () => {e.editor.page.addControl(polygon)}));
            this.polygon = null;
        }
    }

    onKeyDown(e) {
        if (e.originEvent.key === 'Escape' || e.originEvent.key === 'Esc') {
            this.cancel(e);
            e.editor.render();
        }
    }

    cancel(e) {
        this.polygon = null;
        e.editor.removeForegroundRender();
    }

    checkClosePolygon() {
        const points = this.polygon.points;
        const pointsLen = points.length;
        if (pointsLen < 4) {
            return false;
        }

        const lastLine = {p1: points[pointsLen-2], p2: points[pointsLen-1]};

        let rst = null;
        let i = 0;
        for (i = 0; i < pointsLen - 3; ++i) {
            const p1 = points[i];
            const p2 = points[i+1];
            rst = this.util.getInterSectionPoint(p1, p2, lastLine.p1, lastLine.p2);
            if (rst !== null) {
                points[i] = {x: Math.round(rst.x), y: Math.round(rst.y)};
                break;
            }
        }

        if (rst === null) {
            return false;
        }

        points.splice(pointsLen-1, 1);
        if (i > 0) {
            points.splice(0, i);
        }

        return true;
    }
}