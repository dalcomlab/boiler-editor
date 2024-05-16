import {MouseEventHandler} from "./MouseEventHandler.js";
import {EventType} from "./EventType.js";

export class SnapMouseEventHandler extends MouseEventHandler {

    get type() {
        return EventType.SNAP;
    }

    onMouseClick(e) {
    }

    onMouseDown(e) {
        e.down = true;
    }

    onMouseMove(e) {
    }

    onMouseUp(e) {
        e.down = false;
    }
}