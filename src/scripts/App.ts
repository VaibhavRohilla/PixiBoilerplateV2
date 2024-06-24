import { Application, Container, Graphics } from 'pixi.js'
import { Globals } from './Globals';
import { MyEmitter } from './MyEmitter';
// import { Console } from './utils/attach-console';
import { SceneManager } from './SceneManager';
import { CalculateScaleFactor} from './appConfig';
import { MainScene } from './MainScene';
// import { Loader } from './Loader';

export class App extends Application<HTMLCanvasElement> {

	constructor() {
		super({
			view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
			resolution: window.devicePixelRatio || 1,
			autoDensity: true,
			backgroundColor: 0x6495,
			width :  window.innerWidth,
			height : window.innerHeight,
			antialias : true
		});
		Globals.App = this;
		// if (process.env.NODE_ENV === "development")
			// this.stage.addChild(new Console(window.innerWidth, window.innerHeight));
		CalculateScaleFactor();

		this.view.oncontextmenu = (e) => {
			e.preventDefault();
		};

		
		//Setting Up Window On Resize Callback
		window.onresize = () => {
			CalculateScaleFactor();
			SceneManager.instance!.resize();
			this.view.style.width = `${ window.innerWidth}px`;
			this.view.style.height = `${window.innerHeight}px`;

		};

		//Created Emitter
		Globals.emitter = new MyEmitter();

		const x = new Graphics()
		x.beginFill(0xFFFFFF);
		x.drawCircle(window.innerWidth/2,window.innerHeight/2,5000000);
		x.endFill();
		// this.stage.addChild(x);

		//Create Scene Manager
		new SceneManager();

		this.stage.addChild(SceneManager.instance.container);
		SceneManager.instance.container.width = window.innerWidth;
		SceneManager.instance.container.height = window.innerHeight;
		this.ticker.add((dt) => SceneManager.instance!.update(dt));

		// // loader for loading data
		const loaderContainer = new Container();
		this.stage.addChild(loaderContainer);

		// const loader = new Loader( loaderContainer);
		// loader.preload().then(() => {

		// 	loader.preloadSounds(() => {
		// 		setTimeout(() => {
		// 			loaderContainer.destroy();

		SceneManager.instance!.start(new MainScene());
		// 		}, 1000);
		// 	});
		// });



		// this.tabChange();
	}

	tabChange() {
		document.addEventListener("visibilitychange", () => {
			if (document.hidden) {
				Globals.emitter?.Call("pause");
			} else {
				Globals.emitter?.Call("resume");
			}
		});
	}

}
