
import { Scene } from "./Scene";


export class MainScene extends Scene {

	constructor() {
		super();
	

	}

	 override resize(): void {
		super.resize();

	}
	update(): void {
		// console.log(dt);

	}

	recievedMessage(msgType: string, msgParams: any): void {
		console.log(msgType, msgParams);

	}
}
