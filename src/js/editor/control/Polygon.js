import {Control} from "./Control.js";

export class Polygon extends Control {
    constructor() {
        super();
        this._points = [];
        this._fillColor = 'none';
        this._lineColor = 'rgb(53,155,255)';
        this._lineWidth = 1;
        this._opacity = 1;
    }

    get points() {
        return this._points;
    }

    get fillColor() {
        return this._fillColor;
    }

    set fillColor(value) {
        this._fillColor = value;
    }

    get lineColor() {
        return this._lineColor;
    }

    set lineColor(value) {
        this._lineColor = value;
    }

    get lineWidth() {
        return this._lineWidth;
    }

    set lineWidth(value) {
        this._lineWidth = value;
    }

    get opacity() {
        return this._opacity;
    }

    set opacity(value) {
        this._opacity = value;
    }

    render(painter) {
        painter.drawPolygon(this);
    }
}