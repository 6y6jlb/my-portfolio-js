import style from './Contacts.module.css'
import containerStyle from '../common/styles/Container.module.css'
const Contacts=()=>{
    return (
<div className={style.contactsBlock}>
    <div className={`${containerStyle.mainContainer} ${style.container}`} action="form">
        <h3 className={style.title}>Contacts</h3>
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