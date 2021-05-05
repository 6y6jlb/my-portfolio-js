import style from './MyProjects.module.scss'
import containerStyle from '../common/styles/Container.module.scss'
import MyProject from "./myProject/MyProject";
import Title from "../common/components/title/Title";

const MyProjects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${containerStyle.mainContainer} ${style.container}`}>
               <Title even={true} title={'My Projects'}/>
                <div className={style.projects}>
                    <MyProject projectName={'Social Network'} description={' The href attribute requires a valid value to be accessible. Provide a valid, navigable address '}/>
                    <MyProject projectName={'Counter'} description={' Line 10:17:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and '}/>
                </div>
            </div>
        </div>
    )
}

export default MyProjects;

