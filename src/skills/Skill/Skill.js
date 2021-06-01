import style from './Skill.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Tada from 'react-reveal/Tada';

const Skill = (props) => {

    return (
        <Tada>
            <div className={style.skill}>
                <div className={style.icon}>
                    <FontAwesomeIcon style={{fontSize: '60px'}} icon={props.icon}/>
                </div>
                <h4 className={style.title}>{props.skillTitle}</h4>
                <p className={style.description}>{props.skillDescription}</p>

            </div>
        </Tada>
    )
}
export default Skill;