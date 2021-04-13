import style from './Skill.module.css'

const Skill =(props)=>{
    return (
        <div className={style.skill}>
<div className={style.icon}></div>
            <h3 className={style.title}>{props.skillTitle}</h3>
            <span className={style.description}>{props.skillDescription}</span>

        </div>
    )
}
export default Skill;