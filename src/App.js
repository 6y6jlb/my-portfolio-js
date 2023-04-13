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
import { LANGUAGES } from "./common/config/config"
import { useEffect } from "react"
import { getPreselectedLanguage } from "./localStorage/language"

const App = () => {
	const translations = useTranslations()

	useEffect(()=>{
		
		const preselectedLanguage = getPreselectedLanguage();
		translations.update(preselectedLanguage);

	},[])

	return (
		<IntlProvider
			messages={translations.getTranslations()}
			locale={translations.getLocale()}
			defaultLocale={LANGUAGES.EN}
		>
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
