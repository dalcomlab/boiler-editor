export class UndoManager {
    constructor() {
        this.undoList = [];
        this.redoList = [];
    }

    addUndo(item) {
        this.undoList.push(item);
        this.redoList = [];
    }

    undo() {
        if (this.undoList.length === 0) {
            return;
        }

        const item = this.undoList.pop();
        item.undo();
        this.redoList.push(item);
    }

    redo() {
        if (this.redoList.length === 0) {
            return;
        }

        const item = this.redoList.pop();
        item.redo();
        this.undoList.push(item);
    }
}