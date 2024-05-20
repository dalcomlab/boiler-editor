import {EventHandler} from "./EventHandler.js";
import {EventType} from "./EventType.js";

export class PageEventHandler extends EventHandler {
    constructor() {
        super();
    }

    get type() {
        return EventType.PAGE;
    }

    onMouseDown(e) {

    }

    onMouseMove(e) {
        const page = e.editor.page;
        const coordinate = page.coordinate;
        coordinate.curPoint = {x: e.originEvent.offsetX, y: e.originEvent.offsetY};
        if (!e.down) {
            return;
        }

        const downPoint = e.downPoint;
        const mx = e.point.x - downPoint.x;
        const my = e.point.y - downPoint.y;

        coordinate.wayPoint.x += mx;
        coordinate.wayPoint.y += my;

        page.transform();
        page.render();
    }

    onMouseUp(e) {

    }

    onMouseWheel(e) {
        const page = e.editor.page;
        e.originEvent.deltaY < 0 ? page.scaleIn() : page.scaleOut();
        page.render();
    }
}