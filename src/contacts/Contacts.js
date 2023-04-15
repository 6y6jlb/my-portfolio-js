import { FormattedMessage } from "react-intl"
import HeadShake from "react-reveal/HeadShake"
import Title from "../common/components/title/Title"
import containerStyle from "../common/styles/Container.module.scss"
import { useFeedbackFormsStore } from "../state/feedbackFormStore"
import style from "./Contacts.module.scss"

const Contacts = () => {
	const feedbackStore = useFeedbackFormsStore()
	const onSubmit = (e) => {
		e.preventDefault()
		feedbackStore.send()
	}


	return (
		<div id={"contact"} className={style.contactsBlock}>
			<HeadShake>
				<div className={`${containerStyle.mainContainer} ${style.container}`} action="form">
					{feedbackStore.loading && (
						<div className={style.modal}>
							<div className={style.modalText}>letter sent</div>
						</div>
					)}
					<Title even={true} title={<FormattedMessage id="contacts.title" />} />
					<form onSubmit={onSubmit} className={style.form} action="form">
						<label id={"contacts"}></label>
						<input
							onChange={(e) => feedbackStore.update("senderContacts", e.currentTarget.value)}
							placeholder={"contacts/email/phone"}
							name={"contacts"}
							value={feedbackStore.data.senderContacts}
							type="text"
							className={`${style.rounded} ${style.padding} `}
						/>
						<label id={"name"}></label>
						<input
							onChange={(e) => feedbackStore.update("senderName", e.currentTarget.value)}
							placeholder={"name"}
							name={"name"}
							value={feedbackStore.data.senderName}
							type="text"
							className={`${style.rounded} ${style.padding} `}
						/>
						<textarea
							placeholder={"message"}
							onChange={(e) => feedbackStore.update("body", e.currentTarget.value)}
							value={feedbackStore.data.body}
							className={`${style.rounded} ${style.textArea} ${style.padding} `}
						/>
						<button
							disabled={!feedbackStore.canBeSubmit()}
							className={`${style.rounded} ${style.button} ${style.padding} ${
								!feedbackStore.canBeSubmit() ? style.buttonActive : ""
							}`}
						>
							<FormattedMessage id="buttons.save" />
						</button>
					</form>
				</div>
			</HeadShake>
		</div>
	)
}
export default Contacts
