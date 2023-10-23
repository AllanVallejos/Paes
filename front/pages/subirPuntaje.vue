<template>
    <div style="display: grid; padding-top: 5%; place-items: center;">


        <div class="card" style="width: 70%;text-align: center;">

            <h1 class="card-header" style="color:#c03a00e9;">Subir puntaje de corte</h1>

            
            <div class="relleno" style="padding-top: 2%;">

                <v-select v-model="seleccionarUniversidad" label="Universidad" :items="['Universidad de talca', 'Universidad de Chile','Universidad Diego Portales']"
                    variant="outlined"></v-select>

            </div>

            <div class="relleno">

                <v-select v-model="seleccionarCarrera" label="Carrera" :items="['Computaciom', 'Medicina','Electrica']"
                    variant="outlined"></v-select>

            </div>

            <div class="relleno">

                <v-text-field v-model="corte" label="Puntaje" variant="outlined"></v-text-field>
 
            </div>

            <div class="card-footer">
                <button @click="publicarPregunta" class="botonDePublicar">
                    Agregar puntaje
                </button>
            </div>

            <p v-if="confirmationMessage" class="mensajePop">
                {{ confirmationMessage }}
            </p>
        </div>
    </div>
</template>

<script>
import API from '@/api';
export default {

    data() {
        return {
            seleccionarUniversidad: "", // Para almacenar la categoría seleccionada
            seleccionarCarrera: "", // Texto de la pregunta
            corte: 0, // Arreglo para almacenar las alternativas
            confirmationMessage: "", // Mensaje de confirmación
        };
    },
    methods: {

        publicarPuntajeCorte() {
            this.confirmationMessage = "El puntaje se ha agregado con exito";
            this.crearPregunta()
        },


        async crearPuntajeCorte() {
            const respuesta = await API.addPuntajeCorte(
                {
                    "seleccionarUniversidad": this.seleccionarUniversidad,
                    "seleccionarCarrera": this.seleccionarCarrera,
                    "corte": this.corte,
                }
            )

        },
    }
};
</script>

<style>

.terminar {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 5px;
    font-family: Arial, sans-serif;
}

.relleno {
    margin-bottom: 20px;
    width: 80%;
    
    place-items: center;
}

.botonDePublicar {
    display: block;
    background-color: #dc2f02;
    color: #ffff;
    border: none;
    margin: 0 auto;
    padding: 10px 15px;
    cursor: pointer;
}

.mensajePop {
    text-align: center;
    font-weight: bold;
    color: #000000;
}

</style>
