import { ServerPlaceholder, NuxtLink } from '../.nuxt/components';

<template>
    
    <header>

        <nav class="navbar navbar-expand-lg">

            <div class="container-fluid" style="color">

                <a class="navbar-brand"><h1>✓ Ensayo Paes</h1></a>

                <div>

                    <ul class="navbar-nav me-auto -mb-2 mb-lg-0" >

                        <li class="nav-item"><NuxtLink class="nav-link active" to="/">Home</NuxtLink>  </li>

                        <li class="nav-item"><NuxtLink class="nav-link active" to="/foro">Foro</NuxtLink></li>

                        <li class="nav-item"><NuxtLink class="nav-link active" to="/ensayo">Ensayos</NuxtLink></li>

                        <li class="nav-item"><NuxtLink class="nav-link active" to="/subirPreguntas">Subir Pregunta</NuxtLink></li>
                        <li class="nav-item"><NuxtLink class="nav-link active" to="/registroPonderaciones">Subir Ponderacioens</NuxtLink>  </li>
                        <li class="nav-item"><NuxtLink class="nav-link active" to="/login">Iniciar Sesion</NuxtLink></li>
                        <li class="nav-item"><NuxtLink class="nav-link active" to="/registrocuenta">Registrar Cuenta</NuxtLink></li>
                        <li class="nav-item"><NuxtLink class="nav-link active" to="/informe">Informe</NuxtLink></li>
                        <!--  <li class="nav-item dropdown">

                      <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Cuenta</a>

                            <ul class="dropdown-menu"> -->

                               <!--  <li><NuxtLink class="dropdown-item" to="/actualizarPerfil">Editar Cuenta</NuxtLink> </li> -->

                                <!-- <li><NuxtLink class="dropdown-item" to="/login">Iniciar Sesion</NuxtLink></li> -->

                               

                           <!--  </ul>

                        </li> -->

                    </ul>

                </div>

            </div>

        </nav>

    </header>

</template>
<script setup lang="ts">
    const user = ref(true)
</script>

<style>

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
    font-size: 18px;
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