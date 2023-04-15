import { LANGUAGES } from "../common/config/config"
import { updatePreselectedLanguage } from "../localStorage/language"
import { create } from "zustand"
import ru from "../translations/ru.json"
import en from "../translations/en.json"
import uk from "../translations/uk.json"

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