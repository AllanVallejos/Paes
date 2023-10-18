<template>
    <div class="divPadreSubirPreguntas">
  <div class="SubirPregunta">
    <h1>Banco de preguntas PAES</h1>
    <div class="relleno">
      <label for="categoria">Seleccionar Categoría:</label>
      <select id="categoria" class="base" v-model="seleccionarCategoria">
        <option value="CL">Competencia Lectora</option>
        <option value="M1">Competencia Matemática M1</option>
        <option value="M2">Competencia Matemática M2</option>
        <option value="HC">Historia y Ciencias Sociales</option>
        <option value="CN">Ciencias</option>
        <option value="CF">Fisica</option>
        <option value="CQ">Quimica</option>
        <option value="CB">Biologia</option>
      </select>
    </div>

    <div class="relleno">
      <label for="pregunta">Pregunta:</label>
      <textarea id="pregunta" class="base" v-model="pregunta"></textarea>
    </div>

    <div class="alternativas">
      <div
        class="alternativa"
        v-for="(cantidadAlt, i) in alternativas"
        :key="i"
      >
        <label :for="'alternativa' + i"
          >Alternativa {{ String.fromCharCode(65 + i) }}:
        </label>
        <input
          :id="'alternativa' + i"
          type="text"
          class="base"
          v-model="cantidadAlt.text"
        />
        <button @click="quitarAlt(i)" class="quitarAlt">
          Eliminar
        </button>
      </div>
      <button
        @click="agregarAlt"
        v-if="alternativas.length < 5"
        class="agregarAlt"
      >
        Agregar Alternativa
      </button>
      <div class="alternativaCorrecta">
        <label>Alternativa Correcta: </label>
        <select id="correcta" v-model="correcta">
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="E">E</option>
        </select>
      </div>
    </div>
    <div class="terminar">
      <button @click="publicarPregunta" class="botonDePublicar">
        Publicar Pregunta
      </button>
    </div>

    <p v-if="confirmationMessage" class="mensajePop">
      {{ confirmationMessage }}
    </p>
  </div>
</div>
</template>

<script>
import API from '@/api';
export default {
  
  data() {
    return {
      seleccionarCategoria: "", // Para almacenar la categoría seleccionada
      pregunta: "", // Texto de la pregunta
      alternativas: [], // Arreglo para almacenar las alternativas
      confirmationMessage: "", // Mensaje de confirmación
      correcta: "" //Alternativa correcta
    };
  },
  methods: {
    agregarAlt() {
      if (this.alternativas.length < 5) {
        //Hasta 5 alternativas
        this.alternativas.push({ text: "" });
      }
    },
    quitarAlt(i) {
      this.alternativas.splice(i, 1);
    },
    publicarPregunta() {
      this.confirmationMessage = "Pregunta publicada con éxito.";
      this.crearPregunta()
    },
    async crearPregunta(){
      const respuesta= await API.addpregunta(
        {
          "categoria":this.seleccionarCategoria,
          "pregunta": this.pregunta,
          "alternativas": this.alternativas,
          "correcta":this.correcta,
          
        }
      )

    },
  }
};
</script>

<style>

    .divPadreSubirPreguntas {
    margin-top: 10px;
    margin-bottom: 70px;
    }

.SubirPregunta {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
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
.alternativaCorrecta {
  max-width: 600px;

  margin: 20px auto 0;
  background-color: #f5f5f5;
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
  border: 1px solid #ccc;
  border-radius: 5px;
}

.alternativas {
  margin-top: 20px;
}

.alternativa {
  margin-bottom: 10px;
}

.quitarAlt {
  background-color: #dc3545;
  color: #ffff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.agregarAlt {
  background-color: #ffba08;
  color: #ffff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
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
