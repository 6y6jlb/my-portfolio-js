export const reducer = (state, action) => {
	switch (action.type) {
		case "SET_PROJECTS":
			return { ...state, projects: { ...state.projects, data: action.payload } }
		case "SET_LANGUAGES":
			return { ...state, languages: { ...state.languages, data: action.payload } }
		case "LOADING":
			return {
				...state,
				[action.payload.directory]: { ...state[action.payload.directory], loading: action.payload.value },
			}

		default:
			return state
	}
}
