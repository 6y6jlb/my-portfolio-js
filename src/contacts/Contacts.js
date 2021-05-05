import style from './Contacts.module.scss'
import containerStyle from '../common/styles/Container.module.scss'
import Title from "../common/components/title/Title";

const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${containerStyle.mainContainer} ${style.container}`} action="form">
                <Title even={true} title={'contacts'}/>
                <form className={style.form} action="form">
                    <input type="text"/>
                    <input type="text"/>
                    <textarea className={style.textArea}/>
                </form>
                <div className={style.button}>send</div>
            </div>
        </div>
    )
}
export default Contacts;