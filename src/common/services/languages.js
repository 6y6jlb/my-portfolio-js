import { API } from "../../api/API"


export const getAllLanguagesGitHub = async (repos) => {
	const result = {}
	try {
		repos.forEach((repo) => {
			API.getRepoLanguges(repo).then((response) => {
				const data = response.data
				for (const element in data) {
					if (result[element]) {
						result[element] = data[element] + result[element]
					} else {
						result[element] = data[element]
					}
				}
			})
		})
	} catch (error) {
	} finally {
		return result
	}
}
