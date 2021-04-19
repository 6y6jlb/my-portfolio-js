import style from './Footer.module.css'
import containerStyle from '../common/styles/Container.module.css'

const Footer = (props) => {
    return (
        <div className={style.footerFrame}>
            <div className={`${containerStyle.mainContainer} ${style.container}`}>
                <h3 className={style.title}>full name</h3>
                <div className={style.insideContainer}>
                    <div className={style.first}></div>
                    <div className={style.second}></div>
                    <div className={style.first}></div>
                    <div className={style.second}></div>
                    <div className={style.first}></div>
                    <div className={style.second}></div>
                    <div className={style.first}></div>
                </div>
                <span className={style.lowSpan}>2021 gimme a job</span>
            </div>

        </div>
    )
}
export default Footer;