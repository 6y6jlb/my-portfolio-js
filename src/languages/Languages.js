import { useContext } from "react"
import { StateProvider } from "../state/state"

export default function Languages() {
	const { state, dispatch } = useContext(StateProvider)
	if (state.projects.loaded && !state.languages.loaded) {
		dispatch({ type: "CALCULATE_LANGUAGES"})
		dispatch({ type: "LOADED", payload: { directory: "languages", value: true } })
	}
	console.log(state.languages.data)
	return <div></div>
}
