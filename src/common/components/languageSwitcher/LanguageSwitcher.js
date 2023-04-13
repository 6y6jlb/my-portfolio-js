import React from "react"
import style from "./LanguageSwitcher.module.scss"
import { LANGUAGES } from "../../config/config"

const LanguageSwitcher = (props) => {
	const languages = [
		{ code: LANGUAGES.EN, name: "English" },
		{ code: LANGUAGES.RU, name: "Русский" },
		{ code: LANGUAGES.UK, name: "Ukrainian" },
	]


	const options = languages.map((language, i) => {
		const isDisabled = language.code === props.locale
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
			onChange={(e) => props.onChange(e.currentTarget.value)}
			defaultValue={props.locale}
			className={style.lang}
		>
			{options}
		</select>
	)
}

export default LanguageSwitcher
