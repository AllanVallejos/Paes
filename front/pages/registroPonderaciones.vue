<template>
    <div class="formPonderaciones">
  <div class="ponderaciones">
    <h1>Ponderaciones de Universidades y Carreras</h1>
    <div class="relleno">
      <label for="universidad">Seleccionar Universidad:</label>
      <select id="universidad" class="base" v-model="seleccionarUniversidad">
        <option value="Universidad de Talca">Universidad de Talca</option>
        <option value="Universidad de Chile">Universidad de Chile</option>
        <option value="Universidad de Concepción">Universidad de Concepción</option>
      </select>
    </div>
    <div class="relleno">
      <label for="carrera">Seleccionar Carrera:</label>
      <select id="carrera" class="base" v-model="seleccionarCarrera">
        <option value="Tecnología Médica">Tecnología Médica</option>
        <option value="Ingeniería Civil en Construcción">Ingeniería Civil en Construcción</option>
        <option value="Psicología">Psicología</option>
      </select>
    </div>
  
    <h3>Porcentajes:</h3>
        <div class="porcentaje-input">
            <label for="porcentaje">NEM: </label>
            <input
          
            type="number"
            min="1"
            max="100"
            v-model="nem"
            />
        </div>
        <div class="porcentaje-input">
            <label for="porcentaje">Ranking: </label>
            <input
            
            type="number"
            min="1"
            max="100"
            v-model="ranking"
            />
        </div>
        <div class="porcentaje-input">
            <label for="porcentaje">Comprensión Lectora: </label>
            <input
            type="number"
            min="1"
            max="100"
            v-model="comprensionLectora"
            />
        </div>

        <div class="porcentaje-input">
            <label for="porcentaje">Competencia Matemática 1: </label>
            <input
            type="number"
            min="1"
            max="100"
            v-model="competenciaMatematica1"
            />
        </div>
        <div class="porcentaje-input">
            <label for="porcentaje">Competencia Matemática 2: </label>
            <input

            type="number"
            min="1"
            max="100"
            v-model="competenciaMatematica2"
            />
        </div>
        <div class="porcentaje-input">
            <label for="porcentaje">Ciencias: </label>
            <input
 
            type="number"
            min="1"
            max="100"
            v-model="ciencias"
            />
        </div>
        <div class="porcentaje-input">
            <label for="porcentaje">Historia Y CS. Sociales: </label>
            <input

            type="number"
            min="1"
            max="100"
            v-model="historia"
            />
        </div>

        
        
    <div class="terminar">
      <button @click="publicarPonderacion" class="botonDePublicar">
        Publicar Ponderaciones
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
        "universidad":this.seleccionaruniversidad,
        "carrera": this.seleccionarCarrera,
        "nem": this.nem,
        "ranking":this.ranking,
        "comprensionLectora":this.comprensionLectora,
        "competenciaMatematica1":this.competenciaMatematica1,
        "competenciaMatematica2":this.competenciaMatematica2,
        "ciencias":this.ciencias,
        "historia":this.historia,
    };
  },
  methods: {
    publicarPonderacion() {
      Swal.fire({
            icon: 'success',
            title: 'Ponderación subida con éxito',
            text: '',
                        })
      this.crearPonderacion()
      this.$router.push({ path: "/registroPonderaciones" });
    },
    async crearPonderacion(){
      const respuesta= await API.addporcentajePonderacion(
        {
          "universidad":this.seleccionarUniversidad,
          "carrera": this.seleccionarCarrera,
          "nem": this.nem,
          "p_ranking":this.ranking,
          "comp_lectora":this.comprensionLectora,
          "mat_m1":this.competenciaMatematica1,
          "mat_m2":this.competenciaMatematica2,
          "ciencias":this.ciencias,
          "historia":this.historia,

        }
      )
  
    },
  }
  };
  </script>
  
  <style>
  
    .formPonderaciones {
    margin-top: 10px;
    margin-bottom: 70px;
    }
  
  .ponderaciones {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border: 1px solid #000000;
  border-radius: 5px;
  font-family: Arial, sans-serif;
  }
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
  }
  
  label {
  font-weight: bold;
  }
  
  .base {
  width: 90%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #420707;
  border-radius: 5px;
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
  .porcentaje-input {
  display: flex;
  align-items: center;
}

.porcentaje-input input {
  width: 60px;
  padding: 1px;
  border: 1px solid #420707;
  border-radius: 20px;
  margin-left: 10px;
  margin-top: 5px;
}



  </style>
  