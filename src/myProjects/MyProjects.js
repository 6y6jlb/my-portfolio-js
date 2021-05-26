import style from './MyProjects.module.scss'
import containerStyle from '../common/styles/Container.module.scss'
import MyProject from './myProject/MyProject';
import Title from '../common/components/title/Title';
import snImage from '../assets/images/Screenshot_42.jpg'
import counterImage from '../assets/images/Screenshot_40.jpg'
import todoImage from '../assets/images/Screenshot_41.jpg'
import portfolioImage from '../assets/images/Screenshot_39.jpg'

const MyProjects = () => {
    const divStyleSN = {
        backgroundImage: `url(${snImage})`
    };
    const divStyleCounter = {
        backgroundImage: `url(${counterImage})`
    };
    const divStylePortfolio = {
        backgroundImage: `url(${portfolioImage})`
    };
    const divStyleTodo = {
        backgroundImage: `url(${todoImage})`
    };
    return (
        <div className={style.projectsBlock}>
            <div className={`${containerStyle.mainContainer} ${style.container}`}>
                <Title even={true} title={'My Projects'}/>
                <div className={style.projects}>
                    <MyProject style={divStylePortfolio} projectName={'Portfolio'}
                               description={' The href attribute requires a valid value to be accessible. Provide a valid, navigable address '}/>
                    <MyProject style={divStyleTodo} projectName={'To-Do'}
                               description={' The href attribute requires a valid value to be accessible. Provide a valid, navigable address '}/>
                    <MyProject style={divStyleSN} projectName={'Social Network'}
                               description={' The href attribute requires a valid value to be accessible. Provide a valid, navigable address '}/>
                    <MyProject style={divStyleCounter} projectName={'Counter'}
                               description={' Line 10:17:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and '}/>
                </div>
            </div>
        </div>
    )
}

export default MyProjects;

