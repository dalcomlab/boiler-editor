import {EventType} from "./EventType.js";

export class MouseEventHandler {
    get type() {
        return EventType.NONE;
    }
    onMouseClick(e) {}
    onMouseDown(e) {}
    onMouseMove(e) {}
    onMouseUp(e) {}
}