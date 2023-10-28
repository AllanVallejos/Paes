<template>
  <div class="divPadre">
    <form id="registro-form">
        <h2>Registro de cuenta</h2>

        <label for="nombre">Nombre:</label>
        <input v-model="nombre" type="text" id="nombre" name="nombre" required="required" />

        <label for="primerApellido">Primer Apellido:</label>
        <input v-model="primerApellido"  type="text" id="primerApellido" name="primerApellido" required:true/>

        <label for="segundoApellido">Segundo Apellido:</label>
        <input required v-model="segundoApellido" type="text" id="segundoApellido" name="segundoApellido"/>

        <label for="userName">Nombre de Usuario:</label>
        <input v-model="userName" type="text" id="userName" name="userName" required />

        <label for="email">Correo Electrónico:</label>
        <input v-model="email" type="email" id="email" name="email" required/>

        <label for="password">Contraseña:</label>
        <input v-model="password" type="password" id="password" name="password" required/>

        <label for="repetirPassword">Repetir Contraseña:</label>
        <input v-model="repetirPassword" type="password" id="repetirPassword" name="repetirPassword" required/>

        <label for="universidad">Universidad de preferencia:</label>
        <select v-model="universidad" id="universidad" name="universidad" required>
            <option value="uni1">Universidad de Talca</option>
            <option value="uni2">Universidad de Chile</option>
            <option value="uni3">Universidad Diego Portales</option>
        </select>

        <label for="carrera">Carrera:</label>
        <select v-model="carrera" id="carrera" name="carrera" required>
            <option value="carrera1">Carrera 1</option>
            <option value="carrera2">Carrera 2</option>
            <option value="carrera3">Carrera 3</option>
        </select>
        <button type="submit" @click="crear()">Crear cuenta</button>
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
            repetirPassword: "",
            carrera: "", 
            universidad: "",
            tipoUsuario: "USUARIO",
            idUsuario: 0,
            };
      },
      methods: {
  
          async crear() {
            const existeEmail = await API.verificarEmail({"email":this.email.toLowerCase()})
            const numeroDeUsuarios = await API.getNumeroUsuarios()
            const existeUsuario = await API.verificarUserName({"userName": this.userName.toLowerCase()})
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
            //validar que el password y la confirmación sean iguales
            if(this.password != this.repetirPassword){
              Swal.fire({
                icon: 'error',
                title: 'Contraseñas no coinciden',
                text: 'Ingrese contraseñas iguales',
              })
                todoBien = false
            }

            if (todoBien){
                Swal.fire({
                    icon: 'success',
                    title: 'Usuario creado',
                    text: 'Usuario creado con éxito',
                  })
                  
                this.$router.push({ path: "/" });
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
            
            }
          }
        }
  };
</script>

<style scoped>

    div .divPadre{
        background-image: url('/fondo6.jpg'); 
        background-size: cover; 
        background-attachment: fixed; 
        display: flex;
        justify-content: flex-end;
    }

    form {
        background-color: #fff;
        padding: 10px;
        padding-right: 40px;
        padding-left: 40px;
        border-radius: 5px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
        width: 350px;
        margin-right:30px;
        margin-bottom: 100px;
        margin-top: 20px;
    }

  button[type="submit"] {
        background-color: #008CBA;
        color: #fff;
        padding: 10px 15px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin-bottom: 10px;
        width: 100%;
  }

  button[type="submit"]:hover {
     background-color: #0056b3;
  }
  input[type="text"], input[type="email"], input[type="password"], select {
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #ccc;
      margin-bottom: 15px;
      width: 100%;
  }
  select {
      width: 100%;
  }

  label{
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  h2{
    text-align: center;
    margin-bottom: 20px;
  }
</style>
