import style from './RemoteJob.module.scss'
import containerStyle from '../common/styles/Container.module.scss'
import Title from "../common/components/title/Title";
import Tada from 'react-reveal/Tada';

const RemoteJob = () =>{
    return (

        <div className={style.remoteJobBlock}>
            <div className={`${containerStyle.mainContainer} ${style.container}`}>
            <Tada>
                <Title even={false} title={'remote job'}/>
                <div className={style.insideWrapper}>
                    <p className={style.description}> yes </p>
                </div>
            </Tada>
            </div>
        </div>
    )
}
export default RemoteJob;