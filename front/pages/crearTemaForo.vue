<template>
    <div class="divPadre">
        <h1>Crear Tema</h1>
        <form>
        <label for="nombreTema">Nombre del Tema</label>
        <input type="text" id="nombreTema" name="nombreTema" v-model="nombreTema" required/>
        <v-btn @click="crear" required>
          Publicar Tema
        </v-btn>
        </form>
    </div>
</template>

<script>
    import API from '@/api';
    import Swal from 'sweetalert2'
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
                const temas = await API.getTemasForo() //Obtenemos los temas del foro ya creados
                const listaTemas = [] //Lista de nombres de temas
                if (this.nombreTema != "") {    // Si la entrada es no vacia
                    
                    for(let temon of temas){
                        listaTemas.push(temon.nombreTema)  //Agregamos los nombres de los temas a la lista
                    }
                    if(listaTemas.includes(this.nombreTema)){ //Revisamos si el tema ya existe
                        const confirmation = await Swal.fire({ //Si el tema ya existe se le pregunta al usuario si desea crearlo de todas formas
                            title: 'El tema ya existe, ¿desea crearlo de todas formas?',
                            showDenyButton: true,
                            confirmButtonText: `Crear`,
                            denyButtonText: `No crear`,
                        })
                        if(confirmation.isConfirmed){ //Si el usuario desea crearlo de todas formas
                            Swal.fire({
                                icon: 'success',
                                title: 'Tema creado',
                                text: ''
                            });
                            await API.addTemaForo(
                                {
                                    "nombreTema":this.nombreTema,
                                })
                        }else{
                            Swal.fire({
                                icon: 'error',
                                title: 'Error',
                                text: 'El tema no se ha creado'
                            }    
                          );
                        }
                    }else{      //Si el tema no existe entonces se crea
                        Swal.fire({
                            icon: 'success',
                            title: 'Tema creado',
                            text: ''
                        });
                    console.log(this.nombreTema)
                    await API.addTemaForo(
                        {
                            "nombreTema":this.nombreTema,
                        })
                    }
                } else{
                    Swal.fire({
                      icon: 'error',
                      title: 'Error',
                      text: 'El tema no puede estar vacio'
                    }    
                  );
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
    .divPadre form v-btn {
        background-color: #000000;
        color: #fff;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
    }
    .divPadre form v-btn:hover {
        background-color: #c03a00e9;
        color: #ffffff;
        border: 1px;
    }
</style>