export class Control {
    constructor() {
        this._select = false;
        this._hover = false;
    }

    get select() {
        return this._select;
    }

    set select(b) {
        this._select = b;
    }

    get hover() {
        return this._hover;
    }

    set hover(value) {
        this._hover = value;
    }

    render(ctx) {
    }

    ptInControl(p) {
    }

    ptInHoverControl(p) {
    }

    ptInSelectControl(p) {
    }

    ptInPoint(p) {
    }
}