import { useLanguagesStore } from "../state/state"

export default function Languages() {
	const languages = useLanguagesStore()
console.log(languages.data)
	return <div></div>
}
