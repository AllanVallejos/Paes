<template>
    <div class="divPadre">
        <h1>Crear Tema</h1>
        <form>
        <label for="nombreTema">Nombre del Tema</label>
        <input type="text" id="nombreTema" name="nombreTema" v-model="nombreTema" required/>
        <button @click="crear" type="submit">
            Publicar Tema
        </button>
        </form>
    </div>
</template>

<script>
    import API from '@/api';
    export default {
        data() {
            return {
                nombreTema: "" //Nombre de tema ingresado por el usuario
            };
        },
        methods: {
            crear() {
                this.confirmationMessage = "Tema creadoo"; //Aun no se como hacer que se muestre un mensaje de confirmacion
                this.crearTema()
            },
            async crearTema(){
                if (this.nombreTema != "") {    // Si la entrada es no vacia
                    const temas = await API.getTemasForo() //Obtenemos los temas del foro ya creados
                    const listaTemas = [] //Lista de nombres de temas
                    for(let temon of temas){
                        listaTemas.push(temon.nombreTema)  //Agregamos los nombres de los temas a la lista
                    }
                    alert("llego")
                    if(listaTemas.includes(this.nombreTema)){ //Revisamos si el tema ya existe
                        const confirmation = confirm("El tema ya existe, ¿desea crearlo de todas formas?")
                        if(confirmation){ //El usuario confirma que desea crear el tema de todas formas
                            await API.addTemaForo(
                            {
                                "nombreTema":this.nombreTema,
                            })
                        }
                    }else{      //Si el tema no existe entonces se crea
                        await API.addTemaForo(
                        {
                            "nombreTema":this.nombreTema,
                        })
                    }
                }
                
            },
        }
    };
</script>

<style scoped>
    .divPadre {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 50vh;
    }
    .divPadre h1 {
        margin-bottom: 50px;
    }
    .divPadre form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .divPadre form label {
        margin-bottom: 10px;
    }
    .divPadre form input {
        width: 100%;
        padding: 10px;
        margin-bottom: 15px;
        border: 1px solid #000000;
        border-radius: 5px;
        
    }
    .divPadre form button {
        background-color: #000000;
        color: #fff;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
    }
    .divPadre form button:hover {
        background-color: #fff;
        color: #000000;
        border: 1px solid #000000;
    }
</style>