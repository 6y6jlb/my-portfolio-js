import style from './MyProject.module.scss';
import HeadShake from 'react-reveal/HeadShake';


const MyProject = (props) => {
    console.log(props.active,props.projectName)
    const active = props.active === props.projectName

    return (
        <HeadShake>
            <div onMouseEnter={() => props.setActive(props.projectName)}
                 className={style.project}>
                <div style={props.style} className={`${style.image} ${active && style.active}`}>
                    <a href={''} className={style.button}>watch</a>
                </div>
                <div className={style.descriptionBlock}>
                    <h4 className={style.projectName}>{props.projectName}</h4>
                    <p style={style.description}>{props.description}</p>
                </div>
            </div>
        </HeadShake>
    )
}
export default MyProject;
