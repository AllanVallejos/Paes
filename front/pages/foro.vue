<template>
  <div class="divPadre">
    <h1>Es el Foro</h1>

    <div class="listaTemas" v-for="tema in temas">
        <img src="/conversation.png" alt="conversation" width="50px" height="50px">
        <div class="tema">
            <NuxtLink style="text-decoration: none; color: inherit;" to="/temaForo">
                <h3>{{ tema.nombreTema }}</h3>
            </NuxtLink>
        </div>
    </div>
  </div>
</template>

<script>
    import API from '@/api';
    export default {
        
        name: 'Foro',
        data() {
            return {
                temas : [],
            };
        },
        async mounted() {
            this.temas = await API.getTemasForo()
        }
    };
</script>

<style scoped>
    .divPadre {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 2%;
        padding-right: 2%;
        margin-bottom: 50px;
    }
    .divPadre h1 {
        margin-bottom: 50px;
        margin-top: 50px;
    }
    .divPadre h2 {
        margin-bottom: 50px;
    }
    .divPadre .listaTemas {
        background-color: #c03a00e9;
        border-radius: 5px;
        padding: 10px;
        margin-bottom: 15px;
        color: aliceblue;
        display: flex;
    }
    .divPadre .listaTemas img {
        margin-right: 10px;
        width: 50px;
        height: 50px;
    }
    .divPadre h3 {
        color: aliceblue;
    }
    .tema {
        padding-top: 8px;
    }
</style>
