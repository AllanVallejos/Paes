<template>

    <header>

        <nav class="navbar navbar-expand-lg">

            <div class="container-fluid">

                <a class="navbar-brand">

                    <h1>✓ Ensayo Paes</h1>

                </a>

                <div style="z-index: 1000;">
                    <ul class="navbar-nav me-auto -mb-2 mb-lg-0">

                        <li class="nav-item">
                            <NuxtLink class="nav-link active" to="/" >Home</NuxtLink>
                        </li>

                        <li class="nav-item">
                            <NuxtLink class="nav-link active" to="/foro">Foro</NuxtLink>
                        </li>

                        <li v-if="todoTienda.usuario == null" class="nav-item">
                            <NuxtLink class="nav-link active" to="/login">Iniciar Sesion</NuxtLink>
                        </li>

                        <li v-if="todoTienda.usuario == null" class="nav-item">
                            <NuxtLink class="nav-link active" to="/registrocuenta">Registrar Cuenta</NuxtLink>
                        </li>

                        <li v-if="todoTienda.usuario != null && todoTienda.usuario.tipoUsuario != 'USUARIO'"
                            class="nav-item">
                            <NuxtLink class="nav-link active" to="/subirPreguntas">Subir Pregunta</NuxtLink>
                        </li>

                        <li v-if="todoTienda.usuario != null && todoTienda.usuario.tipoUsuario != 'USUARIO'"
                            class="nav-item">
                            <NuxtLink class="nav-link active" to="/subirPuntaje">Subir puntaje</NuxtLink>
                        </li>

                        <li v-if="todoTienda.usuario != null && todoTienda.usuario.tipoUsuario != 'USUARIO'"
                            class="nav-item">
                            <NuxtLink class="nav-link active" to="/registroPonderaciones">Registrar ponderacion</NuxtLink>
                        </li>

                        <li v-if="todoTienda.usuario != null && todoTienda.usuario.tipoUsuario == 'USUARIO'"
                            class="nav-item">
                            <NuxtLink class="nav-link active" to="/ensayo">Ensayos</NuxtLink>
                        </li>

                        <li v-if="todoTienda.usuario != null && todoTienda.usuario.tipoUsuario == 'USUARIO'"
                            class="nav-item">
                            <NuxtLink class="nav-link active" to="/retomarEnsayo">Retomar Ensayo</NuxtLink>
                        </li>

                        <li v-if="todoTienda.usuario != null && todoTienda.usuario.tipoUsuario == 'USUARIO'"
                            class="nav-item dropdown">

                            <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">Mi Cuenta</a>

                            <ul class="dropdown-menu">

                                <li>
                                    <NuxtLink class="dropdown-item" to="/actualizarPerfil">Editar Cuenta</NuxtLink>
                                </li>

                            </ul>

                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>
  
<script>

import { tienda } from '~/store/store';

export default {

    data() {
        return {

            todoTienda: tienda()

        }

    }

}


</script>
  
<style scoped>
nav {
    font-family: 'Roboto', sans-serif;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #c03a00e9;

}

.navbar-brand {
    color: #fff;
    margin-right: 20px;
}

.nav-link {
    color: #fff;
    font-size: 25px;
    transition: color 0.3s, transform 0.3s;
}

.nav-link:hover {
    color: #ffffff;
    transform: scale(1.1);
}

.dropdown-item {
    color: #333;
}

.dropdown-item:hover {
    color: #000;
}
</style>
  