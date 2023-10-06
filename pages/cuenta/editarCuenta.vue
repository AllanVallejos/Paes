
<template>

    <HeaderBasico></HeaderBasico>

    <body style="height: 100vh; min-height: fit-content;">

        <div style="display: grid; place-items: center; margin-top: 3%;">

            <div class="card" style="width: 67%;border-radius: 1%; ">

                <div class="card-body">

                    <h1 style="margin-bottom: 5%; text-align: center;"><u>Editar Cuenta</u></h1>

                    <form @submit.prevent="editarPerfil">

                        <div style="margin-bottom: 4%;">

                            <h3>Nombre de usuario:</h3>

                            <p class="d-inline-flex gap-1">

                                <a class="btn btn-secondary" data-bs-toggle="collapse" href="#collapseName" role="button" aria-expanded="false" aria-controls="collapseName">

                                    Cambiar nombre

                                </a>

                            </p>

                            <div class="collapse" id="collapseName">

                                <div class="card card-body">

                                    <label for="nombre">Nuevo nombre: </label>
                                    <input type="text" id="nombre" v-model="nombre" required/>

                                </div>

                            </div>

                        </div>

                        <div style="margin-bottom: 4%;">

                            <h3>Correo electronico:</h3>

                            <p class="d-inline-flex gap-1">

                                <a class="btn btn-secondary" data-bs-toggle="collapse" href="#collapseHotmail" role="button" aria-expanded="false" aria-controls="collapseHotmail">

                                    Cambiar correo

                                </a>

                            </p>

                            <div class="collapse" id="collapseHotmail">

                                <div class="card card-body">

                                    <label for="correo">Nuevo correo: </label>
                                    <input type="text" id="correo" v-model="correo" required/>
  
                                </div>

                            </div>

                        </div>

                        <div style="margin-bottom: 4%;">

                            <h3>Contraseña</h3>


                            <p class="d-inline-flex gap-1">

                                <a class="btn btn-secondary" data-bs-toggle="collapse" href="#collapsePassword" role="button" aria-expanded="false" aria-controls="collapsePassword">

                                    Cambiar contraseña

                                </a>

                            </p>

                            <div class="collapse" id="collapsePassword">

                                <div class="card card-body">

                                    <label for="contraseña">Nueva contraseña: </label>
                                    <input type="password" id="contraseña" v-model="contraseña" required/>

                                </div>

                            </div>

                        </div>

                        <div class="text-center">

                            <button type="submit" style="width: 50%;">Guardar cambios</button>
                        </div>
                        
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
