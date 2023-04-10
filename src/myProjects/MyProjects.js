import { useContext, useState } from "react"
import snImage from "../assets/images/Screenshot_42.jpg"
import Title from "../common/components/title/Title"
import containerStyle from "../common/styles/Container.module.scss"
import { StateProvider } from "../state/state"
import style from "./MyProjects.module.scss"
import MyProject from "./myProject/MyProject"

const MyProjects = () => {
	const [active, setActive] = useState(null)
	const {state, dispatch} = useContext(StateProvider)


	const onFocusChange = (active) => {
		setActive(active)
	}

	const mappedProjects =[
		state.projects &&
		state.projects.map((project, index) => (
			<MyProject
				key={index}
				style={{ backgroundImage: `url(${snImage})` }}
				projectName={project.name}
				active={active}
				setActive={onFocusChange}
				link={project.html_url}
				description={project.description}
			/>
		))]

	return (
		<div id={"projects"} className={style.projectsBlock}>
			<div className={`${containerStyle.mainContainer} ${style.container}`}>
				<Title even={true} title={"My Projects"} />
				<div className={style.projects}>{mappedProjects}</div>
			</div>
		</div>
	)
}

export default MyProjects
