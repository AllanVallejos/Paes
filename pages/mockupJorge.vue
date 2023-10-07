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
          <input type="email" id="correo" v-model="email" required>
        </div>
        <div class="form-group">
          <label for="password">Contraseña:</label>
          <input type="password" id="password" v-model="password" required>
          <a href="">He olvidado mi contraseña</a>
        </div>
        <button type="submit" style="background-color: rgb(247,101,64); color: white;">Ingresar</button>
      </form>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
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
  
  <script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { createClient } from '@supabase/supabase-js';

    @Component
    export default class LoginComponent extends Vue {
    private email = '';
    private password = '';
    private errorMessage = '';

    private async login() {
        try {
        // Configura Supabase con tus credenciales
        const supabaseUrl = 'https://lsyumzoinuacsrhtqebq.supabase.co';
        const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxzeXVtem9pbnVhY3NyaHRxZWJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY2Mjk3NTAsImV4cCI6MjAxMjIwNTc1MH0.n2tJ--z-wOIBn5dYeZZ_Qa1I9UY9EPBg6nlrKu7tWfQ';

        const supabase = createClient(supabaseUrl, supabaseKey);

        // Reemplaza con el nombre de tu tabla de usuarios
        const tableName = 'usuarios';

        // Consulta la base de datos para encontrar el usuario con el correo electrónico dado
        const { data, error } = await supabase
            .from(tableName)
            .select('id, contraseña')
            .eq('correo', this.email)
            .single();

        if (error) {
            throw error;
        }

        if (!data) {
            throw new Error('Usuario no encontrado');
        }

        // Compara la contraseña proporcionada con la contraseña almacenada en la base de datos
        if (data.contraseña !== this.password) {
            throw new Error('Contraseña incorrecta');
        }

        // El inicio de sesión fue exitoso
        console.log('Inicio de sesión exitoso');
        console.log('ID de usuario:', data.id);
        } catch (error) {
        this.errorMessage = error.message;
        console.error('Error al iniciar sesión:', error.message);
        }
    }
    }
</script>