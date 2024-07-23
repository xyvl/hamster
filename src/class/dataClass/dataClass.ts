import { IAccount } from "./Type/IAccount"

export class DataClass {
	account: IAccount = {
		'Content-Type': 'application/json',
		'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'
	}
	
}
export const data = new DataClass()