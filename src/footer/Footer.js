import style from './Footer.module.scss'
import containerStyle from '../common/styles/Container.module.scss'
import Title from "../common/components/title/Title";
import Tada from 'react-reveal/Tada';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCode, faEnvelopeOpen, faMapMarkerAlt, faPaperPlane, faPhone} from "@fortawesome/free-solid-svg-icons";
import {faGithubAlt, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import {useState} from "react";


const contacts = [
    {item:faEnvelopeOpen, title:'mail', link:'mailto:6y6jl@gmail.com'},
    {item:faPaperPlane,title:'tg', link:'https://t.me/qwertybro'},
    {item:faMapMarkerAlt,title:'place', link:'https://www.google.ru/maps/place/%D0%94%D0%BE%D0%BB%D0%B3%D0%BE%D0%BF%D1%80%D1%83%D0%B4%D0%BD%D1%8B%D0%B9,+%D0%9C%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB./@55.9478723,37.4280179,12z/data=!3m1!4b1!4m5!3m4!1s0x46b53bd7a745d0eb:0x307afaf3fbe15b15!8m2!3d55.947064!4d37.4992755'},
    {item:faPhone,title:'phone', link:'tel:+79254489116'},
    {item:faLinkedinIn,title:'linkedIn', link:'https://www.linkedin.com/in/alexey-basalov-329bb420a/'},
    {item:faGithubAlt,title:'gitHub', link:'https://github.com/6y6jlb'},
    {item:faCode,title:'codeWars', link:'https://www.codewars.com/users/6y6jlb'},
]

const Footer = (props) => {
    const [active,setActive] = useState(null)
    const mappedContacts = contacts.map((c,index)=>{
        return <Tada key={index}>
                <div onMouseEnter={()=>setActive(c.link)} className={active===c.link?style.active + ' ' +style.second: style.second }>
                    <a title={c.title} href={c.link}  > <FontAwesomeIcon style={{color:'white'}} icon={c.item}  />
                       </a>
                </div>

        </Tada>

    })
    return (
        <div className={style.footerFrame}>
            <div className={`${containerStyle.mainContainer} ${style.container}`}>
                <Title even={false} title={'Alexey Basalov'}/>

                <div className={style.insideContainer}>
                    {mappedContacts}
                </div>
                <p className={style.lowSpan}>Working now from "A3F Group" </p>
                <p className={style.lowSpan}><a href="https://hoqu.com/" >HOQU project</a></p>
            </div>

        </div>
    )
}
export default Footer;

