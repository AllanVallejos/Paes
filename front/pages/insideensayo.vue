<template>
    <div class="row">

        <h2> Ensayo</h2>
        <!-- Hay un error en pregunta @alternativaactualizada, no estoy seguro de que es -->
        <div class="col-10" id="contenedor">
            <pregunta @alternativaActualizada='actualizacionPregunta' :pregunta="question" :indice="index"
                v-for="(question, index) in ensayo" />
        </div>

        <div class="col-2" style="background-color: white;">

            <div class="sticky-text" style="text-align: center;">
                <h3 style="padding-bottom: 5%;">Tiempo restante: <br> {{ tiempoRestanteFormateado }}</h3>

                <button class="btn btn-warning" @click="pararEnsayo">Parar Ensayo</button>
                <br>
                <button class="btn btn-danger" @click="terminarEnsayo">Terminar Ensayo</button>

            </div>

        </div>

    </div>
</template>

<script>

import Swal from 'sweetalert2'
import API from '@/api';

import { tienda } from '~/store/store';
import pregunta from "./pregunta.vue"

export default {

    data() {

        return {
            ensayo: [],
            arrayAlternativas: [],
            arrayPreguntas: [],
            respuestaUsuario: '',
            todoTienda: tienda(),
            n: 0,
            respuestas: [],
            alternativas: ['Alternativa 1', 'Alternativa 2', 'Alternativa 3', 'Alternativa 4'],
            tiempoRestante: 0,

        };
    },

    computed: {

        tiempoRestanteFormateado() {

            const horas = Math.floor(this.tiempoRestante / 3600);
            const minutos = Math.floor((this.tiempoRestante % 3600) / 60);
            const segundos = this.tiempoRestante % 60;
            return `${horas}h ${minutos}m ${segundos}s`;

        },
    },

    methods: {
        inicioEnsayo() {

            this.Asignatura = this.todoTienda.tipo
            this.n = parseInt(this.todoTienda.paginas)
            this.tiempoRestante = this.n * 120

            console.log(this.n)

            this.respuestas = Array(this.n).fill('')
        },

        actualizacionPregunta() {

            console.log(this.ensayo)

        },

        terminarEnsayo() {

            const preguntasSinResponder = this.respuestas.filter(respuesta => respuesta === '');

            /* if (preguntasSinResponder.length === 0) {
                alert("verificación completada, todo respondido");

            } else {
                alert("faltan preguntas por responder");
            } */
        },

        async pararEnsayo() {
            const tiempo = this.tiempoRestante
            const idusuario = this.todoTienda.usuario._id
            const ensayo = this.ensayo
            try {
                await API.updateEnsayos({ "_id": idusuario, "ensayoPendiente": ensayo }).then((result) => {
                    console.log(result);
                    console.log(this.todoTienda.usuario._id)
                    this.ensayo = result

                    Swal.fire({
                        icon: 'warning',
                        title: 'Se ha detenido el examen',
                        text: 'Queda:'+ this.tiempoRestanteFormateado,
                    })
                })

                    .catch((err) => {

                        console.log(err)

                    });
            }
            catch (error) {

                console.error(error);

            }
        },

        actualizarTiempoRestante() {

            if (this.tiempoRestante > 0) {

                this.tiempoRestante--;

            } else {

                alert("Se ha acabado el tiempo")

            }
        },

        async cargarPregunta() {

            try {
                await API.getpreguntas({ "categoria": this.todoTienda.tipo })

                    .then((result) => {
                        console.log(result);
                        this.ensayo = result
                    })

                    .catch((err) => {

                        console.log(err)

                    });


            } catch (error) {

                console.error(error);

            }
        }
    },

    mounted() {
        this.inicioEnsayo();
        setInterval(this.actualizarTiempoRestante, 1000);
        this.cargarPregunta()
    },
    components: { pregunta }
};

</script>

<style scoped>
.sticky-text {
    position: -webkit-sticky;
    position: sticky;
    top: 20px;
    background-color: white;
    padding: 10px;
    border: 1px solid #ccc;
}

#contenedor {
    display: grid;
    position: relative;
}
</style>

~/store