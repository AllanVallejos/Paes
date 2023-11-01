<template>
    
  </template>
  
  <script>
      import API from '@/api';
      export default {
          
          name: 'Ensayos',
          data() {
              return {
                  temas : [],
              };
          },
          async mounted() {
              this.temas = await API.getEnsayos()
          }
      };
  </script>
  
  <style scoped>
      .divPadre {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-left: 2%;
          padding-right: 2%;
          margin-bottom: 50px;
      }
      .divPadre h1 {
          margin-bottom: 50px;
          margin-top: 50px;
      }
      .divPadre h2 {
          margin-bottom: 50px;
      }
      .divPadre .listaTemas {
          background-color: #c03a00e9;
          border-radius: 5px;
          padding: 10px;
          margin-bottom: 15px;
          color: aliceblue;
          display: flex;
      }
      .divPadre .listaTemas img {
          margin-right: 10px;
          width: 50px;
          height: 50px;
      }
      .divPadre h3 {
          color: aliceblue;
      }
      .tema {
          padding-top: 8px;
      }
  </style>
  