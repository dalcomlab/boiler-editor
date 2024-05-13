export class Event {
    constructor(editor) {
        this._editor = editor;
        this._down = false;
        this._downPoint = {x: 0, y: 0};
        this._point = {x: 0, y: 0};
        this._originEvent = null;
    }

    get editor() {
        return this._editor;
    }

    get down() {
        return this._down;
    }

    set down(b) {
        this._down = b;
    }

    get downPoint() {
        return this._downPoint;
    }

    set downPoint(p) {
        this._downPoint.x = p.x;
        this._downPoint.y = p.y;
    }

    get point() {
        return this._point;
    }

    set point(p) {
        this._point = p.x;
        this._point = p.y;
    }

    get originEvent() {
        return this._originEvent;
    }

    set originEvent(e) {
        return this._originEvent = e;
    }
}