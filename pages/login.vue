<template>

	<body>
		<div style="display: grid; place-items: center; margin-top: 3%;">
			<div class = "card text-bg-light" style = "border: 2px solid gray;  border-radius: 10px; overflow: hidden; width: 70%; height: 100%;">
				<div class = "card-body">
					<form>
						<div class = "mb-4">
							<label for = "name" class = "form-label" style = "color: black ;margin-bottom: 12px;"> <h6> Nombre </h6> </label>
							<input type = "name" class = "form-control" id = "name" required>
						</div>
						<div class = "mb-4">
							<label for = "email" class = "form-label" style = "color: black; margin-bottom: 12px;"> <h6> Correo Electrónico </h6> </label>
							<input type = "email" class = "form-control" id = "email" required>
						</div>
						<div class = "mb-4">
							<label for = "password" class = "form-label" style = "color: black; margin-bottom: 12px;"> <h6> Contraseña </h6> </label>
							<input type = "password" class = "form-control" id = "password" required>
						</div>
						<div>
							<input class = "form-check-input" type = "checkbox" value = "" id = "flexCheckDefault">
							<label class = "form-check-label" for = "flexCheckDefault" style = "margin-bottom: 14px; outline-color: #000;">Recuerdame</label>
						</div>
						<div class = "d-grid" style="place-items: center;">
							<button type = "submit" class = "btn btn-outline-secondary" style="width: 60%;"> Iniciar Sesión </button>
						</div>						
					</form>
				</div>
			</div>
		</div>
	</body>
</template>

<script lang="ts" setup>

</script>
