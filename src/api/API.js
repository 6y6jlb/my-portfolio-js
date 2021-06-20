import axios from "axios";

export const API = {
    test: (contacts,name,message)=>{
        return axios.post('https://smtp-nodejs-portfolio-6y6jlb.herokuapp.com/sendMessage',{contacts,name,message})

    }
}