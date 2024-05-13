import {Editor} from "./Editor.js";

export function init() {
    new Editor({width: 500, height: 500});

    const defaultBtn = document.createElement('button');
    defaultBtn.textContent = 'default';
    document.body.appendChild(defaultBtn);
}