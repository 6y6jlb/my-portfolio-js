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
	const { active, project,setActive } = props
	const image = project.name.toLocaleLowerCase()
	const bgc = { backgroundImage: IMAGES[image] ? IMAGES[image] : `url(${emptyImage})` }
	const activeStyle = active === project.name

	return (
		<HeadShake>
			<div onMouseEnter={() => setActive(project.name)} className={style.project}>
				<a href={project.html_link} className={style.button}>
					watch
				</a>
				<div style={bgc} className={`${style.image} ${activeStyle && style.active}`}></div>
				<div className={style.descriptionBlock}>
					<h4 className={style.projectName}>{project.name}</h4>
					<p style={style.description}>{project.description}</p>
				</div>
			</div>
		</HeadShake>
	)
}
export default MyProject
