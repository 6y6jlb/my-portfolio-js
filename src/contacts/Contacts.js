import style from "./Contacts.module.scss"
import containerStyle from "../common/styles/Container.module.scss"
import Title from "../common/components/title/Title"
import HeadShake from "react-reveal/HeadShake"
import { useEffect, useState } from "react"
import { API } from "../api/API"
import { FormattedMessage } from "react-intl"

const Contacts = () => {
	const [contacts, setContacts] = useState("")
	const [name, setName] = useState("")
	const [message, setMessage] = useState("")
	const [loading, setLoading] = useState("hide")

	const isDisable = !(!!contacts && !!name && !!message && loading === "hide")
	const isModalWindowShow = loading !== "hide"

	const onSubmit = async (e) => {
		setLoading("loading")
		e.preventDefault()
		const res = await API.sendContactsAndMessage(contacts, name, message)
		if (res.data === "ok") {
			setLoading("show")
			setTimeout(() => {
				setLoading("hide")
			}, 1000)
		} else {
			setLoading("badRequest")
		}
	}

	return (
		<div id={"contact"} className={style.contactsBlock}>
			<HeadShake>
				<div className={`${containerStyle.mainContainer} ${style.container}`} action="form">
					{isModalWindowShow && (
						<div className={style.modal}>
							<div className={style.modalText}>letter sent</div>
						</div>
					)}
					<Title even={true} title={<FormattedMessage id="contacts.title"/>} />
					<form onSubmit={onSubmit} className={style.form} action="form">
						<label id={"contacts"}></label>
						<input
							onChange={(e) => setContacts(e.currentTarget.value)}
							placeholder={"contacts/email/phone"}
							name={"contacts"}
							value={contacts}
							type="text"
						/>
						<label id={"name"}></label>
						<input
							onChange={(e) => setName(e.currentTarget.value)}
							placeholder={"name"}
							name={"name"}
							value={name}
							type="text"
						/>
						<textarea
							placeholder={"message"}
							onChange={(e) => setMessage(e.currentTarget.value)}
							value={message}
							className={style.textArea}
						/>
						<button
							disabled={isDisable}
							className={`${style.button} ${isDisable ? style.buttonActive : ""}`}
						>
							<FormattedMessage id="buttons.save"/>
						</button>
					</form>
				</div>
			</HeadShake>
		</div>
	)
}
export default Contacts
