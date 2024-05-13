import {MouseEventHandler} from "./MouseEventHandler.js";
import {EventType} from "./EventType.js";

export class MousePointEventHandler extends MouseEventHandler {

    get type() {
        return EventType.MOUSE_POINT;
    }

    onMouseClick(e) {
        this.#setEvent(e);
    }

    onMouseDown(e) {
        this.#setEvent(e);
    }

    onMouseMove(e) {
        this.#setEvent(e);
    }

    onMouseUp(e) {
        this.#setEvent(e);
    }

    #setEvent(e) {
        const originEvent = e.originEvent;
        const coordinate = e.editor.coordinate;
        e.point.x = originEvent.offsetX / coordinate.dpr;
        e.point.y = originEvent.offsetY / coordinate.dpr;
    }
}