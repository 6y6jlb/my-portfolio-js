import Chart from "react-apexcharts"
import { Audio, } from "react-loader-spinner"
import Title from "../common/components/title/Title"
import containerStyle from "../common/styles/Container.module.scss"
import { useLanguagesStore } from "../state/state"
import style from "./Languages.module.scss"
import chartOptions from "./chart"

export default function Languages() {
	const languages = useLanguagesStore()
	const chartData = languages.getChartData()

	return (
		<div id={"languages"} className={style.block}>
			<div className={`${containerStyle.mainContainer} ${style.container}`}>
				<Title even={false} title={"Languages"} />
				<div className={style.chart}>
					{Object.keys(chartData).length > 0 ? (
						<Chart
							options={{ ...chartOptions, labels: Object.keys(chartData) }}
							series={Object.values(chartData)}
							type="donut"
							width="580"
						/>
					) : (
						<Audio
							height="80"
							width="80"
							radius="9"
							color="grey"
							ariaLabel="loading"
							wrapperStyle
							wrapperClass
						/>
					)}
				</div>
			</div>
		</div>
	)
}
