import style from './MyProject.module.scss'


const MyProject = (props)=> {
    return (
        <div  className={style.project}>
            <div style={props.style} className={style.image}>
                <div className={style.before}></div>
                <a href={''} className={style.button}>watch</a>
            </div>
            <div className={style.descriptionBlock}>
                <h4 className={style.projectName}>{props.projectName}</h4>
                <p style={style.description}>{props.description}</p>
            </div>
        </div>
    )
}
export default MyProject;
