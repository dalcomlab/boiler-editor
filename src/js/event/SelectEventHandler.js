import {EventHandler} from "./EventHandler.js";
import {EventType} from "./EventType.js";

export class SelectEventHandler extends EventHandler {
    constructor() {
        super();
    }

    get type() {
        return EventType.SELECT;
    }

    onMouseDown(e) {
    }

    onMouseMove(e) {
    }

    onMouseUp(e) {
    }

    onMouseWheel(e) {
    }

    onKeyDown(e) {
    }

    onKeyUp(e) {
    }
}