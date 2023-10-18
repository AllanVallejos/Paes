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

						<div>

							<input class = "form-check-input" type = "checkbox" value = "" id = "flexCheckDefault">
							<label class = "form-check-label" for = "flexCheckDefault" style = "margin-bottom: 14px; outline-color: #000;">Recuerdame</label>

						</div>

						<div class = "d-grid" style="place-items: center;">

							<button @click="login" type = "submit" class = "btn btn-outline-secondary" style="width: 60%;"> Iniciar Sesión </button>

						</div>						
					</form>
				</div>
			</div>
		</div>
	</body>
</template>

<script>
    import API from '@/api';
    export default{
        data () {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async login() {
            await API.validarUsuario({
                "email": this.email,
                "password": this.password
            });
        }
    }
};

</script>