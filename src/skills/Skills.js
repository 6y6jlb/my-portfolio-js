import style from './Skills.module.scss';
import containerStyle from '../common/styles/Container.module.scss'
import Skill from "./Skill/Skill";
import Title from "../common/components/title/Title";
import {faJs} from "@fortawesome/free-brands-svg-icons/faJs";
import {faReact} from "@fortawesome/free-brands-svg-icons/faReact";
import {faFileCode, faProjectDiagram} from "@fortawesome/free-solid-svg-icons";
import {faCss3Alt} from "@fortawesome/free-brands-svg-icons/faCss3Alt";
import {faHtml5, faSass} from "@fortawesome/free-brands-svg-icons";
import {faNetworkWired} from "@fortawesome/free-solid-svg-icons/faNetworkWired";
import {faVials} from "@fortawesome/free-solid-svg-icons/faVials";
import {faBook} from "@fortawesome/free-solid-svg-icons/faBook";
import {faGithubSquare} from "@fortawesome/free-brands-svg-icons/faGithubSquare";
import {faHighlighter} from "@fortawesome/free-solid-svg-icons/faHighlighter";
import {faEdit} from "@fortawesome/free-solid-svg-icons/faEdit";
import {faSquareRootAlt} from "@fortawesome/free-solid-svg-icons/faSquareRootAlt";
import {faTextHeight} from "@fortawesome/free-solid-svg-icons/faTextHeight";
import {faRegistered} from "@fortawesome/free-regular-svg-icons/faRegistered";




const Skills = () => {
    return (
        <div id={'skills'} className={style.skillsBlock}>
                <div className={`${containerStyle.mainContainer} ${style.skillsContainer}`}>
                    <Title even={false} title={'skills'}/>
                    <div className={style.skills}>
                        <Skill skillTitle={'JS'} icon={faJs}
                               skillDescription={'Lorem ipsum dolor sit amet,Aliquam risus risus, posuere sit amet lorem tempus, cu'}/>
                        <Skill skillTitle={'TS'} icon={faTextHeight}
                               skillDescription={'Lorem ipsum dolor sit amisus risus, posuere sit amet lorem tempus, cu'}/>
                        <Skill skillTitle={'react'} icon={faReact}
                               skillDescription={'Lorem ipsum dolor sit amet, consectentesque scelerisque ornare velit non iaculis. Aliquam risus risus, posuere sit amet lorem tempus, cu'}/>
                        <Skill skillTitle={'redux'} icon={faSquareRootAlt}
                               skillDescription={'Lorem ipsum dolor sit amet, consectentesque scelerisque ornare velit non iaculis. Aliquam risus risus, posuere sit amet lorem tempus, cu'}/>
                        <Skill skillTitle={'react-redux'} icon={faRegistered}
                               skillDescription={'Lorem ipsum dolor sit amet, consectentesque scelerisque ornare velit non iaculis. Aliquam risus risus, posuere sit amet lorem tempus, cu'}/>
                        <Skill skillTitle={'thunk'} icon={faFileCode}
                               skillDescription={'Lorem  ipsum dolor sit amet, consectentesque scelerisque ornare velit non iaculis. Aliquam risus risus, posuere sit amet lorem tempus, cu'}/>
                        <Skill skillTitle={'css3'} icon={faCss3Alt}
                               skillDescription={'Lorem ipsum dolor sit amet, consectentesque scelerisque ornare velit non iaculis. Aliquam risus risus, posuere sit amet lorem tempus, cu'}/>
                        <Skill skillTitle={'sass'} icon={faSass}
                               skillDescription={'Lorem ipsum dolor sit amet, consectentesque scelerisque ornare velit non iaculis. Aliquam risus risus, posuere sit amet lorem tempus, cu'}/>
                        <Skill skillTitle={'HTML'} icon={faHtml5}
                               skillDescription={'Lorem ipsum dolor sit amet, consectentesque scelerisque ornare velit non iaculis. Aliquam risus risus, posuere sit amet lorem tempus, cu'}/>
                        <Skill skillTitle={'Axios'} icon={faNetworkWired}
                               skillDescription={'Lorem ipsum dolor sit amet, consectentesque scelerisque ornare velit non iaculis. Aliquam risus risus, posuere sit amet lorem tempus, cu'}/>
                        <Skill skillTitle={'Rest API'} icon={faProjectDiagram}
                               skillDescription={'Lorem ipsum dolor sit amet, consectentesque scelerisque ornare velit non iaculis. Aliquam risus risus, posuere sit amet lorem tempus, cu'}/>
                        <Skill skillTitle={'Unit test'} icon={faVials}
                               skillDescription={'Lorem ipsum dolor sit amet, consectentesque scelerisque ornare velit non iaculis. Aliquam risus risus, posuere sit amet lorem tempus, cu'}/>
                        <Skill skillTitle={'Story Book'} icon={faBook}
                               skillDescription={'Lorem ipsum dolor sit amet, consectentesque scelerisque ornare velit non iaculis. Aliquam risus risus, posuere sit amet lorem tempus, cu'}/>
                        <Skill skillTitle={'Git'} icon={faGithubSquare}
                               skillDescription={'Lorem ipsum dolor sit amet, consectentesque scelerisque ornare velit non iaculis. Aliquam risus risus, posuere sit amet lorem tempus, cu'}/>
                        <Skill skillTitle={'material ui'} icon={faHighlighter}
                               skillDescription={'Lorem ipsum dolor sit amet, consectentesque scelerisque ornare velit non iaculis. Aliquam risus risus, posuere sit amet lorem tempus, cu'}/>
                        <Skill skillTitle={'ant design'} icon={faEdit}
                               skillDescription={'Lorem ipsum dolor sit amet, consectentesque scelerisque ornare velit non iaculis. Aliquam risus risus, posuere sit amet lorem tempus, cu'}/>
                    </div>
                </div>
        </div>
    )
}
export default Skills;

