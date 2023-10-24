<template>
    <div>
        <h1>Crear Tema</h1>
        <form>
        <label for="nombreTema">Nombre del Tema</label>
        <input type="text" id="nombreTema" name="nombreTema" v-model="nombreTema" />
        <button @click="crear" type="submit">
            Crear Tema
        </button>
        </form>
    </div>
</template>

<script>
    import API from '@/api';
    export default {
        data() {
            return {
                nombreTema: ""
            };
        },
        methods: {
            crear() {
                this.confirmationMessage = "Tema creado";
                this.crearTema()
            },
            async crearTema(){
                const respuesta= await API.addTemaForo(
                    {
                        "nombreTema":this.nombreTema,
                    }
                )
            },
        }
    };
</script>