import React from "react"
import { FormattedMessage, useIntl } from "react-intl"
import { Link } from "react-scroll"
import LanguageSwitcher from "../../common/components/languageSwitcher/LanguageSwitcher"
import { useTranslations } from "../../state/state"
import style from "./Navigation.module.scss"

const Navigation = () => {
	const intl = useIntl()
	const translations = useTranslations();

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
			<LanguageSwitcher locale={intl.locale} onChange={translations.update} />
		</div>
	)
}
export default Navigation
