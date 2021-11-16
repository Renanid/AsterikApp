
import axios from "axios"
import api from "./api"

class UsuarioService{

    async login(data){
        return axios({
            url:"https://asteriskapi.herokuapp.com/login",
            method: "POST",
            timeout: 5000,
            data: data,
            headers: {
                Accept: "application/json"
            }
        }).then((response) => {
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }
}

const usuarioService = new UsuarioService()

export default usuarioService