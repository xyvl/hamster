import { send } from "../sendClass/sendClass"
import { UpgradesForBuy } from "../sendClass/Type/IInfoCard"
import { IHeaders } from "../sendClass/Type/IHeaders"
class HamsterClass {
	async buy(headers: IHeaders) {
		try {
			
		} catch (e: any) {
			console.log(e.message)
		}
	}
	async tap(headers: IHeaders) {
		try {
			
		} catch (e: any) {
			console.log(e.message)
		}
	}
}

export const hamster = new HamsterClass()