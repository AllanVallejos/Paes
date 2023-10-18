<template>
    <div class="row">

        <h2>{{ this.todoTienda.tipo }}</h2>

        <div class="col-10">

            <div v-for="(question, index) in arrayPreguntas" :key="index" class="card text-bg-light mb-4"
                style="min-width: 80%;">

                <h3 class="card-header" style="color: #c03a00e9;">Pregunta {{ index + 1 }}</h3>

                <p id="pregunta"> {{ question }} </p>



                <div v-for="(alternativa, alternativaIndex) in arrayAlternativas[index]" :key="alternativaIndex"
                    class="card-footer">

                    <input type="radio" :id="'alternativa' + questionIndex + alternativaIndex" :value="alternativa"
                        v-model="respuestas[questionIndex]" />
                    <label :for="'alternativa' + questionIndex + alternativaIndex">{{ alternativa.text }}</label>

                </div>

            </div>

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

import API from '@/api';
import { tienda } from '~/store/store';

export default {

    data() {

        return {

            arrayAlternativas: [],
            arrayPreguntas: [],
            respuestaUsuario: '',
            todoTienda: tienda(),
            n: 0,
            respuestas: [],
            alternativas: ['Alternativa 1', 'Alternativa 2', 'Alternativa 3', 'Alternativa 4'],
            tiempoRestante: 120,

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

        terminarEnsayo() {
            const preguntasSinResponder = this.respuestas.filter(respuesta => respuesta === '');

            if (preguntasSinResponder.length === 0) {

                alert("verificación completada, todo respondido");

            } else {

                alert("faltan preguntas por responder");

            }
        },

        pararEnsayo() {

            const tiempo = this.tiempoRestante
            alert("Se ha detenido el examen queda: " + this.tiempoRestanteFormateado)

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
                        this.arrayPreguntas = result.resultpreguntas
                        this.arrayAlternativas = result.resultalternativas
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
    },
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
</style>

