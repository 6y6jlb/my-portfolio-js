import React from "react"
import style from "./LanguageSwitcher.module.scss"
import { LANGUAGES } from "../../config/config"
import { useTranslations } from "../../../state/translationStore"

const LanguageSwitcher = () => {
	const translations = useTranslations()
	const languages = [
		{ code: LANGUAGES.EN, name: "English" },
		{ code: LANGUAGES.RU, name: "Русский" },
		{ code: LANGUAGES.UK, name: "Ukrainian" },
	]
	const locale = translations.getLocale()

	const options = languages.map((language, i) => {
		const isDisabled = language.code === locale
		return (
			<option
				disabled={isDisabled}
				key={i}
				value={language.code}
				className={`${style.item} ${isDisabled && style.active}`}
			>
				{language.name}
			</option>
		)
	})

	return (
		<select
			onChange={(e) => translations.update(e.currentTarget.value)}
			value={locale}
			className={style.lang}
		>
			{options}
		</select>
	)
}

export default LanguageSwitcher
