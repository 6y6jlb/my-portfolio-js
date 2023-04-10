import style from "./MyProject.module.scss"
import HeadShake from "react-reveal/HeadShake"
import snImage from "../../assets/images/Screenshot_42.jpg"
import counterImage from "../../assets/images/Screenshot_40.jpg"
import portfolioImage from "../../assets/images/Screenshot_39.jpg"
import emptyImage from "../../assets/images/empty.jpg"

const PROJECTS = {
	TODO: "to-do-react",
	PORTFOLIO: "my-portfolio-js",
	COUNTER: "counter-ts",
	SN: "social-nenwork-ts",
}

const IMAGES = {
	[PROJECTS.COUNTER]: `url(${counterImage})`,
	[PROJECTS.TODO]: `url(${snImage})`,
	[PROJECTS.PORTFOLIO]: `url(${portfolioImage})`,
	[PROJECTS.SN]: `url(${snImage})`,
}

const MyProject = (props) => {
	const { link, active, projectName, project, description, setActive } = props
	const image = projectName.toLocaleLowerCase()
	const bgc = { backgroundImage: IMAGES[image] ? IMAGES[image] : `url(${emptyImage})` }
	const activeStyle = active === projectName

	return (
		<HeadShake>
			<div onMouseEnter={() => setActive(projectName)} className={style.project}>
				<a href={link} className={style.button}>
					watch
				</a>
				<div style={bgc} className={`${style.image} ${activeStyle && style.active}`}></div>
				<div className={style.descriptionBlock}>
					<h4 className={style.projectName}>{projectName}</h4>
					<p style={style.description}>{description}</p>
				</div>
			</div>
		</HeadShake>
	)
}
export default MyProject
