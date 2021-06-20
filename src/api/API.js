import axios from "axios";

export const API = {
    test: (contacts,name,message)=>{
        return axios.post('https://dashboard.heroku.com/apps/smtp-nodejs-portfolio-6y6jlb/sendMessage',{contacts,name,message})

    }
}