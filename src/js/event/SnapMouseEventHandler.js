import {EventHandler} from "./EventHandler.js";
import {EventType} from "./EventType.js";

export class SnapMouseEventHandler extends EventHandler {

    get type() {
        return EventType.SNAP;
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