
<template>

    <HeaderBasico></HeaderBasico>

    <body style="height: 100vh;">

        <div style="display: grid; place-items: center; margin-top: 3%;">

            <div class="card" style="width: 60%;">

                <div class="card-body">

                    <h1>Editar Cuenta</h1>

                    <form @submit.prevent="editarPerfil">

                        <div style="margin-bottom: 5%;">
                            <h3>Usuario</h3>
                            <label for="nombre">Nombre: </label>
                            <input type="text" id="nombre"/>

                        </div>

                        <div style="margin-bottom: 5%;">
                            <h3>Correo</h3>
                            <label for="correo">Correo: </label>
                            <input type="text" id="correo"/>

                        </div>

                        <div style="margin-bottom: 5%;">
                            <h3>Contraseña</h3>
                            <label for="contraseña">Contraseña: </label>
                            <input type="text" id="contraseña"/>

                        </div>

                        <button type="submit">Guardar cambios</button>

                    </form>

                </div>

            </div>

        </div>

    </body>

    <FooterBasico></FooterBasico>

</template>

<script>

    export default {

        data() {

            return {

                nombre: '',

                correo: '',

                contraseña:'',

            };

        },

        methods: {

            editarPerfil() {

                if (this.nombre === 'usuario') {

                    alert('Este nombre ya esta en uso.');

                } 
                if (this.correo === 'correo@hotmail.com') {

                    alert('Este correo ya esta en uso.');

                }
                if(this.contraseña === 'contraseña'){

                    alert('Ya estas usando esta contrtaseña')
                }

            }

        }

    };

</script>
