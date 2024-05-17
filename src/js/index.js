import {Editor} from "./editor/Editor.js";

export function init() {
    const editor = new Editor({width: 500, height: 500});

    const defaultBtn = createButton('default', (e)=> {editor.menu.pageDrag()});
    const polygonBtn = createButton('polygon', (e) => {editor.menu.createPolygon()});
    document.body.appendChild(defaultBtn);
    document.body.appendChild(polygonBtn);
}

function createButton(name, onClick) {
    const btn = document.createElement('button');
    btn.textContent = name;
    btn.onclick = onClick;
    return btn;
}