import axios from 'axios'


const url="http://localhost:8080/api/"
export default class API{
    static async addpregunta(data){
        try {
            const res = await axios.post(url+"addpregunta",data)

            return res.data
        } catch (error) {
            return error.response.data
        }
    }
    static async addusuario(data){
        try {
            const res = await axios.post(url+"addusuario",data)

            return res.data
        } catch (error) {
            return error.response.data
        }
    }
    

}