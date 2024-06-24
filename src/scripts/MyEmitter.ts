
// import { SceneManager } from './SceneManager';

export class MyEmitter //extends PIXI.utils.EventEmitter
{
    constructor() {
        // console.log("Emitter Created!");
    }

    Call(msgType: string, msgParams = {}) {
        if (msgType != "timer" && msgType != "turnTimer")
            console.log(`Emitter Called : ${msgType} ${msgParams}`);
            // SceneManager.instance!.recievedMessage(msgType, msgParams);
    }

}