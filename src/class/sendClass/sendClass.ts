import axios, { AxiosResponse } from "axios"
import { ISync } from "./Type/ISync"
import { IInfoCard } from "./Type/IInfoCard"
import { DataClass } from "../dataClass/dataClass"
import { IHeaders } from "./Type/IHeaders"

class SendClass extends DataClass {
	async postSync(headers: IHeaders): Promise<{ data: ISync | string, isError: boolean }> {
		let result: { data: ISync | string, isError: boolean } = {
			data: '',
			isError: true
		}
		return result
	}
	async postTap(sync: ISync, headers: IHeaders): Promise<boolean> {
		let isError = true
		const data = {
			count: sync.clickerUser.availableTaps,
			availableTaps: 2000,
			timestamp: new Date().getTime()
		}
		return isError
	}
	async postInfoCard(headers: IHeaders) {
		let result: { data: IInfoCard | string, isError: boolean } = {
			data: '',
			isError: true
		}
		return result
	}
	async postBuy(id: string, headers: IHeaders): Promise<boolean> {
		let isError = true
		return isError
	}
}

export const send = new SendClass()