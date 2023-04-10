import { useEffect, useReducer } from "react"
import "./App.scss"
import { API } from "./api/API"
import Contacts from "./contacts/Contacts"
import Footer from "./footer/Footer"
import Header from "./header/Header"
import Languages from "./languages/Languages"
import Main from "./main/Main"
import MyProjects from "./myProjects/MyProjects"
import RemoteJob from "./remoteJob/RemoteJob"
import { reducer } from "./state/reducer"
import { StateProvider, initialState } from "./state/state"

const App = () => {
	const [state, dispatch] = useReducer(reducer, initialState)

	useEffect(() => {
		dispatch({ type: "LOADING", payload: { directory: "projects", value: true } })

		API.getGitHubRepos()
			.then((res) => dispatch({ type: "SET_PROJECTS", payload: res.data }))
			.catch((error) => console.log(error))
			.finally(dispatch({ type: "LOADING", payload: { directory: "projects", value: false } }))
	}, [])

	return (
		<StateProvider.Provider value={{ state, dispatch }}>
			<div className="App">
				<Header />
				<Main />
				<MyProjects />
				<Languages />
				<RemoteJob />
				<Contacts />
				<Footer />
			</div>
		</StateProvider.Provider>
	)
}

export default App
