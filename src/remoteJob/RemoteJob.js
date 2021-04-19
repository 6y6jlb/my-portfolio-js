import style from './RemoteJob.module.css'
import containerStyle from '../common/styles/Container.module.css'

const RemoteJob = () =>{
    return (
        <div className={style.remoteJobBlock}>
            <div className={`${containerStyle.mainContainer} ${style.container}`}>
                <div className={style.insideWrapper}>
                    <h3 className={style.askToDeploy}>Сonsidering options for remote work</h3>
                    <div className={style.button}> Employ Me</div>
                </div>
            </div>
        </div>
    )
}
export default RemoteJob;