import style from './MyProject.module.scss';
import HeadShake from 'react-reveal/HeadShake';


const MyProject = ({link,active,projectName,project,description,setActive,...props}) => {
    const activeStyle = props.active === props.projectName

    return (
        <HeadShake>
            <div onMouseEnter={() => setActive(projectName)}
                 className={style.project}>
                <a href={link} className={style.button}>watch</a>
                <div style={props.style} className={`${style.image} ${activeStyle && style.active}`}>

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
