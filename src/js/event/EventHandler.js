import {EventType} from "./EventType.js";

export class EventHandler {
    get type() {
        return EventType.NONE;
    }
    onMouseDown(e) {}
    onMouseMove(e) {}
    onMouseUp(e) {}

    onKeyDown(e) {}
    onKeyUp(e) {}
}