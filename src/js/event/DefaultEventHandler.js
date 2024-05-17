import {EventHandler} from "./EventHandler.js";
import {EventType} from "./EventType.js";
import {SnapMouseEventHandler} from "./SnapMouseEventHandler.js";
import {PageEventHandler} from "./PageEventHandler.js";

export class DefaultEventHandler extends EventHandler {
    constructor() {
        super();
        this.handlers = [];
        this.handlers.push(new SnapMouseEventHandler());
        this.handlers.push(new PageEventHandler());
    }

    get type() {
        return EventType.DEFAULT;
    }

    onMouseDown(e) {
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