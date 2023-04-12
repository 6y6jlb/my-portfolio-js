import { useIntl } from "react-intl"
import ReactTypingEffect from "react-typing-effect"
import bgImage from "../assets/images/face.png"
import containerStyle from "../common/styles/Container.module.scss"
import style from "./Main.module.scss"
import LanguageSwitcher from "../common/languageSwitcher/LanguageSwitcher"

const Main = () => {
	const bg = {
		backgroundImage: `url(${bgImage})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
	}

	const intl = useIntl()

	const typedStrings = [
		intl.formatMessage({id:"typing.first"}),
		intl.formatMessage({id:"typing.second"}),
		intl.formatMessage({id:"typing.third"}),
		intl.formatMessage({id:"typing.fourth"}),
	]

	return (
		<div id={"common"} style={bg} className={style.mainBlock}>
			<div className={`${containerStyle.mainContainer} ${style.container}`}>
				<div className={style.textBlock}>
					<span>{intl.formatMessage({id:"main.greeting"})}</span>
					<h1 className={style.title}>
						{intl.formatMessage({id:"typing.zero"})}
						<ReactTypingEffect
							className={style.test}
							text={typedStrings}
							cursorRenderer={(cursor) => <h1>{cursor}</h1>}
							displayTextRenderer={(text, i) => {
								return (
									<h1>
										{text.split("").map((char, i) => {
											const key = `${i}`
											return <span key={key}>{char}</span>
										})}
									</h1>
								)
							}}
						/>
					</h1>

					<h3>{intl.formatMessage({id:"main.describtion"})}</h3>
				</div>
				<div className={style.photoBlock} />
			</div>
			
		</div>
	)
}
export default Main
