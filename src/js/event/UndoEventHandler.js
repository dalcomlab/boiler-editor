import {EventHandler} from "./EventHandler.js";

export class UndoEventHandler extends EventHandler {
    constructor(undoManager) {
        super();
        this.manager = undoManager;
        this.keysPredded = {};
    }

    onKeyDown(e) {
        const key = e.originEvent.key;
        this.keysPredded[key] = true;
        // if (!this.keysPredded['Meta'] && !this.keysPredded['Control']) {
        //     return;
        // }

        if (this.keysPredded['z']) {
            this.manager.undo();
        } else if (this.keysPredded['y']) {
            this.manager.redo();
        }
    }

    onKeyUp(e) {
        delete this.keysPredded[e.originEvent.key];
    }
}