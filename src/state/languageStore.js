import { create } from "zustand"
import { API } from "../api/API"
import { getProjectLanguages, updateProjectLanguages } from "../localStorage/language"



export const useLanguagesStore = create((set, get) => ({
	data: {},
	loading: false,
	loaded: false,
	fetch: async (repos) => {

		const result = getProjectLanguages();
		
		if (!Object.keys(result).length) {
			for (let repoId = 0; repoId < repos.length; repoId++) {
				const repo = repos[repoId]
				const response = await API.getRepoLanguges(repo)
				result[repo] = response.data
			}
		
			updateProjectLanguages(result)
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




