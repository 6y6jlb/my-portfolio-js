import style from "./Main.module.scss"
import containerStyle from "../common/styles/Container.module.scss"
import bgImage from "../assets/images/face.png"
import Particles from "react-particles-js"
import ReactTypingEffect from "react-typing-effect"
import particleStyles from "../common/styles/particleStyles"

const Main = () => {
	const bg = {
		backgroundImage: `url(${bgImage})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
	}

	return (
		<div id={"common"} style={bg} className={style.mainBlock}>
			<Particles className={style.particles} params={particleStyles} />
			<div className={`${containerStyle.mainContainer} ${style.container}`}>
				<div className={style.textBlock}>
					<span>Hi there</span>
					<h1 className={style.title}>
						{"I`am "}
						<ReactTypingEffect
							className={style.test}
							text={[
								" frontend developer",
								" react developer",
								" redux developer",
								" typescript developer",
							]}
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

					<h3>My name is Basalov Alexey and this is my portfolio</h3>
				</div>
				<div className={style.photoBlock}></div>
			</div>
		</div>
	)
}
export default Main
