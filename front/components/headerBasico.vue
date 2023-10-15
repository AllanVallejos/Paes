<template>

    <header style="width: 100%; color: white;border: 1px solid black; padding-right: 0%;">

        <nav class="navbar navbar-expand-lg navbar-dark" style="border: 1px; ; background-color: #c03a00e9;">

            <div class="container-fluid navbar-collapse">

                <a class="navbar-brand" style = "padding-right: 60%"><h1>✓ Ensayo Paes</h1></a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">

                    <span class="navbar-toggler-icon"></span>

                </button>

                <div class="collapse navbar-collapse" id="navbarNav">

                    <ul class="navbar-nav me-auto -mb-2 mb-lg-0" style="color: white;">

                        <li class="nav-item"><NuxtLink class="nav-link active" to="/">Home</NuxtLink></li>
                        <li class="nav-item"><NuxtLink class="nav-link active" to="/foro">Foro</NuxtLink></li>
                        <li class="nav-item"><NuxtLink class="nav-link active" to="/ensayo">Ensayos</NuxtLink></li>
                        <li class="nav-item"><NuxtLink class="nav-link active" to="/subirPreguntas">Subir Pregunta</NuxtLink></li>

                        <li class="nav-item dropdown">

                            <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Cuenta</a>

                            <ul class="dropdown-menu">

                                <li><NuxtLink class="dropdown-item" to="/actualizarPerfil">Editar Cuenta</NuxtLink></li>
                                <li><NuxtLink class="dropdown-item" to="/login">Iniciar Sesion</NuxtLink></li>
                                <li><NuxtLink class="dropdown-item" to="/registrocuenta">Registrar Cuenta</NuxtLink></li>

                            </ul>

                        </li>

                    </ul>

                </div>

            </div>

        </nav>

    </header>

</template>

<script setup>
</script>