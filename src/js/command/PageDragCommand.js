import {Command} from "./Command.js";
import {PageEventHandler} from "../event/PageEventHandler.js";

export class PageDragCommand extends Command {
    constructor(eventManager) {
        super();
        this.eventManager = eventManager;
        this.handler = new PageEventHandler();
    }

    active() {
        this.eventManager.addHandler(this.handler);
    }

    deActive() {
        this.eventManager.removeHandler(this.handler);
    }
}