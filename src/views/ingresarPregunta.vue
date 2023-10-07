<template>
    <div>
      <form @submit.prevent="agregarPregunta">
        <div class="form-group">
          <label for="pregunta">Pregunta:</label>
          <input type="text" id="pregunta" v-model="nuevaPregunta.pregunta" required>
        </div>
        <div class="form-group">
          <label for="opcion_a">Opción A:</label>
          <input type="text" id="opcion_a" v-model="nuevaPregunta.opcion_a" required>
        </div>
        <div class="form-group">
          <label for="opcion_b">Opción B:</label>
          <input type="text" id="opcion_b" v-model="nuevaPregunta.opcion_b" required>
        </div>
        <div class="form-group">
          <label for="opcion_c">Opción C:</label>
          <input type="text" id="opcion_c" v-model="nuevaPregunta.opcion_c" required>
        </div>
        <div class="form-group">
          <label for="opcion_d">Opción D:</label>
          <input type="text" id="opcion_d" v-model="nuevaPregunta.opcion_d" required>
        </div>
        <button type="submit">Agregar Pregunta</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { supabase } from '../src/supabase/supabase';
  
  export default {
    setup() {
      const nuevaPregunta = ref({
        pregunta: '',
        opcion_a: '',
        opcion_b: '',
        opcion_c: '',
        opcion_d: '',
      });
  
      const agregarPregunta = async () => {
        try {
          const { data, error } = await supabase
            .from('preguntas') // Nombre de tu tabla
            .insert([
              {
                pregunta: nuevaPregunta.value.pregunta,
                opcion_a: nuevaPregunta.value.opcion_a,
                opcion_b: nuevaPregunta.value.opcion_b,
                opcion_c: nuevaPregunta.value.opcion_c,
                opcion_d: nuevaPregunta.value.opcion_d,
              },
            ]);
  
          if (error) {
            throw error;
          }
  
          // Limpiar el formulario después de agregar la pregunta
          nuevaPregunta.value = {
            pregunta: '',
            opcion_a: '',
            opcion_b: '',
            opcion_c: '',
            opcion_d: '',
          };
  
          console.log('Pregunta agregada con éxito:', data);
        } catch (error) {
          console.error('Error al agregar la pregunta:', error.message);
        }
      };
  
      return {
        nuevaPregunta,
        agregarPregunta,
      };
    },
  };
  </script>