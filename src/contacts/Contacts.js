import style from './Contacts.module.scss'
import containerStyle from '../common/styles/Container.module.scss'
import Title from "../common/components/title/Title";
import HeadShake from 'react-reveal/HeadShake';
import {useEffect, useState} from "react";
import {API} from "../api/API";

const Contacts = () => {
    const [contacts, setContacts] = useState('')
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [success, setSuccess] = useState('initial')

    const unDisable = !(!!contacts && !!name && !!message && (success === 'initial' || success === 'ok'))


    const onSubmit = async (e) => {
        setSuccess('disable')
        e.preventDefault()
        const res = await API.test(contacts, name, message)
        if (res.data === 'ok') {
            setSuccess('ok')
            setTimeout(() => {
                setSuccess('initial')
            }, 3000)
        } else {
            setSuccess('badRequest')
        }
    }

    useEffect(() => {
    }, [])


    return (
        <div id={'contact'} className={style.contactsBlock}>
            <HeadShake>
                <div className={`${containerStyle.mainContainer} ${style.container}`} action="form">
                    <Title even={true} title={'contacts'}/>
                    <form onSubmit={onSubmit}
                          className={`${style.form} ${(success !== 'initial' && success !== 'ok') ? style.success : ''}`}
                          action="form">
                        <label id={'contacts'}></label><input onChange={(e) => setContacts(e.currentTarget.value)}
                                                              placeholder={'contacts/email/phone'} name={'contacts'}
                                                              value={contacts} type="text"/>
                        <label id={'name'}></label><input onChange={(e) => setName(e.currentTarget.value)}
                                                          placeholder={'name'} name={'name'} value={name} type="text"/>
                        <textarea placeholder={'text here'} onChange={(e) => setMessage(e.currentTarget.value)}
                                  value={message} className={style.textArea}/>
                        <button disabled={unDisable} className={`${style.button} ${unDisable?style.buttonActive:''}`}>send</button>
                    </form>

                </div>
            </HeadShake>
        </div>
    )
}
export default Contacts;