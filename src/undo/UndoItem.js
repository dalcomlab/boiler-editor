export class UndoItem {
    constructor(undo, redo) {
        this._undo = undo;
        this._redo = redo;
    }
    undo() {
        console.log('undo');
        this._undo();
        return this;
    }

    redo() {
        console.log('redo');
        this._redo();
        return this;
    }
}