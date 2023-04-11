import { create } from "zustand"
import { API } from "../api/API"

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

export const useLanguagesStore = create((set, get) => ({
	data: {},
	loading: false,
	loaded: false,
	fetch: async (repos) => {
		const result = {}
		for (let repoId = 0; repoId < repos.length; repoId++) {
			const repo = repos[repoId]
			const response = await API.getRepoLanguges(repo)
			result[repo] = response.data
		}
		set({ data: result })
		set({ loading: false })
		set({ loaded: true })
	},
	getChartData: () => {
		const values = Object.values(get().data ?? {})
		const summarizedValues = values.reduce((prev, curr) => {
			if (curr && Object.entries(curr).length) {
				Object.entries(curr).forEach((el) => {
					const language = el[0]
					prev[language] = prev[language] ? prev[language] + el[1] : el[1]
				})
			}
			return prev
		}, {})
		return summarizedValues
	},
	removeAll: () => set({ data: [] }),
}))

export const useErrorsStore = create((set) => ({
	data: [],
	removeAll: () => set({ data: [] }),
}))
