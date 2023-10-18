<template>
    <div class="row">

        <h2>Alternativas</h2>

        <div class="col-10">

            <div v-for="(index, questionIndex) in n" :key="questionIndex" class="card text-bg-light mb-4"
                style="min-width: 80%;">

                <h3 class="card-header" style="color: #c03a00e9;">Pregunta {{ questionIndex + 1 }}</h3>

                <p id="pregunta"></p>

                <div v-for="(alternativa, alternativaIndex) in alternativas" :key="alternativaIndex" class="card-footer">

                    <input type="radio" :id="'alternativa' + questionIndex + alternativaIndex" :value="alternativa" v-model="respuestas[questionIndex]" />
                    <label :for="'alternativa' + questionIndex + alternativaIndex">{{ alternativa }}</label>

                </div>

            </div>

        </div>

        <div class="col-2" style="background-color: #062028;">

            <div class="sticky-text" style="text-align: center;">
                <h3>Tiempo restante: {{ tiempoRestante }}</h3>
                <button class="" @click="terminarEnsayo">Terminar Ensayo</button>
                <button class="" @click="pararEnsayo">Parar Ensayo</button>
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
            respuestaUsuario: '',
            todoTienda: tienda(),
            n: 0,
            respuestas: [],
            alternativas: ['Alternativa 1', 'Alternativa 2', 'Alternativa 3', 'Alternativa 4'],
            tiempoRestante: 120, // Establece el tiempo inicial en segundos
        };
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

            alert("Se ha detenido el examen quedan " + tiempo + " segundos")
        },

        actualizarTiempoRestante() {
            if (this.tiempoRestante > 0) {
                this.tiempoRestante--; // Reduce el tiempo en 1 segundo
            } else {

            }
        },

        async cargarPregunta(){
            try{
                const respuesta= await API.getpreguntabyid({"preguntaid":"6524526dbdd07e179d57fb97"});
                console.log(respuesta);
            }catch (error){
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
    top: 20px; /* Ajusta la posición vertical según tu diseño */
    background-color: white;
    padding: 10px;
    border: 1px solid #ccc;
}
</style>  
