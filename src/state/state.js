import { createContext } from "react"

export const initialState = {
    loading: false,
    projects : [],
    errors: []
}
  
export const StateProvider = createContext(null)