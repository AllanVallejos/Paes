import { defineStore } from "pinia"

export const tienda = defineStore('tienda', {
    state: () => ({
        paginas: 0,
        tipo: ''
    }),
})