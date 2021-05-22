import style from './Footer.module.scss'
import containerStyle from '../common/styles/Container.module.scss'
import Title from "../common/components/title/Title";

const Footer = (props) => {
    return (
        <div className={style.footerFrame}>
            <div className={`${containerStyle.mainContainer} ${style.container}`}>
                <Title even={false} title={'full name'}/>
                <div className={style.insideContainer}>
                    <div className={style.first}></div>
                    <div className={style.second}></div>
                    <div className={style.first}></div>
                    <div className={style.second}></div>
                    <div className={style.first}></div>
                    <div className={style.second}></div>
                    <div className={style.first}></div>
                </div>
                <p className={style.lowSpan}>2021 gimme a job</p>
            </div>

        </div>
    )
}
export default Footer;