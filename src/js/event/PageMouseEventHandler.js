import {MouseEventHandler} from "./MouseEventHandler.js";
import {EventType} from "./EventType.js";

export class PageMouseEventHandler extends MouseEventHandler {
    constructor(page) {
        super();
        this._page = page;
    }

    get type() {
        return EventType.PAGE;
    }

    onMouseClick(e) {
    }

    onMouseDown(e) {
    }

    onMouseMove(e) {
    }

    onMouseUp(e) {
    }
}