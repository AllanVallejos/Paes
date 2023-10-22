<template>

	<body>

		<div style="display: grid; place-items: center; margin-top: 3%;">

            <div class = "card text-bg-light" style = "border: 2px solid gray;  border-radius: 10px; overflow: hidden; width: 70%; height: 100%; ">

				<div class = "card-body">

                    <div class="card-header">

                        <h1 class="card-tittle" style="text-align: center;color:#c03a00e9;"><u>Iniciar sesion</u></h1>

                    </div>

					<form>

						<div class = "mb-4">

							<label for = "email" class = "form-label" style = "color: black; margin-bottom: 12px;"> <h5> Correo Electrónico </h5> </label>
							<input v-model="email" type = "email" class = "form-control" id = "email" name="email" required>

						</div>

						<div class = "mb-4">

							<label for = "password" class = "form-label" style = "color: black; margin-bottom: 12px;"> <h5> Contraseña </h5> </label>
							<input v-model="password" type = "password" class = "form-control" id = "password" name="email" required>

						</div>

				

						<div class = "d-grid" style="place-items: center;">

							<v-button @click="login" type = "submit" class = "btn btn-outline-secondary" style="width: 60%;"> Iniciar Sesión </v-button>

						</div>						
					</form>
				</div>
			</div>
		</div>
	</body>
</template>

<script>
    import Swal from 'sweetalert2'
    import API from '@/api';
    import { tienda } from "../store/store"

    export default{
        data () {
        return {
            todoTienda: tienda(),
            email: '',
            password: '',
            usuario:''
        }
    },
    methods: {
        async login() {
            await API.validarUsuario({
                "email": this.email,
                "password": this.password
            })
            .then((result) => {
                console.log(result)
                if(result.resplogin==true){
                    this.todoTienda.usuario =  result.usuario

                    console.log(this.todoTienda.usuario)
                    Swal.fire({
                        icon: 'success',
                        title: 'Login Valido',
                        text: '',
                    }    
                    )
                    this.$router.push({ path: "/ensayo" }); //redireccion usuario

                }
                else{
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Datos invalidos',
                   
                        })
                }

            })
            .catch((err) => {
                console.log(err)
              
            }); 
     
        }
    }
};

</script>