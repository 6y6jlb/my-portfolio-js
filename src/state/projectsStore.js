import { create } from "zustand"
import { API } from "../api/API"
import { useLanguagesStore } from "./languageStore"

export const useProjectsStore = create((set) => ({
	data: [],
	loading: false,
	loaded: false,
	fetch: async () => {
		set({ loading: true })
		const response = await API.getGitHubRepos()
		set({ data: response.data })
		set({ loading: false })
		set({ loaded: true })
		useLanguagesStore.getState().fetch(response.data.map((el) => el.name))
	},
	removeAll: () => set({ data: [] }),
}))