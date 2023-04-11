import React, { useState } from "react"
import style from "./BurgerNavigation.module.scss"
import { Link } from "react-scroll"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars"
import { FormattedMessage } from "react-intl"

const BurgerNavigation = () => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<>
			<div className={style.burgerNavigation}>
				<div onClick={() => setIsOpen(!isOpen)} className={style.burgerButton}>
					<FontAwesomeIcon style={{ fontSize: "28px", color: isOpen ? "black" : "white" }} icon={faBars} />
				</div>
				<div className={isOpen ? style.burgerNavItems : `${style.burgerNavItems} ${style.hide}`}>
					<Link activeClass={style.active} to="common" spy={true} smooth={true} offset={1} duration={500}>
						<FormattedMessage id="navigation.common" />
					</Link>
					<Link activeClass={style.active} to="skills" spy={true} smooth={true} offset={1} duration={500}>
						<FormattedMessage id="navigation.languages" />
					</Link>
					<Link activeClass={style.active} to="projects" spy={true} smooth={true} offset={1} duration={500}>
						<FormattedMessage id="navigation.projects" />
					</Link>
					<Link activeClass={style.active} to="contact" spy={true} smooth={true} offset={1} duration={500}>
						<FormattedMessage id="navigation.contact" />
					</Link>
				</div>
			</div>
		</>
	)
}
export default BurgerNavigation
