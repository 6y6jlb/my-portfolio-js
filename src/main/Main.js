import style from './Main.module.scss'
import containerStyle from '../common/styles/Container.module.scss'
import bgImage from '../common/assets/img/face.png'

const Main=()=>{
    const bg= {
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
    backgroundPosition:'center',
    backgroundRepeat: 'no-repeat',
    }
    return (
        <div style={bg} className={style.mainBlock}>
            <div className={`${containerStyle.mainContainer} ${style.container}`}>
                <div className={style.textBlock}>
                    <span>Hi there</span>
                    <h1 className={style.title}>I`am frontend developer</h1>
                    <h3> i'am Alex and this is my portfolio</h3>
                </div>
                <div className={style.photoBlock}></div>
            </div>
        </div>
    )
}
export default Main;