import React from "react"
import style from "./LS.module.scss"

const LanguageSwitcher = (props) => {
	const languages = [
		{ code: "en", name: "English" },
		{ code: "ru", name: "Русский" },
		{ code: "uk", name: "Ukrainian" },
	]

	const onChange = (e) => {
		props.onChange(e.target.className)
	}

	const options = languages.map((language, i) => {
		if (language.code !== props.locale) {
			return (
				<option key={i} value={language.code} onClick={onChange}>
					<div className={style.item}>{language.name}</div>
				</option>
			)
		}
	})

	return <select className={style.lang}>{options}</select>
}

export default LanguageSwitcher
