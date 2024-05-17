import {MouseEventHandler} from "./MouseEventHandler.js";
import {EventType} from "./EventType.js";

export class MousePointEventHandler extends MouseEventHandler {
    constructor() {
        super();
    }

    get type() {
        return EventType.MOUSE_POINT;
    }

    onMouseDown(e) {
        this.#setEvent(e);
        e.downPoint.x = e.point.x;
        e.downPoint.y = e.point.y;
    }

    onMouseMove(e) {
        this.#setEvent(e);
    }

    onMouseUp(e) {
        this.#setEvent(e);
    }

    #setEvent(e) {
        const originEvent = e.originEvent;
        const coordinate = e.editor.page.coordinate;
        e.point.x = originEvent.offsetX / coordinate.dpr;
        e.point.y = originEvent.offsetY / coordinate.dpr;
        e.curPoint.x = e.point.x - coordinate.wayPoint.x;
        e.curPoint.y = e.point.y - coordinate.wayPoint.y;
    }
}