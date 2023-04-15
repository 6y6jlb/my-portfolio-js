import { create } from "zustand"

export const useErrorsStore = create((set) => ({
	data: [],
	removeAll: () => set({ data: [] }),
}))
