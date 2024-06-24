import { PixiConsole, PixiConsoleConfig } from "pixi-console";

export class Console extends PixiConsole {
    constructor( width: number, height: number)
    {
        const consoleConfig = new PixiConsoleConfig();
        consoleConfig.consoleWidth = width;
        consoleConfig.consoleHeight = height / 2.5;
        consoleConfig.showCaller = true;
        consoleConfig.fontSize = 15;
        super(consoleConfig);

        this.show();
        // console.warn("PIXI CONSOLE ATTACHED!");
    }
}