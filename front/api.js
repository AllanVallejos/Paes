import axios from 'axios'


const url = "http://localhost:8080/api/"
export default class API {
    static async addpregunta(data) {
        try {

            const res = await axios.post(url + "addpregunta", data)
            return res.data

        } catch (error) {

            return error.response.data

        }
    }

    static async addTemaForo(data){
        try {
            const res = await axios.post(url+"addTemaForo",data)
            return res.data
        } catch (error) {
            return error.response.data
        }
    }

    static async getTemasForo(data){
        try {
            const res = await axios.get(url+"getTemas")
            return res.data
        } catch (error) {
            return error.response.data
        }
    }

    static async addPuntajeCorte(data) {
        try {

            const res = await axios.post(url + "addPuntajeCorte", data)
            return res.data

        } catch (error) {

            return error.response.data

        }
    }

    static async validarUsuario(data) {
        try {
            const res = await axios.post(url + "verificarusuario", data)
            console.log("hola")
            console.log(res.data + "xd")
            return res.data

        } catch (error) {
            return error.response.data
        }
    }




    static async getpreguntabyid(data) {
        try {

            const res = await axios.get(url + "getpreguntabyid/" + data.preguntaid)
            console.log(data)
            return res.data

        } catch (error) {

            return error.response.data

        }
    }

    static async getpreguntas(data) {
        try {

            const res = await axios.get(url + "getpreguntas/" + data.categoria)
            console.log(res.data)
            return res.data

        } catch (error) {

            return error.response.data


        }
    }

    static async addUsuario(data) {
        try {
            const res = await axios.post(url + "addUsuario", data)
            return res.data
        } catch (error) {
            return error.response.data
        }
    }

    static async getNumeroUsuarios() {
        try {
            const res = await axios.get(url + "getNumeroUsuarios")
            return res.data
        } catch (error) {
            return error.response.data
        }
    }

    static async verificarUserName(data) {
        try {
            const res = await axios.post(url + "verificarUserName", data)
            return res.data
        } catch (error) {
            return error.response.data
        }
    }

    static async verificarEmail(data) {
        try {
            const res = await axios.post(url + "verificarEmail", data)
            return res.data
        } catch (error) {
            return error.response.data
        }
    }

    static async editarUsuario(data) {
        try {
            // Realiza una solicitud PUT a la ruta "editarUsuario" y envía los datos como el cuerpo de la solicitud.
            const res = await axios.put(url + "editarUsuario", data);

            // Comprueba si la respuesta contiene datos.
            if (res.data) {
                console.log(res.data);
                return res.data;
            } else {
                // Maneja el caso en el que la respuesta no contiene datos.
                console.error("La respuesta no contiene datos");
                return null; // O puedes retornar un valor adecuado en lugar de null
            }
        } catch (error) {
            // Maneja los errores de la solicitud.
            if (error.response && error.response.data) {
                console.error(error.response.data);
                return error.response.data;
            } else {
                console.error("Error de solicitud sin respuesta detallada");
                return null; // O puedes manejar el error de otra manera
            }
        }
    }


    static async updateEnsayos(data) {
        try {

            const res = await axios.put(url + "updateEnsayos", data)
            return res.data

        } catch (error) {

            return error.response.data

        }
    }
}