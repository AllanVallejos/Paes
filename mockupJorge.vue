<template>
    <div style="display: flex; align-items: center;">
        <img src="./assets/tick_rojo.png" alt="tick_rojo_low_res" width="40" height="40">
        <h1 style="margin-left: 10px;">Ensayo Paes</h1>
    </div>
    <hr> 
    <div class="login-container">
      <h1>Iniciar sesión</h1>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="email">Correo:</label>
          <input type="text" id="username" v-model="username" required>
        </div>
        <div class="form-group">
          <label for="password">Contraseña:</label>
          <input type="password" id="password" v-model="password" required>
          <a href="">He olvidado mi contraseña</a>
        </div>
        <button type="submit" style="background-color: rgb(247,101,64); color: white;">Inigresar</button>
      </form>
    </div>
    <div>
    <footer>
        <div class="logos">
            <img src="./assets/ig_logo.png" alt="Logo 1">
            <img src="./assets/tw_logo.png" alt="Logo 2">
            <img src="./assets/fb_logo.png" alt="Logo 3">
        </div>
    </footer>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      login() {
        if (this.username === 'usuario' && this.password === 'contraseña') {
          alert('Inicio de sesión exitoso');
        } else {
          alert('Inicio de sesión fallido. Comprueba tus credenciales.');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .login-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .form-group {
    margin-bottom: 10px;
  }
  
  label {
    display: block;
    font-weight: bold;
  }
  
  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
  
  button {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }
  
  footer {
    background-color: #f2f2f2;
    padding: 20px;
  }
  
  .logos {
    display: flex;
    align-items: center;
    justify-content: flex-start; /* Alinea a la izquierda */
    gap: 60px; /* Espacio entre los logotipos */
  }
  
  .logos img {
    width: 20px; /* Ajusta el tamaño de los logotipos según tus necesidades */
    height: auto; /* Mantén la proporción de aspecto */
  }
  </style>