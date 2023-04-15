import axios from "axios"

export const API = {
	sendContactsAndMessage: ({senderContacts, senderName, body}) => {
		return axios.post("https://lbas.website:5000/api/notification/email/send", {
			senderContacts,
			senderName,
			body,
		})
	},
	getGitHubRepos: () => {
		return axios.get("https://api.github.com/users/6y6jlb/repos")
	},
	getRepoLanguges(repo) {
		return axios.get(`https://api.github.com/repos/6y6jlb/${repo}/languages`)
	},
}
