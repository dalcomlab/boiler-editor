import {CommandExecutor} from "./command/CommandExcutor.js";
import {PageDragCommand} from "./command/PageDragCommand.js";

export class Menu {
    constructor(manager) {
        this.commandExecutor = new CommandExecutor();
        this.pageDrag = () => {
            console.log('execute');
            this.commandExecutor.execute(new PageDragCommand(manager));
        };
    }

    // get pageDrag() {
    //     return this._pageDrag;
    // }
}