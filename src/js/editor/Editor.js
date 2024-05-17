import {EventManager} from "../event/EventManager.js";
import {Page} from "./Page.js";
import {Menu} from "./Menu.js";
import {UndoManager} from "../../undo/UndoManager.js";

export class Editor {
    constructor({width, height}) {
        this.canvas = document.createElement('canvas');
        this.canvas.style.border = 'solid 2px #000';
        this.canvas.width = width;
        this.canvas.height = height;

        this.foregroundRender = null;

        this._undoManager = new UndoManager();

        this.#init();
    }

    #init() {
        const root = document.createElement('div');
        document.body.appendChild(root);
        root.appendChild(this.canvas);

        this.ctx = this.canvas.getContext('2d');
        this.page = new Page(this.ctx);
        this.eventManager = new EventManager(this);
        this.menu = new Menu(this.eventManager);
        this.page.render();

        this.canvas.addEventListener('mousedown', (e)=> {
            this.eventManager.onMouseDown(e);
        });

        this.canvas.addEventListener('mousemove', (e)=> {
            this.eventManager.onMouseMove(e);
        });

        this.canvas.addEventListener('mouseup', (e)=> {
            this.eventManager.onMouseUp(e);
        });

        document.addEventListener('keydown', (e) => {
            this.eventManager.onKeyDown(e);
        });

        document.addEventListener('keyup', (e) => {
            this.eventManager.onKeyUp(e);
        });

        root.ondrop = (e)=> {
            e.preventDefault();
            let file = e.dataTransfer.files[0];
            let reader = new FileReader();
            reader.onload = (e) => {
                let img = new Image();
                img.onload = (e) => {
                    this.page.backgroundImg = img;

                    this.render();
                };
                img.src = e.target.result;
            };
            reader.readAsDataURL(file);
        };

        root.ondragover = (e) => {
            e.preventDefault();
        };
    }

    capture() {
        this.#captureRender();
        const dataURL = this.canvas.toDataURL("image/png");

        const link = document.createElement('a');
        link.href = dataURL;
        link.download = 'canvas_image.png';
        link.click();
        this.render();
    }

    #captureRender() {
        this.page.captureRender();
    }

    addForegroundRender(render) {
        this.foregroundRender = render;
    }

    removeForegroundRender() {
        this.foregroundRender = null;
    }

    render() {
        this.page.render();
        this.foregroundRender?.render(this.page.painter);
    }

    get undoManager() {
        return this._undoManager;
    }
}