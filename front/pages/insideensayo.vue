<template>
    <div style="min-height: 86vh; position: relative; padding-bottom: 5rem;">
      <!-- Aquí debería ir un temporizador, hay que ver algun framework que lo tenga -->
      <h2>Alternativas</h2>
      <div v-for="(index, questionIndex) in n" :key="questionIndex">
        <h3>Pregunta {{ questionIndex + 1 }}</h3>
  
        <p id="pregunta"></p> <!-- Aquí debería ir la pregunta que queremos cargar -->
  
        <div v-for="(alternativa, alternativaIndex) in alternativas" :key="alternativaIndex">
          <input type="radio" :id="'alternativa' + questionIndex + alternativaIndex" :value="alternativa" v-model="respuestas[questionIndex]" />
          <label :for="'alternativa' + questionIndex + alternativaIndex">{{ alternativa }}</label>
        </div>
      </div>
      
      <button @click="terminarEnsayo">Terminar Ensayo</button>
    </div>
  </template>
  
  <script>
  import API from '@/api';
  export default {
    data() {
      return {
        respuestaUsuario: '',
        n: 4, // Pongan aquí la cantidad de preguntas
        respuestas: Array(4).fill(''),//la cantidad de respuestas totales debe ser igual a la cantidad de preguntas totales
        alternativas: ['Alternativa 1', 'Alternativa 2', 'Alternativa 3', 'Alternativa 4'],
      };
    },
    methods: {
      terminarEnsayo() {
        const preguntasSinResponder = this.respuestas.filter(respuesta => respuesta === '');
        
        if (preguntasSinResponder.length === 0) {
          // se responden todas las preguntas
          alert("verificación completada, todo respondido");
        } else {
          // faltan preguntas
          alert("faltan preguntas por responder");
        }
      },
      async cargarPregunta(){
        try{
            const respuesta= await API.getPregunta(id);
            console.log(respuesta);
        }catch (error){
            console.error(error);
        }
        }

    },
  };
  </script>
  