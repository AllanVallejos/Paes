<template>
  <div style="font-family: Arial, sans-serif;
      background-image: url('/fondo6.jpg'); 
      background-size: cover; 
      background-repeat: no-repeat; 
      background-attachment: fixed; 
      background-color: #f4f4f4;

      display: flex;
      justify-content: flex-end ;
      align-items: center;">
    <form id="registro-form" style="background-color: #fff;
      padding: 10px;
      padding-right: 50px;
      padding-left: 40px;
      border-radius: 5px;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
      width: 300px;
      margin-right:30px;
      margin-left: 0 auto; 
      margin-bottom: 100px;">
      <h2 style="text-align: center;
      font-size: 30px;
      color: #000000;">
      Registro de cuenta</h2>

      <label for="nombre" style="display: block;  margin-bottom: 10px;">Nombre:</label>
      <input v-model="nombreUsuario" type="text" id="nombre" name="nombre" required style="width: 100%; padding: 10px; margin-bottom: 15px; border: 1px solid #ccc; border-radius: 5px;"/>

      <label for="apellido" style="display: block;  margin-bottom: 10px;">Apellido:</label>
      <input v-model="apellidoUsuario"  type="text" id="apellido" name="apellido" required style="width: 100%; padding: 10px; margin-bottom: 15px; border: 1px solid #ccc; border-radius: 5px;"/>

      <label for="email" style="display: block;  margin-bottom: 10px;">Correo Electrónico:</label>
      <input v-model="email" type="email" id="email" name="email" required style="width: 100%; padding: 10px; margin-bottom: 15px; border: 1px solid #ccc; border-radius: 5px;"/>

      <label for="password" style="display: block;  margin-bottom: 10px;">Contraseña:</label>
      <input v-model="password" type="password" id="password" name="password" required style="width: 100%; padding: 10px; margin-bottom: 15px; border: 1px solid #ccc; border-radius: 5px;"/>

      
      <label for="universidad" style="display: block;  margin-bottom: 10px;">Universidad de preferencia:</label>
      <select v-model="universidad" id="universidad" name="universidad" required style="width: 100%; padding: 10px; margin-bottom: 15px; border: 1px solid #ccc; border-radius: 5px;">
        <option value="uni1">Universidad de Talca</option>
        <option value="uni2">Universidad de Chile</option>
        <option value="uni3">Universidad Diego Portales</option>
      </select>

      <label for="carrera" style="display: block;  margin-bottom: 10px;">Carrera:</label>
      <select v-model="carrera" id="carrera" name="carrera" required style="width: 100%; padding: 10px; margin-bottom: 15px; border: 1px solid #ccc; border-radius: 5px;">
        <option value="carrera1">Carrera 1</option>
        <option value="carrera2">Carrera 2</option>
        <option value="carrera3">Carrera 3</option>
      </select>
      <v-btn @click="crear"
          depressed
          color="primary"
        >
          Crear cuenta
        </v-btn>
   

     
    </form>
  </div>


</template>

<script>
  import Swal from 'sweetalert2'
  import API from '@/api';
  export default {
  
      data() {
          return {
          nombreUsuario: "", 
          apellidoUsuario: "",
          email: "", 
          password: "",
          carrera: "", 
          universidad: "" 
          };
      },
      methods: {
  
          crear() {
      
          Swal.fire({
                      icon: 'success',
                      title: 'Login Valido',
                      text: '',
                  }    
                  )
                  this.$router.push({ path: "/app" });
          this.crearUsuario()
          },
          async crearUsuario(){
          const respuesta= await API.addusuario(
              {
              "nombreUsuario":this.nombreUsuario,
              "apellidoUsuario": this.apellidoUsuario,
              "email": this.email,
              "password": this.password,
              "universidad": this.universidad,
              "carrera":this.carrera,
              
              }
          )

          },
  }

  };
</script>

<style>

  

  button[type="submit"] {
      background-color: #000000;
      color: #fff;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
  }

  button[type="submit"]:hover {
     background-color: #0056b3;
  }
</style>
