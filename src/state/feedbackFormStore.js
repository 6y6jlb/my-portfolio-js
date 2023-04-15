import { create } from "zustand"
import { API } from "../api/API"
import { useErrorsStore } from "./errorsStore"

export const useFeedbackFormsStore = create((set, get) => ({
	data: {
		senderName: "",
		senderContacts: "",
		body: "",
	},
	loading: false,
	send: async () => {
		set({ loading: true })
		const res = await API.sendContactsAndMessage(get().data)
		if (res.data.message !== "ok") {
			useErrorsStore.getState().set({ data: [res.data.message] })
		}
		set({ loading: false })
		get().clear()
	},
	update: (key, value) => set({ data: { ...get().data, [key]: value } }),
	canBeSubmit: () => {
		const data = get().data
		return !!((data.senderName || data.senderContacts) && data.body)
	},
	clear: () => {
		set({
			data: {
				senderName: "",
				senderContacts: "",
				body: "",
			},
		})
	},
}))
