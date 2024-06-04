import {EventHandler} from "./EventHandler.js";
import {EventType} from "./EventType.js";

export class PointEventHandler extends EventHandler {
    constructor() {
        super();
    }

    get type() {
        return EventType.MOUSE_POINT;
    }

    onMouseDown(e) {
        this.#setEvent(e);
        e.downPoint.x = e.point.x;
        e.downPoint.y = e.point.y;
    }

    onMouseMove(e) {
        this.#setEvent(e);
        const page = e.editor.page;
        page.coordinate.curPoint = {x: e.originEvent.offsetX, y: e.originEvent.offsetY};

        const controls = page.controls;
        for (const control of controls) {
            const render = control.ptInHoverControl(e.point);
            if (render !== null) {
                page.hoverControl = render;
                page.render();
                return;
            }
        }

        page.hoverControl = null;
    }

    onMouseUp(e) {
        this.#setEvent(e);

        const page = e.editor.page;
        page.coordinate.curPoint = {x: e.originEvent.offsetX, y: e.originEvent.offsetY};

        const controls = page.controls;
        for (const control of controls) {
            const render = control.ptInSelectControl(e.point);
            if (render !== null) {
                page.selectControl = render;
                page.render();
                return;
            }
        }

        page.selectControl = null;
    }

    #setEvent(e) {
        const coordinate = e.editor.page.coordinate;
        const dpr = coordinate.dpr;
        const point = e.point;

        point.x = e.originEvent.offsetX / dpr;
        point.y = e.originEvent.offsetY / dpr;

        const dprOrigin = {x: coordinate.orgPoint.x / dpr, y: coordinate.orgPoint.y / dpr};
        const wX = -coordinate.wayPoint.x - dprOrigin.x;
        const wY = -coordinate.wayPoint.y - dprOrigin.y;

        point.x += wX;
        point.y += wY;
    }
}