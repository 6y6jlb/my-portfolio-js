export const reducer = (state, action) => {
	switch (action.type) {
		case "SET_PROJECTS":
			return { ...state, projects: [...state.projects, ...action.payload] }
		case "LOADED":
			return { ...state, loading: false }
		case "LOADING":
			return { ...state, loading: true }
		default:
			return state
	}
}
