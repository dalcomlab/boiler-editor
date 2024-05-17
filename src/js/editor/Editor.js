import {MouseEventManager} from "../event/MouseEventManager.js";
import {Page} from "./Page.js";
import {Menu} from "./Menu.js";

export class Editor {
    constructor({width, height}) {
        this.canvas = document.createElement('canvas');
        this.canvas.style.border = 'solid 2px #000';
        this.canvas.width = width;
        this.canvas.height = height;

        this.foregroundRender = null;

        this.#init();
    }

    #init() {
        const root = document.createElement('div');
        document.body.appendChild(root);
        root.appendChild(this.canvas);

        this.ctx = this.canvas.getContext('2d');
        this.page = new Page(this.ctx);
        this.eventManager = new MouseEventManager(this);
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
                console.log(e.target.result);
                img.src = e.target.result;
            };
            reader.readAsDataURL(file);
        };

        root.ondragover = (e) => {
            e.preventDefault();
        };
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
}