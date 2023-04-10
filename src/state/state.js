import { createContext } from "react"

export const initialState = {
	projects: {
		data: [],
		loading: false,
	},
	languages: {
		data: {},
		loading: false,
	},
	errors: [],
}

export const StateProvider = createContext(null)
