import style from './Projects.module.css'
import containerStyle from '../common/styles/Container.module.css'

const Projects = () => {
return (
    <div className={style.projects}>
        <div className={`${containerStyle.wrapper} ${style.container}`}>
            <Projects/>
            <Projects/>
        </div>
    </div>
)
}

export default Projects;

