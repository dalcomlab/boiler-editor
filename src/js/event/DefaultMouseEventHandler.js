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
        e.downPoint.x = e.offsetX;
        e.downPoint.y = e.offsetY;
        super.onMouseDown(e);
    }

    onMouseMove(e) {
        super.onMouseMove(e);
    }

    onMouseUp(e) {
        super.onMouseUp(e);
    }
}