import style from './MyProjects.module.scss';
import containerStyle from '../common/styles/Container.module.scss';
import MyProject from './myProject/MyProject';
import Title from '../common/components/title/Title';
import snImage from '../assets/images/Screenshot_42.jpg';
import counterImage from '../assets/images/Screenshot_40.jpg';
import todoImage from '../assets/images/Screenshot_41.jpg';
import portfolioImage from '../assets/images/Screenshot_39.jpg';
import {useEffect, useState} from "react";
import {API} from "../api/API";


const MyProjects = () => {
    const [active, setActive] = useState(null)
    const [projects, setProjects] = useState([])

    useEffect(async () => {
        const data = await API.getGitHubRepos().then(res => res.data)
        await setProjects(data)


    }, [])

    const onFocusChange = (active) => {
        setActive(active)
    }
    const mappedProjects = projects && projects.map((project,index) => <MyProject key={index} style={{backgroundImage: `url(${snImage})`}}
                                                                          projectName={project.name} active={active}
                                                                          setActive={onFocusChange}
                                                                          link={project.html_url}
                                                                          description={project.description}/>)



    return (
        <div id={'projects'} className={style.projectsBlock}>
            <div className={`${containerStyle.mainContainer} ${style.container}`}>
                <Title even={true} title={'My Projects'}/>
                <div className={style.projects}>
                    {mappedProjects}
                </div>
            </div>

        </div>
    )
}

export default MyProjects;

