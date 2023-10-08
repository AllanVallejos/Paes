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
          <input type="email" id="email" v-model="email" required>
        </div>
        <div class="form-group">
          <label for="password">Contraseña:</label>
          <input type="password" v-model="password">
          <a href="">He olvidado mi contraseña</a>
        </div>
        <button type="submit" style="background-color: rgb(247,101,64); color: white;">Ingresar</button>
      </form>
      <p>{{ errorMessage }}</p>
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
import { ref } from 'vue';
import{ supabase } from '../src/supabase/supabase';

async function login(){
    const{data,error}=await supabase
}
</script>