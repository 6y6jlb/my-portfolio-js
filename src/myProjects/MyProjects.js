import { useEffect, useState } from "react"
import Title from "../common/components/title/Title"
import containerStyle from "../common/styles/Container.module.scss"
import { useProjectsStore } from "../state/state"
import style from "./MyProjects.module.scss"
import MyProject from "./myProject/MyProject"

const MyProjects = () => {
	const [active, setActive] = useState(null)
	const projects = useProjectsStore()

	useEffect(() => {
		projects.fetch()
	}, [])

	const onFocusChange = (active) => {
		setActive(active)
	}

	const mappedProjects = [
		projects.data &&
			projects.data.map((project, index) => (
				<MyProject
					key={index}
					active={active}
					setActive={onFocusChange}
					project={project}
			
				/>
			)),
	]

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
