import style from './Skills.module.scss';
import containerStyle from '../common/styles/Container.module.scss'
import Skill from "./Skill/Skill";
import Title from "../common/components/title/Title";


const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${containerStyle.mainContainer} ${style.skillsContainer}`}>
               <Title even={false} title={'skills'}/>
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

