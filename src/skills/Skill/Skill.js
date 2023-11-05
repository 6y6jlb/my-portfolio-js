import style from "./Skill.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Tada from "react-reveal/Tada"

const Skill = (props) => {
	const active = props.active === props.skillTitle
	//const newStyle = {fontSize: active?'68px':'60px'}

	return (
		<Tada>
			<div
				onMouseEnter={() => props.setActive(props.skillTitle)}
				className={!active ? style.skill : `${style.skill} ${style.active}`}
			>
				<div className={style.icon}>
					<FontAwesomeIcon icon={props.icon} />
				</div>
				<h4 className={style.title}>{props.skillTitle}</h4>
				{/*//for description place
                <p className={style.description}>{props.skillDescription}</p>*/}
			</div>
		</Tada>
	)
}
export default Skill
