import style from './MyProjects.module.scss';
import containerStyle from '../common/styles/Container.module.scss';
import MyProject from './myProject/MyProject';
import Title from '../common/components/title/Title';
import snImage from '../assets/images/Screenshot_42.jpg';
import counterImage from '../assets/images/Screenshot_40.jpg';
import todoImage from '../assets/images/Screenshot_41.jpg';
import portfolioImage from '../assets/images/Screenshot_39.jpg';
import {useState} from "react";


const MyProjects = () => {
    const [active, setActive] = useState(null)

    const onFocusChange = (active) => {
        console.log(active)
        setActive(active)
    }
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
        <div id={'projects'} className={style.projectsBlock}>
            <div className={`${containerStyle.mainContainer} ${style.container}`}>
                <Title even={true} title={'My Projects'}/>
                <div className={style.projects}>
                    <MyProject propertie={'left'} style={divStylePortfolio} projectName={'Portfolio'} active={active}
                               setActive={onFocusChange}
                               description={' Current portfolio page is made on react using several libraries for animation and sass  '}
                               link={'https://6y6jlb.github.io/my-portfolio-js/'}/>
                    <MyProject style={divStyleTodo} projectName={'To-Do'} active={active} setActive={onFocusChange}
                               link={'https://github.com/6y6jlb/todolist'}
                               description={' To-do project written entirely in type-script using Material UI library, redux, redux-thunk, axios etc. '}/>
                    <MyProject style={divStyleSN} projectName={'Social Network'} active={active}
                               setActive={onFocusChange} link={'https://github.com/6y6jlb/social-nenwork-ts'}
                               description={' The same type-script, almost the same technology stack as there, only without material-ui, just custom styles'}/>
                    <MyProject style={divStyleCounter} projectName={'Counter'} active={active} setActive={onFocusChange}
                               link={'https://github.com/6y6jlb/counter-ts'}
                               description={' Simple counter with redux, type-script and local-storage '}/>
                </div>
            </div>

        </div>
    )
}

export default MyProjects;

