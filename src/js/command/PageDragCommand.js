import {Command} from "./Command.js";
import {DefaultMouseEventHandler} from "../event/DefaultMouseEventHandler.js";

export class PageDragCommand extends Command {
    constructor(eventManager) {
        super();
        this.eventManager = eventManager;
        this.handler = new DefaultMouseEventHandler();
    }

    active() {
        this.eventManager.addHandler(this.handler);
    }

    deActive() {
        this.eventManager.removeHandler(this.handler);
    }
}