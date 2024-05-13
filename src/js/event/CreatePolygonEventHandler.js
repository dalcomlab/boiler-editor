import {MouseEventHandler} from "./MouseEventHandler.js";
import {EventType} from "./EventType.js";

export class CreatePolygonEventHandler extends MouseEventHandler {

    get type() {
        return EventType.POLYGON;
    }

    onMouseClick(e) {
        super.onMouseClick(e);
    }

    onMouseDown(e) {
        super.onMouseDown(e);
    }

    onMouseMove(e) {
        super.onMouseMove(e);
    }

    onMouseUp(e) {
        super.onMouseUp(e);
    }
}