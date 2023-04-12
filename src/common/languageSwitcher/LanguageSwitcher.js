import React from "react"
import style from './LS.module.scss'

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
				<li key={i} onClick={onChange}>
					<div value={language.code} className={style[language.code]}></div>
				</li>
			)
		}
	})

	return (
		<div className={style.lang}>
			<div className={style[props.locale]}></div>
			<ul class={style.dropdown}>{options}</ul>
		</div>
	)
}

export default LanguageSwitcher
