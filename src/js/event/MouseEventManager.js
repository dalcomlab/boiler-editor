import {Event} from './Event.js'
import {MousePointEventHandler} from "./MousePointEventHandler.js";
export class MouseEventManager {
    constructor(editor) {
        this.event = new Event(editor);
        this.handlers = new Map();
        this.addHandler(new MousePointEventHandler());
    }

    addHandler(handler) {
        this.handlers.set(handler.type, handler);
    }

    removeHandler(handler) {
        this.handlers.delete(handler.type);
    }

    onMouseDown(e) {
        this.#setEvent(e);
        this.handlers.forEach(h => {
            h.onMouseDown(this.event);
        });
    }

    onMouseMove(e) {
        this.#setEvent(e);
        this.handlers.forEach(h => {
            h.onMouseMove(this.event);
        });
    }

    onMouseUp(e) {
        this.#setEvent(e);
        this.handlers.forEach(h => {
            h.onMouseUp(this.event);
        });
    }

    #setEvent(e) {
        this.event.originEvent = e;
    }
}