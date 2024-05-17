import {CommandExecutor} from "../command/CommandExcutor.js";
import {PageDragCommand} from "../command/PageDragCommand.js";
import {CreatePolygonCommand} from "../command/CreatePolygonCommand.js";

export class Menu {
    constructor(manager) {
        this.commandExecutor = new CommandExecutor();
        this.pageDrag = () => {
            this.commandExecutor.execute(new PageDragCommand(manager));
        };

        this.createPolygon = () => {
            this.commandExecutor.execute(new CreatePolygonCommand(manager));
        };
    }

    // get pageDrag() {
    //     return this._pageDrag;
    // }
}