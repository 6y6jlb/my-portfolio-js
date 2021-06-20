import style from './Skills.module.scss';
import containerStyle from '../common/styles/Container.module.scss'
import Skill from "./Skill/Skill";
import Title from "../common/components/title/Title";
import {faJs} from "@fortawesome/free-brands-svg-icons/faJs";
import {faFileCode, faProjectDiagram} from "@fortawesome/free-solid-svg-icons";
import {faCss3Alt} from "@fortawesome/free-brands-svg-icons/faCss3Alt";
import {faHtml5, faSass} from "@fortawesome/free-brands-svg-icons";
import {faNetworkWired} from "@fortawesome/free-solid-svg-icons/faNetworkWired";
import {faVials} from "@fortawesome/free-solid-svg-icons/faVials";
import {faBook} from "@fortawesome/free-solid-svg-icons/faBook";
import {faGithubSquare} from "@fortawesome/free-brands-svg-icons/faGithubSquare";
import {faHighlighter} from "@fortawesome/free-solid-svg-icons/faHighlighter";
import {faEdit} from "@fortawesome/free-solid-svg-icons/faEdit";
import {faTextHeight} from "@fortawesome/free-solid-svg-icons/faTextHeight";
import {faRegistered} from "@fortawesome/free-regular-svg-icons/faRegistered";
import {useState} from "react";

const skillsEntities = [
    {name:'JS',icon:faJs,description:''},
    {name:'TS',icon:faTextHeight,description:''},
    {name:'react-redux',icon:faRegistered,description:''},
    {name:'thunk',icon:faFileCode,description:''},
    {name:'css3',icon:faCss3Alt,description:''},
    {name:'sass',icon:faSass,description:''},
    {name:'HTML',icon:faHtml5,description:''},
    {name:'Axios',icon:faNetworkWired,description:''},
    {name:'Story Book',icon:faBook,description:''},
    {name:'Rest API',icon:faProjectDiagram,description:''},
    {name:'Unit test',icon:faVials,description:''},
    {name:'Git',icon:faGithubSquare,description:''},
    {name:'material ui',icon:faHighlighter,description:''},
    {name:'ant design',icon:faEdit,description:''},

]


const Skills = () => {
    const [active,setActive] = useState(null)
    const mappedSkills = skillsEntities.map((s,index)=> {
        return <Skill key={index} active={active} setActive={setActive} skillTitle={s.name} icon={s.icon} description={s.description}/>
    } )

    return (
        <div id={'skills'} className={style.skillsBlock}>
                <div className={`${containerStyle.mainContainer} ${style.skillsContainer}`}>
                    <Title even={false} title={'skills'}/>
                    <div className={style.skills}>
                        {mappedSkills}
                    </div>
                </div>
        </div>
    )
}
export default Skills;

