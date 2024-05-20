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
        if (!e.down) {
            return;
        }

        const downPoint = e.downPoint;
        const mx = e.point.x - downPoint.x;
        const my = e.point.y - downPoint.y;

        e.downPoint.x = e.point.x;
        e.downPoint.y = e.point.y;

        const page = e.editor.page;
        const coordinate = page.coordinate;
        coordinate.wayPoint.x += mx;
        coordinate.wayPoint.y += my;

        page.transform();
        page.render();
    }

    onMouseUp(e) {
    }
}