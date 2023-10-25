<template>
    {{ this.pregunta.pregunta }}
    <v-radio-group v-model="respuestaSeleccionada">
        <v-radio style="padding-bottom: 1%;" v-for="(alternativa, index) in this.pregunta.alternativas"
            :class="index > 0 ? 'mt-n10' : ''" :value="alternativa.text" :key="index + 'box'" @change="onChange(index)">
            <template v-slot:label>
                <p class="subtitle-1 black--text mt-4">{{ alternativa.text }}</p>
            </template>
        </v-radio>
    </v-radio-group>

    <!-- <h3 class="card-header" style="color: #c03a00e9;">Pregunta {{ index + 1 }}</h3>

                <p id="pregunta"> {{ question.pregunta }} </p>



                <div v-for="(alternativa, alternativaIndex) in question.alternativas" :key="alternativaIndex"
                    class="card-footer">

                    <input type="checkbox" id="cbox2" value="second_checkbox" />
                    <label for="cbox2">Este es mi segundo checkbox</label>
                    <label :for="'alternativa' + questionIndex + alternativaIndex">{{ alternativa.text }}</label>

                </div> 
 -->
</template>

<script>

import API from '@/api';
import { tienda } from '~/store/store';

export default {

    data() {

        return {
            respuestaSeleccionada: ""
        };
    },




    methods: {

        onChange(index) {
            if (index == 0) {
                this.pregunta.respuestaUsuario = 'A'
            }
            if (index == 1) {
                this.pregunta.respuestaUsuario = 'B'
            }
            if (index == 2) {
                this.pregunta.respuestaUsuario = 'C'
            }
            if (index == 3) {
                this.pregunta.respuestaUsuario = 'D'
            }
            this.$emit('alternativaActualizada') 
        }
    },

    mounted() {

    },

    props: {
        pregunta: Object,
        indice: Number,

    }
};

</script>

<style scoped></style>

~/store