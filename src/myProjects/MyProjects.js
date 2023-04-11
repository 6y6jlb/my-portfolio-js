import { useEffect, useState } from "react"
import Title from "../common/components/title/Title"
import containerStyle from "../common/styles/Container.module.scss"
import { useProjectsStore } from "../state/state"
import style from "./MyProjects.module.scss"
import MyProject from "./myProject/MyProject"
import { Audio } from "react-loader-spinner"
import { FormattedMessage } from "react-intl"

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
				<MyProject key={index} active={active} setActive={onFocusChange} project={project} />
			)),
	]

	return (
		<div id={"projects"} className={style.projectsBlock}>
			<div className={`${containerStyle.mainContainer} ${style.container}`}>
				<Title even={true} title={<FormattedMessage id="projects.title"/>} />
				{projects.loaded ? (
					<div className={style.projects}>{mappedProjects}</div>
				) : (
					<Audio
						height="80"
						width="80"
						radius="9"
						color="grey"
						ariaLabel="loading"
						wrapperStyle
						wrapperClass
					/>
				)}
			</div>
		</div>
	)
}

export default MyProjects
