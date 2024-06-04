import {EventHandler} from "./EventHandler.js";

export class UndoEventHandler extends EventHandler {
    constructor(undoManager) {
        super();
        this.manager = undoManager;
    }

    onKeyDown(e) {
        const key = e.originEvent.key;
        console.log(key);
        e.keyPressed[key] = true;

        if (key === 'z') {
            this.manager.undo();
        } else if (key === 'y') {
            this.manager.redo();
        }
    }

    onKeyUp(e) {
        delete e.keyPressed[e.originEvent.key];
    }
}