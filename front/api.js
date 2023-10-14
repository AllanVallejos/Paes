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

    async getPregunta(id) {
        try {
          const response = await fetch(`/api/getpregunta/${id}`); // Suponiendo que tu ruta sea /api/getpregunta/:id
          if (!response.ok) {
            throw new Error('Error al obtener la pregunta');
          }
          return await response.json();
        } catch (error) {
          throw error;
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