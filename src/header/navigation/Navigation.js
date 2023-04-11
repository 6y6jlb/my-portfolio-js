import React from "react"
import style from "./Navigation.module.scss"
import { Link, animateScroll as scroll } from "react-scroll"

const Navigation = () => {
	return (
		<>
			<div className={style.navigation}>
				<Link activeClass={style.active} to="common" spy={true} smooth={true} offset={1} duration={500}>
					Common
				</Link>
				<Link activeClass={style.active} to="languages" spy={true} smooth={true} offset={1} duration={500}>
					Languages
				</Link>
				<Link activeClass={style.active} to="projects" spy={true} smooth={true} offset={1} duration={500}>
					Projects
				</Link>
				<Link activeClass={style.active} to="contact" spy={true} smooth={true} offset={1} duration={500}>
					Contact
				</Link>
			</div>
		</>
	)
}
export default Navigation
