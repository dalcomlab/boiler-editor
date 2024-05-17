import {Command} from "./Command.js";
import {DefaultEventHandler} from "../event/DefaultEventHandler.js";

export class PageDragCommand extends Command {
    constructor(eventManager) {
        super();
        this.eventManager = eventManager;
        this.handler = new DefaultEventHandler();
    }

    active() {
        this.eventManager.addHandler(this.handler);
    }

    deActive() {
        this.eventManager.removeHandler(this.handler);
    }
}