import { useEffect, useReducer } from "react"
import "./App.scss"
import { API } from "./api/API"
import Contacts from "./contacts/Contacts"
import Footer from "./footer/Footer"
import Header from "./header/Header"
import Main from "./main/Main"
import MyProjects from "./myProjects/MyProjects"
import RemoteJob from "./remoteJob/RemoteJob"
import Skills from "./skills/Skills"
import { reducer } from "./state/reducer"
import { StateProvider, initialState } from "./state/state"

const App = () => {
	const [state, dispatch] = useReducer(reducer, initialState)

	useEffect(() => {
		dispatch({ type: "LOADING" })

		API.getGitHubRepos()
			.then((res) => dispatch({ type: "SET_PROJECTS", payload: res.data }))
			.finally(dispatch({ type: "LOADED" }))
	}, [])

	return (
		<StateProvider.Provider value={{ state, dispatch }}>
			<div className="App">
				<Header />
				<Main />
				<Skills />
				<MyProjects />
				<RemoteJob />
				<Contacts />
				<Footer />
			</div>
		</StateProvider.Provider>
	)
}

export default App
