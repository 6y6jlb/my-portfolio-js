import React from "react"

const LanguageSwitcher = (props) => {
	const translations = {
		en: {
			header: "Spring",
			paragraf: "Hello",
			"lang-choice": "Choose your language:",
		},
		deu: {
			header: "Frühling",
			paragraf: "Hallo",
			"lang-choice": "Wählen Sie Ihre Sprache:",
		},
		rus: {
			header: "Весна",
			paragraf: "Привет",
			"lang-choice": "Выберите ваш язык:",
		},
	}

	const languages = [
		{ code: "en", name: "English" },
		{ code: "rus", name: "Русский" },
		{ code: "deu", name: "Deutsch" },
	]

	const onChange = (e) => {
		props.handleChangeLanguage(e.target.className)
	}

	const options = languages.map((language) => {
		if (language.code != props.lang) {
			return (
				<li onClick={onChange}>
					<div value={language.code} className={language.code}></div>
				</li>
			)
		}
	})

	return (
		<div className="lang">
			<div className={props.lang}></div>
			<ul class="dropdown">{options}</ul>
		</div>
	)
}

export default LanguageSwitcher
