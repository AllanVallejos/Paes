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

    static async addtemaForo(data){
        try {

            const res = await axios.post(url+"addTemaForo",data)
            return res.data

        } catch (error) {

            return error.response.data

        }
    }

    static async validarUsuario(data){
        try {
            const res = await axios.post(url+"verificarusuario",data)
            return res
        } catch (error) {
            return error.response.data
        }
    }

    static async getpreguntabyid(data){
        try {

            const res = await axios.get(url+"getpreguntabyid/"+data.preguntaid)
            console.log(data)
            return res.data

        } catch (error) {

            return error.response.data

        }
    }
    
    static async getpreguntas(data){
        try {

            const res = await axios.get(url+"getpreguntas/"+data.categoria)
            console.log(data)
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