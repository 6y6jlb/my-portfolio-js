import { LS } from "../common/config/config"
import { getDiffInDays } from "../helpers/date"

export const updatePreselectedLanguage = (value) => {
	localStorage.setItem(LS.PRESELECTED_LANGUAGE, value)
}

export const getPreselectedLanguage = () => {
	return localStorage.getItem(LS.PRESELECTED_LANGUAGE)
}

export const updateProjectLanguages = (value) => {
	const data = {
		projectLanguages: value,
		createdAt: new Date().toLocaleDateString(),
	}
	return localStorage.setItem(LS.PROJECT_LANGUAGES, JSON.stringify(data))
}

export const getProjectLanguages = () => {
	const data = JSON.parse(localStorage.getItem(LS.PROJECT_LANGUAGES))
	if (data && data.createdAt && getDiffInDays(data.createdAt >= 1)) {
		return data.projectLanguages
	} else {
		return {}
	}
}
