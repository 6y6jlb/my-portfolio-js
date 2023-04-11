import "./App.scss"
import Contacts from "./contacts/Contacts"
import Footer from "./footer/Footer"
import Header from "./header/Header"
import Languages from "./languages/Languages"
import Main from "./main/Main"
import MyProjects from "./myProjects/MyProjects"
import RemoteJob from "./remoteJob/RemoteJob"

const App = () => {
	return (
		<div className="App">
			<Header />
			<Main />
			<Languages />
			<MyProjects />
			<RemoteJob />
			<Contacts />
			<Footer />
		</div>
	)
}

export default App
