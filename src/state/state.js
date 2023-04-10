import { createContext } from "react"

export const initialState = {
	projects: {
		data: [],
		loading: false,
		loaded: false,
	},
	languages: {
		data: {},
		loading: false,
		loaded: false,
	},
	errors: [],
}

export const StateProvider = createContext(null)
