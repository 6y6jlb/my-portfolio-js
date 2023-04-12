import React from "react"
import style from "./Navigation.module.scss"
import { FormattedMessage, useIntl } from "react-intl"
import { Link } from "react-scroll"
import LanguageSwitcher from "../../common/languageSwitcher/LanguageSwitcher"

const Navigation = () => {
	const intl = useIntl()
	return (
		<div className={style.navigation}>
			<Link activeClass={style.active} to="common" spy={true} smooth={true} offset={1} duration={500}>
				<FormattedMessage id="navigation.common" />
			</Link>
			<Link activeClass={style.active} to="languages" spy={true} smooth={true} offset={1} duration={500}>
				<FormattedMessage id="navigation.languages" />
			</Link>
			<Link activeClass={style.active} to="projects" spy={true} smooth={true} offset={1} duration={500}>
				<FormattedMessage id="navigation.projects" />
			</Link>
			<Link activeClass={style.active} to="contact" spy={true} smooth={true} offset={1} duration={500}>
				<FormattedMessage id="navigation.contact" />
			</Link>
			<LanguageSwitcher locale={intl.locale} onChange={(value) => console.log(value)} />
		</div>
	)
}
export default Navigation
