<template>
    <!-- Tu componente Vue template -->
    <div>
      <button @click="cargarPregunta">Cargar Pregunta</button>
    </div>
  </template>
  
  <script>
  import API from '@/api';
  
  export default {
    methods: {
      async cargarPregunta() {
        try {
          const id = '652af85b5aa6ea87983dd6ae'; // id de la pregunta
          const respuesta = await API.getPregunta(id);
          console.log(respuesta);
        } catch (error) {
          console.error(error);
        }
      },
    },
  };
  </script>
  