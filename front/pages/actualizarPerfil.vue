<template>
    <body>

        <div style="display: grid; place-items: center; margin-top: 3%;">

            <div class="card text-bg-light"
                style="border: 2px solid gray;  border-radius: 10px; overflow: hidden; width: 70%; height: 100%;  ">

                <div class="card-body">

                    <div class="card-header">

                        <h1 class="card-tittle" style="text-align: center; color:#c03a00e9;"><u>Editar Cuenta</u></h1>

                    </div>

                    <form @submit.prevent="editarPerfil">

                        <div style="margin-bottom: 4%;">

                            <h3>Nombre: {{ this.todoTienda.usuario.nombreUsuario }}</h3>

                            <p class="d-inline-flex gap-1">
                                <a class="btn btn-secondary" data-bs-toggle="collapse" href="#collapseName" role="button"
                                    aria-expanded="false" aria-controls="collapseName">
                                    Cambiar nombre
                                </a>
                            </p>

                            <div class="collapse" id="collapseName">

                                <div class="card card-body">

                                    <label for="nombre" style="color:#c03a00e9;">Nuevo nombre: </label>
                                    <input type="text" id="nombre" v-model="nombre" />

                                </div>

                            </div>

                        </div>

                        <hr style="color: black;">

                        <div style="margin-bottom: 4%;">

                            <h3>Correo electronico: {{ this.todoTienda.usuario.email }}</h3>

                            <p class="d-inline-flex gap-1">

                                <a class="btn btn-secondary" data-bs-toggle="collapse" href="#collapseHotmail" role="button"
                                    aria-expanded="false" aria-controls="collapseHotmail">
                                    Cambiar correo
                                </a>

                            </p>

                            <div class="collapse" id="collapseHotmail">

                                <div class="card card-body">

                                    <label for="correo" style="color:#c03a00e9;">Nuevo correo: </label>
                                    <input type="text" id="correo" v-model="correo" />

                                </div>

                            </div>

                        </div>

                        <hr style="color: black;">

                        <div style="margin-bottom: 4%;">

                            <h3>Contraseña:</h3>

                            <p class="d-inline-flex gap-1">

                                <a class="btn btn-secondary" data-bs-toggle="collapse" href="#collapsePassword"
                                    role="button" aria-expanded="false" aria-controls="collapsePassword">
                                    Cambiar contraseña
                                </a>

                            </p>

                            <div class="collapse" id="collapsePassword">

                                <div class="card card-body">

                                    <label for="contraseña" style="color:#c03a00e9;">Nueva contraseña: </label>
                                    <input type="password" id="contraseña" v-model="contraseña" />

                                </div>

                            </div>

                        </div>

                        <hr style="color: black;">

                        <div class="text-center">

                            <button class="btn btn-secondary" type="submit" style="width: 50%;">Guardar cambios</button>

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

export default {

    data() {
        return {
            todoTienda: tienda(),
            nombre: '',
            correo: '',
            contraseña: '',

        }
    },

    methods: {
        async editarPerfil() {

            const usuarioActualizado = {

                _id: this.todoTienda.usuario._id,
                nombreUsuario: this.nombre,
                email: this.correo,
                password: this.contraseña,

            }

            console.log(usuarioActualizado)
            await API.editarUsuario(usuarioActualizado)
        }
    }
};

</script>