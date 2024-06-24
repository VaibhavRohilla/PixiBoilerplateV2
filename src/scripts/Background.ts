import * as PIXI from "pixi.js";
import { Resource } from "pixi.js";
import { config } from "./appConfig";

export class Background extends PIXI.TilingSprite {
    constructor(topImage: any, width = config.logicalWidth, height = config.logicalHeight, scaleSize = null) {

        super(topImage);


        this.width = width;
        this.height = height;

        if (scaleSize != null) {
            this.width *= scaleSize;
            this.height *= scaleSize;
        }
    }
}


export class BackgroundSprite extends PIXI.Sprite {

    defaultProperties: any = undefined;

    constructor(texture: PIXI.Texture<Resource> | undefined, width: number, height: number) {
        super(texture);

        this.defaultProperties = {
            width: width,
            height: height,
            scaleSize: config.minScaleFactor
        };
        this.width = window.innerWidth;
        this.height = window.innerHeight;
    }



    resetBg(width: number | null = null, height: number | null = null) {
        if (width != null)
            this.defaultProperties.width = width;

        if (height != null)
            this.defaultProperties.height = height;
        this.width = window.innerWidth;
        this.height = window.innerHeight;

    }
}
