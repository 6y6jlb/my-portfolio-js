import style from './RemoteJob.module.scss'
import containerStyle from '../common/styles/Container.module.scss'
import Title from "../common/components/title/Title";
import Tada from 'react-reveal/Tada';
import { FormattedMessage } from 'react-intl';

const RemoteJob = () => {
    return (

        <div className={style.remoteJobBlock}>
            <div className={`${containerStyle.mainContainer} ${style.container}`}>
                    <Title even={false} title={<FormattedMessage id="remote.title"/>}/>
                <Tada>
                    <div className={style.insideWrapper}>
                        <p className={style.description}><FormattedMessage id="remote.agree"/> </p>
                    </div>
                </Tada>
            </div>
        </div>
    )
}
export default RemoteJob;