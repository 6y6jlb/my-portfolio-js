import style from './MyProject.module.scss';
import HeadShake from 'react-reveal/HeadShake';
import snImage from "../../assets/images/Screenshot_42.jpg";
import counterImage from "../../assets/images/Screenshot_40.jpg";
import portfolioImage from "../../assets/images/Screenshot_39.jpg";
import todoImage from "../../assets/images/Screenshot_41.jpg";


const MyProject = ({link,active,projectName,project,description,setActive,...props}) => {
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

    const stylePic=projectName.toLocaleLowerCase().indexOf('to-do')>-1?divStyleTodo:divStyleCounter



    const activeStyle = active === projectName

    return (
        <HeadShake>
            <div onMouseEnter={() => setActive(projectName)}
                 className={style.project}>
                <a href={link} className={style.button}>watch</a>
                <div style={stylePic} className={`${style.image} ${activeStyle && style.active}`}>
                </div>
                <div className={style.descriptionBlock}>
                    <h4 className={style.projectName}>{projectName}</h4>
                    <p style={style.description}>{description}</p>
                </div>
            </div>
        </HeadShake>
    )
}
export default MyProject;
