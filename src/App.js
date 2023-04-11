import { IntlProvider } from "react-intl"
import "./App.scss"
import Contacts from "./contacts/Contacts"
import Footer from "./footer/Footer"
import Header from "./header/Header"
import Languages from "./languages/Languages"
import Main from "./main/Main"
import MyProjects from "./myProjects/MyProjects"
import RemoteJob from "./remoteJob/RemoteJob"
import { useTranslations } from "./state/state"

const App = () => {
	const translations = useTranslations();
	return (
		<IntlProvider messages={translations.getTranslations()} locale={translations.locale} defaultLocale="en">
			<div className="App">
				<Header />
				<Main />
				<Languages />
				<MyProjects />
				<RemoteJob />
				<Contacts />
				<Footer />
			</div>
		</IntlProvider>
	)
}

export default App
