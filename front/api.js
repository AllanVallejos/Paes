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

    static async addPuntajeCorte(data){
        try {

            const res = await axios.post(url+"addPuntajeCorte",data)
            return res.data

        } catch (error) {

            return error.response.data

        }
    }

    static async validarUsuario(data){
        try {
            const res = await axios.post(url+"verificarusuario",data)
            console.log("hola")
            console.log(res.data+"xd")
            return res.data

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
            console.log(res.data)
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

    static async updateEnsayos(data){
        try {

            const res = await axios.post(url+"updateEnsayo",data)
            return res.data

        } catch (error) {

            return error.response.data

        }
    }
}