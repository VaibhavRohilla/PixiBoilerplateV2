// import * as PIXI from 'pixi.js';
// import { BackgroundSprite } from './Background';
// import { Globals } from './Globals';
// import { LoaderConfig, staticData, LoaderSoundConfig } from './LoaderConfig';
// import { config } from './appConfig';

// // import { BackgroundGraphic } from './Background';

// export class Loader {

//     resources: any;
//     loaderBarContainer: PIXI.Container | undefined;
//     progressBar!: PIXI.Graphics;
//     loader: PIXI.AssetsClass;


//     constructor(container: PIXI.Container) {
//         this.loader = new PIXI.AssetsClass();
//         this.createLoadingPage(container);
//         this.resources = LoaderConfig;

//     }

//     createLoadingPage(container: PIXI.Container) {
//         //background

//         const Background = PIXI.Sprite.from(staticData.clampy);

//         const background = new BackgroundSprite(Background.texture,window.innerWidth, window.innerHeight);
//         background.width = window.innerWidth;
//         background.height = window.innerHeight;
//         container.addChild(background);

//         //loaderbar
//         this.loaderBarContainer = new PIXI.Container();

//         // const logo = PIXI.Sprite.from(staticData.logoURL);

//         // logo.anchor.set(0.5,1);
//         // logo.scale.set(0.5)
//         // logo.x = config.logicalWidth / 2 - logo.width/2;
//         // logo.y = config.logicalHeight / 2;

//         const progressBox = new PIXI.Graphics()
//         this.progressBar = new PIXI.Graphics();

//         const boxData = {
//             width: (config.logicalWidth * 0.4),
//             height: 20,
//             x: config.logicalWidth / 2,
//             y: config.logicalHeight / 2 + 20
//         };


//         progressBox.beginFill(0x3c3c3c, 0.8);
//         progressBox.drawRect(boxData.x - boxData.width / 2, boxData.y, boxData.width, boxData.height);
//         progressBox.endFill();

//         // const progressText = new DebugText("0%", 0, 0, '#FFF');
//         // progressText.anchor.set(1, 0);
//         // progressText.position = new PIXI.Point(boxData.x + boxData.width/2, boxData.y + boxData.height);

//         // this.loaderBarContainer.addChild(logo);
//         this.loaderBarContainer.addChild(progressBox);
//         this.loaderBarContainer.addChild(this.progressBar);
//         // this.loaderBarContainer.addChild(progressText);

//         this.loaderBarContainer.scale.set(config.minScaleFactor);

//         this.loaderBarContainer.x = config.minLeftX;
//         this.loaderBarContainer.y = config.minTopY;

//         container.addChild(this.loaderBarContainer);
//         // this.loader.load.onProgress.add((event) => {}
//         // this.loader.onProgress.add((event) => {
//         //     let value = event.progress / 100;
//         //     progressBar.clear();
//         //     progressBar.beginFill(0xffffff, 1);
//         //     progressBar.drawRect(boxData.x - (boxData.width * 0.49), boxData.y + boxData.height / 4, boxData.width * 0.98 * value, boxData.height / 2);
//         //     progressBar.endFill();
//         // });

//         // this.loader.onComplete.add((e) => {
//         //     progressBar.clear();
//         //     progressBar.beginFill(0xffffff, 1);
//         //     progressBar.drawRect(boxData.x - (boxData.width * 0.49), boxData.y + boxData.height / 4, boxData.width * 0.98, boxData.height / 2);
//         //     progressBar.endFill();
//         // });
//     }




//     preload() {
//         return new Promise(resolve => {
//             // for (let key in this.resources) {
//             //     this.loader.loadBundle(key, this.resources[key].default);
//             // }

//             this.loader.loadBundle(LoaderConfig).then(() => {
//                 Globals.resources = res;
//                 console.log(res);
                


//                 // const fontArray: any = [];
//                 // fontData.forEach((fontName: any) => {
//                 //     fontArray.push(new FFC(fontName).load());

//                 // });

//                 // if (fontArray.length == 0)
//                 //     resolve(0);
//                 // else {
//                 //     Promise.all(fontArray).then(() => {
//                         resolve(0);
//                 //     });
//                 // }

//                 // console.log(fontArray);


//             });
//         });
//     }

//     preloadSounds(onCompleteCallback: () => void) {
        
//         const totalCount = Object.keys(LoaderSoundConfig).length;
//         let currentCount = 0;
//         for (let key in LoaderSoundConfig) {
//             const sound = new Howl({
//                 src: [LoaderSoundConfig[key].default]
//             });

//             sound.load();

//             sound.on("load", () => {
//                 // console.log("Loaded");
//                 currentCount++;

//                 Globals.soundResources[key] = sound;
//                 if (currentCount >= totalCount) {
//                     onCompleteCallback();
//                 }
//             });


//         }

//     }



// }