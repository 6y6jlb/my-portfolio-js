import axios from "axios";

export const API = {
    test: (contacts,name,message)=>{
        return axios.post('http://localhost:3010/sendMessage',{contacts,name,message})

    }
}