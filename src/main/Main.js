import style from './Main.module.css'
import containerStyle from '../common/styles/Container.module.css'

const Main=()=>{
    return (
        <div className={style.mainBlock}>
            <div className={containerStyle.mainContainer}>
                <div className={style.textBlock}>
                    <span>Hi there</span>
                    <h1>I`am Jeffery Aaron</h1>
                    <p>frontend developer</p>
                </div>
                <div className={style.photoBlock}></div>
            </div>
        </div>
    )
}
export default Main;