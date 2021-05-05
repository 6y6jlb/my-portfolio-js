import style from './Skill.module.scss'
import {faReact} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faJs} from "@fortawesome/free-brands-svg-icons/faJs";
import {faFileCode} from "@fortawesome/free-solid-svg-icons";

const Skill = (props) => {

    return (
        <div className={style.skill}>
            <div className={style.icon}>
                {<FontAwesomeIcon style={{fontSize:'60px'}} icon={props.skillTitle==='JS'?faJs:props.skillTitle==='lazy'?faReact:faFileCode}/>}
            </div>
            <h4 className={style.title}>{props.skillTitle}</h4>
            <p className={style.description}>{props.skillDescription}</p>

        </div>
    )
}
export default Skill;