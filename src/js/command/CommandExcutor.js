export class CommandExecutor {
    constructor() {
        this.command = null;
    }
    execute(command) {
        this.command?.deActive();
        this.command = command;
        this.command.active();
    }
}