import style from './Contacts.module.scss'
import containerStyle from '../common/styles/Container.module.scss'
import Title from "../common/components/title/Title";
import HeadShake from 'react-reveal/HeadShake';

const Contacts = () => {
    return (
        <div id={'contact'} className={style.contactsBlock}>
            <HeadShake>
            <div  className={`${containerStyle.mainContainer} ${style.container}`} action="form">
                <Title even={true} title={'contacts'}/>
                <form className={style.form} action="form">
                    <label id={'name'}></label><input placeholder={'your name'} name={'name'} type="text"/>
                    <label id={'theme'}></label><input placeholder={'something else'} name={'theme'}  type="text"/>
                    <textarea placeholder={'text here'} className={style.textArea}/>
                </form>
                <div className={style.button}>send</div>
            </div>
            </HeadShake>
        </div>
    )
}
export default Contacts;