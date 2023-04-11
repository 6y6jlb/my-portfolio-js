import React from "react"
import style from "./Navigation.module.scss"
import { FormattedMessage } from "react-intl"
import { Link } from "react-scroll"

const Navigation = () => {
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
		</div>
	)
}
export default Navigation
