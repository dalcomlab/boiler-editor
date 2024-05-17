import {Editor} from "./editor/Editor.js";

export function init() {
    const editor = new Editor({width: 1500, height: 1500});

    const pageDragBtn = createButton('page drag', (e)=> {editor.menu.pageDrag()});
    const polygonBtn = createButton('polygon', (e) => {editor.menu.createPolygon()});
    const captureBtn = createButton('capture', (e) => {editor.capture()});
    document.body.appendChild(pageDragBtn);
    document.body.appendChild(polygonBtn);
    document.body.appendChild(captureBtn);
}

function createButton(name, onClick) {
    const btn = document.createElement('button');
    btn.textContent = name;
    btn.onclick = onClick;
    return btn;
}