export class CommandExecutor {
    constructor() {
        this.command = null;
    }
    execute(command) {
        command?.deActive();
        this.command = command;
    }
}