export class Coordinate {
    constructor() {
        this._wayPoint = {x: 0, y: 0};
        this._dpr = window.devicePixelRatio;
    }

    get wayPoint() {
        return this._wayPoint;
    }

    set wayPoint(p) {
        this._wayPoint.x = p.x;
        this._wayPoint.y = p.y;
    }

    get dpr() {
        return this._dpr;
    }

    set dpr(dpr) {
        this._dpr = dpr;
    }
}