<template>

    <header style="width: 100%;">

        <nav class="navbar navbar-expand-lg" style="border: 1px; border-color: black; padding-right: 2%; background-color: #c03a00e9;">

            <div class="container-fluid" style="color">

                <a class="navbar-brand"><h1>✓ Ensayo Paes</h1></a>

                <div>

                    <ul class="navbar-nav me-auto -mb-2 mb-lg-0" >

                        <li class="nav-item"><NuxtLink class="nav-link active" to="/">Home</NuxtLink>  </li>

                        <li class="nav-item"><NuxtLink class="nav-link active" to="/foro">Foro</NuxtLink></li>

                        <li class="nav-item"><NuxtLink class="nav-link active" to="/ensayo">Ensayos</NuxtLink></li>

                        <li class="nav-item"><NuxtLink class="nav-link active" to="/subirPreguntas">Subir Pregunta</NuxtLink></li>

                        <li class="nav-item dropdown">

                            <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" >Cuenta</a>

                            <ul class="dropdown-menu">

                                <li><NuxtLink class="dropdown-item" to="/actualizarPerfil">Editar Cuenta</NuxtLink> </li>

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

    useHead({

        link:[

            {
                rel:"stylesheet",
                href:"https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css",
                integrity:"sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN",
                crossorigin:"anonymous",
            },

        ],

        script:[

            {
                src:"    https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",
            },

        ],

    });

</script>