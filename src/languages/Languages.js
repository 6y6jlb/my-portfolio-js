import { useLanguagesStore } from "../state/state"

export default function Languages() {
	const languages = useLanguagesStore()
console.log(languages.getChartData())
	return <div></div>
}
