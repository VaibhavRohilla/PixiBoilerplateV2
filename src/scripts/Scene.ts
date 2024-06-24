import { Container, DisplayObject, Graphics, Sprite } from "pixi.js";
import { config } from "./appConfig";
import { staticData } from "./LoaderConfig";
import { BackgroundSprite } from "./Background";
// import { AnimatedBackgroundSprite, BackgroundGraphic, BackgroundSprite } from "./Background";

export abstract class Scene {

    private sceneContainer: Container;
    mainContainer: Container;
    private mainBackground: BackgroundSprite;

    constructor() {
        this.sceneContainer = new Container();

        const Background = Sprite.from(staticData.clampy);
        this.mainBackground = new BackgroundSprite(Background.texture,window.innerWidth|| 1,window.innerHeight);
        // this.sceneContainer.addChild(this.mainBackground);

        this.mainContainer = new Container();
        this.sceneContainer.addChild(this.mainContainer);
        const x = new Graphics();
        x.beginFill(0xFFFFFF);
        x.drawCircle(0,0,20);
        x.endFill();
		x.position.set(window.innerWidth/2,window.innerHeight/2)
		console.log(x);

        this.mainContainer.addChild(x);
      
    }

    resetMainContainer() {
        this.mainContainer.scale.set(config.minScaleFactor);
    }

    addToScene(obj: DisplayObject) {
        this.sceneContainer.addChild(obj);

    }
    resize(): void {
        // this.resetMainContainer();
        this.mainBackground.resetBg(window.innerWidth, window.innerHeight);
    }

    initScene(container: Container) {
        container.addChild(this.sceneContainer);
    }
    destroyScene() {
        this.sceneContainer.destroy();
    }

    abstract update(dt: number): void;
    abstract recievedMessage(msgType: string, msgParams: any): void;
}