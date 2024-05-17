import {Command} from "./Command.js";
import {CreatePolygonEventHandler} from "../event/CreatePolygonEventHandler.js";

export class CreatePolygonCommand extends Command {
    constructor(eventManager) {
        super();
        this.eventManager = eventManager;
        this.handler = new CreatePolygonEventHandler();
    }

    active() {
        this.eventManager.addHandler(this.handler);
    }

    deActive() {
        this.eventManager.removeHandler(this.handler);
    }
}