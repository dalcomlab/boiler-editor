import {Command} from "./Command";

export class DefaultCommand extends Command {
    constructor(eventManager) {
        super();
        this.eventManager = eventManager;
    }

    active() {
        this.eventManager.addHandler(new )
    }

    deActive() {
    }
}