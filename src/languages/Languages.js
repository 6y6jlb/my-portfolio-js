import { useContext } from "react"
import { getAllLanguagesGitHub } from "../common/services/languages"
import { StateProvider } from "../state/state"

export default function Languages() {
	const { state, dispatch } = useContext(StateProvider)
	if (state.projects.data.length) {
		// dispatch({ type: "LOADING", payload: { directory: "languages", value: true } })
		getAllLanguagesGitHub(state.projects.data.map(el=>el.name)).then(response=>console.log(response))
		// dispatch({ type: "LOADING", payload: { directory: "languages", value: false } })
	}
	return <div></div>
}
