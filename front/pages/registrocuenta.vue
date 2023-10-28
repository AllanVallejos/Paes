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
    <input v-model="nombre" type="text" id="nombre" name="nombre" required style="width: 100%; padding: 10px; margin-bottom: 15px; border: 1px solid #ccc; border-radius: 5px;"/>

    <label for="primerApellido" style="display: block;  margin-bottom: 10px;">Primer Apellido:</label>
    <input v-model="primerApellido"  type="text" id="primerApellido" name="primerApellido" required style="width: 100%; padding: 10px; margin-bottom: 15px; border: 1px solid #ccc; border-radius: 5px;"/>

    <label for="segundoApellido" style="display: block;  margin-bottom: 10px;">Segundo Apellido:</label>
    <input v-model="segundoApellido" type="text" id="segundoApellido" name="segundoApellido" required style="width: 100%; padding: 10px; margin-bottom: 15px; border: 1px solid #ccc; border-radius: 5px;"/>

    <label for="userName" style="display: block;  margin-bottom: 10px;">Nombre de Usuario:</label>
    <input v-model="userName" type="text" id="userName" name="userName" required style="width: 100%; padding: 10px; margin-bottom: 15px; border: 1px solid #ccc; border-radius: 5px;"/>

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
    <v-btn @click="crear" depressed color="primary">
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
            nombre: "", 
            primerApellido: "",
            segundoApellido: "",
            userName: "",
            email: "", 
            password: "",
            carrera: "", 
            universidad: "",
            tipoUsuario: "USUARIO",
            idUsuario: 0,
            };
      },
      methods: {
  
          crear() {
          this.crearUsuario()
          },
          async crearUsuario(){
            const existeEmail = await API.verificarEmail({"email":this.email})
            const numeroDeUsuarios = await API.getNumeroUsuarios()
            const existeUsuario = await API.verificarUserName({"userName": this.userName})
            const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
         
            let todoBien = true
            //validar nombre vacío
            if(this.nombre == ""){
              Swal.fire({
                icon: 'error',
                title: 'Nombre vacío',
                text: 'Ingrese un nombre',
              })
              todoBien = false
            }
            //validar primer apellido vacío
            if(this.primerApellido == ""){
              Swal.fire({
                icon: 'error',
                title: 'Primer apellido vacío',
                text: 'Ingrese un primer apellido',
              })
              todoBien = false
            }
            //validar segundo apellido vacío
            if(this.segundoApellido == ""){
              Swal.fire({
                icon: 'error',
                title: 'Segundo apellido vacío',
                text: 'Ingrese un segundo apellido',
              })
                todoBien = false
            }
            //validar userName vacío
            if(this.userName == ""){
              Swal.fire({
                icon: 'error',
                title: 'Nombre de usuario vacío',
                text: 'Ingrese un nombre de usuario',
              })
                todoBien = false
            }
            //validar email vacío
            if(this.email == ""){
              Swal.fire({
                icon: 'error',
                title: 'Email vacío',
                text: 'Ingrese un email',
              })
                todoBien = false
            }
            //validar password vacío
            if(this.password == ""){
              Swal.fire({
                icon: 'error',
                title: 'Contraseña vacía',
                text: 'Ingrese una contraseña',
              })
                todoBien = false
            }
            //validar universidad vacío
            if(this.universidad == ""){
              Swal.fire({
                icon: 'error',
                title: 'Universidad vacía',
                text: 'Ingrese una universidad',
              })
                todoBien = false
            }
            //validar carrera vacío
            if(this.carrera == ""){
              Swal.fire({
                icon: 'error',
                title: 'Carrera vacía',
                text: 'Ingrese una carrera',
              })
                todoBien = false
            }
            //validar que el userName no exista
            if(existeUsuario != null){
              Swal.fire({
                icon: 'error',
                title: 'Nombre de usuario ya existe',
                text: 'Ingrese un nombre de usuario distinto',
              })
                todoBien = false
            }
            //validar que el email no exista
            if(existeEmail != null){
              Swal.fire({
                icon: 'error',
                title: 'Email ya existe',
                text: 'Ingrese un email distinto',
              })
                todoBien = false
            }
            //validar que el email tenga un formato válido
            if(!this.email.includes("@")){
              Swal.fire({
                icon: 'error',
                title: 'Email inválido',
                text: 'Ingrese un email válido',
              })
                todoBien = false
            }
            //validar que el password tenga al menos 8 caracteres
            if(this.password.length < 8){
              Swal.fire({
                icon: 'error',
                title: 'Contraseña inválida',
                text: 'Ingrese una contraseña de al menos 8 caracteres',
              })
                todoBien = false
            }
            //validar que el password no tenga mas de 15 caracteres
            if(this.password.length > 15){
              Swal.fire({
                icon: 'error',
                title: 'Contraseña inválida',
                text: 'Ingrese una contraseña de menos de 15 caracteres',
              })
                todoBien = false
            }
            //validar que el email sea correcto
            if(!this.correo.match(validRegex)){
              Swal.fire({
                icon: 'error',
                title: 'Email inválido',
                text: 'Ingrese un email válido',
              })
                todoBien = false
            }

            if (todoBien){
                await API.addUsuario({ 
                    "nombre":this.nombre,
                    "apellidoPaterno": this.primerApellido,
                    "apellidoMaterno": this.segundoApellido,
                    "userName": this.userName.toLowerCase(),
                    "email": this.email.toLowerCase(),
                    "password": this.password,
                    "universidad": this.universidad,
                    "carrera":this.carrera,
                    "tipoUsuario": this.tipoUsuario,
                    "idUsuario": numeroDeUsuarios+1
                })
                Swal.fire({
                    icon: 'success',
                    title: 'Usuario creado',
                    text: 'Usuario creado con éxito',
                  })
                  this.$router.push({ path: "/app" });
            }
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
