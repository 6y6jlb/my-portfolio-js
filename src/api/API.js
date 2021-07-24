import axios from "axios";

export const API = {
    sendContactsAndMessage: (contacts, name, message)=>{
        return axios.post('https://smtp-nodejs-portfolio-6y6jlb.herokuapp.com/sendMessage',{contacts,name,message})

    },
    getGitHubRepos:()=>{
        return axios.get('https://api.github.com/users/6y6jlb/repos')
    }
}