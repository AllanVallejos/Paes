
<template>
    <v-footer class="text-center d-flex flex-column" style="position: absolute;
    text-align: center;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    bottom: 0;
    width: 100%;
    color: white;
    background-color: #c03a00e9;
    font-family: 'roboto', sans-serif; ">

        <div>

            <v-btn v-for="icon in icons" :key="icon" class="mx-4" :icon="icon" variant="text"></v-btn>

        </div>

        <v-row justify="center" no-gutters>
            <v-btn v-for="link in links" :key="link" color="white" variant="text" class="mx-2" rounded="xl">
                {{ link }}
            </v-btn>
        </v-row>
    </v-footer>
</template>

<script>
export default {
    data: () => ({
        icons: [
            'mdi-facebook',
            'mdi-twitter',
            'mdi-instagram',
        ],

        links: [
            'Inicio',
            'Informacion',
            'Ensayos',
        ],
    }),
}
</script>

<style>
div[class="row"] {
    --bs-gutter-x: 0rem;
}

</style>