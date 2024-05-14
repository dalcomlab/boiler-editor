import {Editor} from "./Editor.js";

export function init() {
    const editor = new Editor({width: 500, height: 500});

    const defaultBtn = document.createElement('button');
    defaultBtn.textContent = 'default';

    defaultBtn.onclick = (e) => {
        editor.menu.pageDrag();
    };
    document.body.appendChild(defaultBtn);
}