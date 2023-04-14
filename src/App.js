import { useEffect } from "react"
import { IntlProvider } from "react-intl"
import "./App.scss"
import Contacts from "./contacts/Contacts"
import Footer from "./footer/Footer"
import Header from "./header/Header"
import Languages from "./languages/Languages"
import { getPreselectedLanguage } from "./localStorage/language"
import Main from "./main/Main"
import MyProjects from "./myProjects/MyProjects"
import RemoteJob from "./remoteJob/RemoteJob"
import { useTranslations } from "./state/state"

const App = () => {
	
	useEffect(()=>{
		
		const preselectedLanguage = getPreselectedLanguage();
		translations.update(preselectedLanguage);
		
	},[])
	
	const translations = useTranslations()
	
	return (
		<IntlProvider
			messages={translations.getTranslations()}
			locale={translations.getLocale()}
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
