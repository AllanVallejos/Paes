<template>
    <div style="display: grid; padding-top: 5%; place-items: center;">


        <div class="card" style="width: 70%;text-align: center;">

            <h1 class="card-header" style="color:#c03a00e9;">Subir puntaje de corte</h1>

            <div style="display: grid; place-items: center;">

                <div class="relleno" style="padding-top: 2%;">

                    <v-select v-model="seleccionarUniversidad" label="Universidad"
                        :items="['Universidad de Talca', 'Universidad de Chile', 'Universidad Diego Portales']"
                        variant="outlined"></v-select>

                </div>

                <div class="relleno">

                    <v-select v-model="seleccionarCarrera" label="Carrera" :items="['Computación', 'Medicina', 'Electrica']"
                        variant="outlined"></v-select>

                </div>

                <div class="relleno">

                    <v-text-field v-model="corte" label="Puntaje" variant="outlined"></v-text-field>

                </div>
            </div>

            <div class="card-footer">
                <button @click="publicarPuntajeCorte" class="botonDePublicar">
                    Agregar puntaje
                </button>
            </div>

        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2'
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

            const numCorte = parseFloat(this.corte);

            if (!isNaN(numCorte) && numCorte >= 0 && numCorte <= 1000) {

                Swal.fire({
                    icon: 'success',
                    title: 'Puntaje subido con éxito',
                    text: '',
                });

                this.crearPuntajeCorte();
                this.$router.push({ path: "/subirPuntaje" });

            } else {

                Swal.fire({
                    icon: 'error',
                    title: 'Error en el puntaje',
                    text: 'El puntaje debe ser un número entre 0 y 1000.',
                });
            }
        },

        async crearPuntajeCorte() {
            const respuesta = await API.addPuntajeCorte(
                {
                    "universidad": this.seleccionarUniversidad,
                    "carrera": this.seleccionarCarrera,
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