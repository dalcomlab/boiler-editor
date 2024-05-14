import {MouseEventHandler} from "./MouseEventHandler.js";
import {EventType} from "./EventType.js";
import {SnapMouseEventHandler} from "./SnapMouseEventHandler.js";
import {PageMouseEventHandler} from "./PageMouseEventHandler.js";

export class DefaultMouseEventHandler extends MouseEventHandler {
    constructor() {
        super();
        this.handlers = [];
        this.handlers.push(new SnapMouseEventHandler());
        this.handlers.push(new PageMouseEventHandler());
    }

    get type() {
        return EventType.DEFAULT;
    }

    onMouseClick(e) {
        super.onMouseClick(e);
    }

    onMouseDown(e) {
        e.downPoint.x = e.point.x;
        e.downPoint.y = e.point.y;
        this.handlers.forEach(h => {
            h.onMouseDown(e);
        });
    }

    onMouseMove(e) {
        this.handlers.forEach(h => {
            h.onMouseMove(e);
        });
    }

    onMouseUp(e) {
        this.handlers.forEach(h => {
            h.onMouseUp(e);
        });
    }
}