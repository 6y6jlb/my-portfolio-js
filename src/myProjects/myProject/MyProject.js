import style from './MyProject.module.scss'


const MyProject = (props)=> {
    return (
        <div className={style.project}>
            <div className={style.image}>
                <div className={style.button}>watch</div>
            </div>
            <div className={style.descriptionBlock}>
                <h4 className={style.projectName}>{props.projectName}</h4>
                <span style={style.description}>{props.description}</span>
            </div>
        </div>
    )
}
export default MyProject;
