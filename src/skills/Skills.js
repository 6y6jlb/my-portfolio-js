import style from './Skills.module.css';
import containerStyle from '../common/styles/Container.module.css'
import Skill from "./Skill/Skill";

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${containerStyle.mainContainer} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill skillTitle={'JS'} skillDescription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque scelerisque ornare velit non iaculis. Aliquam risus risus, posuere sit amet lorem tempus, cu'}/>
                    <Skill skillTitle={'TS'} skillDescription={'Lorem ipsum dolor sit amisus risus, posuere sit amet lorem tempus, cu'}/>
                    <Skill skillTitle={'lazy'} skillDescription={'Lorem ipsum dolor sit amet, consectentesque scelerisque ornare velit non iaculis. Aliquam risus risus, posuere sit amet lorem tempus, cu'}/>

                </div>
            </div>
        </div>
    )
}
export default Skills;

