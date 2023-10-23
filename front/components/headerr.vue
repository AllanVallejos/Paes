import { ServerPlaceholder, NuxtLink } from '../.nuxt/components';
<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container-fluid">
                <a class="navbar-brand">
                    <h1>✓ Ensayo Paes</h1>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav me-2 -mb-2 mb-lg-0 ">
                        <li class="nav-item">
                            <NuxtLink class="nav-link active" to="/">Home</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink class="nav-link active" to="/foro">Foro</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink class="nav-link active" to="/ensayo">Ensayos</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink class="nav-link active" to="/subirPreguntas">Subir Pregunta</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink class="nav-link active" to="/subirPuntaje">Subir Puntaje de corte</NuxtLink>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false" style="color: #ffffff;">
                                Cuenta
                            </a>
                            <ul class="dropdown-menu" style="color: #ffffff;">
                                <li>
                                    <NuxtLink class="dropdown-item" to="/actualizarPerfil">Editar Cuenta</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink class="dropdown-item" to="/login">Iniciar Sesion</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink class="dropdown-item" to="/registrocuenta">Registrar Cuenta</NuxtLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>
  
<script setup>
const user = ref(true);
</script>
  
<style scoped>

.container-fluid {
    font-family: 'roboto', sans-serif;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: #c03a00e9;
    position: flex;
}

.nav-item li:hover {
    color: #ffffff;
    transform: scale(1.2);
}


</style>
  