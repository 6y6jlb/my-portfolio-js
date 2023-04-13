import { create } from "zustand"
import { API } from "../api/API"
import ru from "../translations/ru.json"
import en from "../translations/en.json"
import uk from "../translations/uk.json"
import { LANGUAGES } from "../common/config/config"
import { updatePreselectedLanguage } from "../localStorage/language"

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

export const useTranslations = create((set, get) => ({
	locale: LANGUAGES.EN,
	getLocale: () => {
		return get().locale
	},
	update: (value) => {
		if(get().locale === value) {
			return
		} else {
		switch (value) {
			case LANGUAGES.RU:
			case LANGUAGES.EN:
			case LANGUAGES.UK:
				set({ locale: value })
				updatePreselectedLanguage(value)
				break
			default:
				set({ locale: LANGUAGES.EN })
				updatePreselectedLanguage(LANGUAGES.EN)
		}
	}
	},
	getTranslations: () => {
		switch (get().locale) {
			case LANGUAGES.RU:
				return ru
			case LANGUAGES.UK:
				return uk
			default:
				return en
		}
	},
}))
