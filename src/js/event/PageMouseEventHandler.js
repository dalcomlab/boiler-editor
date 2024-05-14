import {MouseEventHandler} from "./MouseEventHandler.js";
import {EventType} from "./EventType.js";

export class PageMouseEventHandler extends MouseEventHandler {

    get type() {
        return EventType.PAGE;
    }

    onMouseClick(e) {
    }

    onMouseDown(e) {

    }

    onMouseMove(e) {
        if (!e.down) {
            return;
        }

        const downPoint = e.downPoint;
        const mx = downPoint.x - e.point.x;
        const my = downPoint.y - e.point.y;

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