import style from './Footer.module.scss'
import containerStyle from '../common/styles/Container.module.scss'
import Title from "../common/components/title/Title";
import Tada from 'react-reveal/Tada';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCode, faEnvelopeOpen, faMapMarkerAlt, faPaperPlane, faPhone} from "@fortawesome/free-solid-svg-icons";
import {faGithubAlt, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import {useState} from "react";


const contacts = [
    {item:faEnvelopeOpen, link:'6y6jl@gmail.com'},
    {item:faPaperPlane, link:'https://t.me/qwertybro'},
    {item:faMapMarkerAlt, link:'55.93245092109075, 37.51710785640154'},
    {item:faPhone, link:'89254489116'},
    {item:faLinkedinIn, link:'https://www.linkedin.com/in/alexey-basalov-329bb420a/'},
    {item:faGithubAlt, link:'https://github.com/6y6jlb'},
    {item:faCode, link:'https://www.codewars.com/users/6y6jlb'},
]

const Footer = (props) => {
    const [active,setActive] = useState(null)
    const mappedContacts = contacts.map((c,index)=>{
        return <div key={index}>
        <Tada >
                <div onMouseEnter={()=>setActive(c.link)} className={active===c.link?style.active + ' ' +style.second: style.second }>
                    <a href={c.link} > <FontAwesomeIcon style={{color:'white'}} icon={c.item}  />
                       </a>

                </div>
            <div className={style.first}></div>
        </Tada>
        </div>
    })
    return (
        <div className={style.footerFrame}>
            <div className={`${containerStyle.mainContainer} ${style.container}`}>
                <Title even={false} title={'Alexey Basalov'}/>

                <div className={style.insideContainer}>
                    {mappedContacts}
                </div>

                <p className={style.lowSpan}>2021 looking for job</p>
            </div>

        </div>
    )
}
export default Footer;

