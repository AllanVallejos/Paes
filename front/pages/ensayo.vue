<template>

    <body> 

		<div style="display: grid; place-items: center; margin-top: 2%;">

            <h1 style="padding-bottom: 2.5%;"><u>Escoja el tipo de PAES que quieres simular:</u> </h1>

            <div class="container text-center">

                <div class="row align-items-center" style="width: 100%;">

                    <div class="col">

                        <div class="card text-bg-light mb-4"  style="min-width: 80%; min-height: 70%; max-width: 90%; max-height: 70%;">

                            <div class="card-header" style="color: #c03a00e9;"> <h3>Matematicas</h3></div>

                            <div class="card-body">

                                <p class="card-text">Estas pruebas están diseñadas para evaluar la comprensión y aplicación de conceptos matemáticos por parte de los participantes, está dividida en dos; 
                                    La primera es la M1 que evalua conceptos vistos hasta 2do medio, mientras que la M2 evalua conocimiento de toda la enseñanza media.</p>

                                <ul class="list-group list-item" style="text-align: left;">

                                    <ul class="list-group list-item" style="text-align: left;">

                                        <li class="list-group-item">

                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>Tipo de Prueba</option>
                                                <option value="tema1">M1 Obligatoria</option>
                                                <option value="tema2">M2 Electiva</option>
                                            </select>

                                        </li>

                                        <li class="list-group-item">

                                            <select class="form-select" v-model="numPaginas" aria-label="Default select example">
                                                <option selected>Numero de preguntas</option>
                                                <option value= 25>25</option>
                                                <option value= 45>45</option>
                                                <option value= 65>65</option>
                                            </select>
                                        </li>

                                    </ul>

                                </ul>

                                <div class="card-footer">

                                    <a href="#" class="btn btn-dark" @click="crearEnsayo">Realizar ensayo</a>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div class="col">

                        <div class="card text-bg-light mb-4"  style="min-width: 80%; min-height: 80%; max-width: 90%; max-height: 80%;">

                            <div class="card-header" style="color: #c03a00e9;"> <h3>Comprension lectora</h3></div>

                            <div class="card-body">

                                <p class="card-text">En esta prueba implica la evaluación de lecturas y conocimiento general de lenguaje, y busca medir la comprensión lectora y
                                     las habilidades lingüísticas de los participantes. Estas pruebas pueden incluir la lectura y análisis de textos, preguntas de comprensión, y 
                                     la aplicación de reglas gramaticales y ortográficas.</p>

                                <ul class="list-group list-item" style="text-align: left;">

                                    <li class="list-group-item">

                                        <select class="form-select" v-model="numPaginas" aria-label="Default select example">
                                                <option selected>Numero de preguntas</option>
                                                <option value= 25>25</option>
                                                <option value= 45>45</option>
                                                <option value= 65>65</option>
                                        </select>

                                    </li>

                                </ul>

                                <div class="card-footer">

                                    <a href="#" class="btn btn-dark" @click="crearEnsayo">Realizar ensayo</a>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div class="col">

                        <div class="card text-bg-light mb-4" style="min-width: 80%; min-height: 70%; max-width: 90%; max-height: 70%;">

                            <div class="card-header" style="color: #c03a00e9;"> <h3>Ciencias</h3></div>

                            <div class="card-body">

                                <p class="card-text"> Una prueba de ciencias naturales abarca una variedad de subtemas, entre los cuales los participantes pueden escoger, 
                                    incluyendo biología, física y química. Estas pruebas están diseñadas para evaluar el conocimiento y comprensión de conceptos fundamentales 
                                    en el campo de las ciencias naturales</p>

                                <ul class="list-group list-item" style="text-align: left;">

                                    <li class="list-group-item">

                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>Subtema</option>
                                            <option value="tema1">Biologia</option>
                                            <option value="tema2">Fisica</option>
                                            <option value="tema3">Quimica</option>
                                        </select>

                                    </li>

                                    <li class="list-group-item">

                                        <select class="form-select" v-model="numPaginas" aria-label="Default select example">
                                            <option selected>Numero de preguntas</option>
                                            <option value= 25>25</option>
                                            <option value= 45>45</option>
                                            <option value= 65>65</option>
                                            <option value= 80>80</option>
                                        </select>

                                    </li>

                                </ul>

                                <div class="card-footer">

                                    <a href="#" class="btn btn-dark" @click="crearEnsayo">Realizar ensayo</a>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div class="col">

                        <div class="card text-bg-light mb-4" style="min-width: 80%; min-height: 70%; max-width: 90%; max-height: 70%;">

                            <div class="card-header" style="color: #c03a00e9;"> <h3>Historia y Ciencias Sociales</h3></div>

                            <div class="card-body">

                                <p class="card-text" >En esta evaluacion se busca identificar y comprender momentos significativos en la historia del país. Esta prueba busca medir el conocimiento de eventos, 
                                    fechas y figuras históricas que han tenido un impacto en la evolución de Chile a lo largo del tiempo. </p>

                                <ul class="list-group list-item" style="text-align: left;">

                                    <li class="list-group-item">

                                        <select class="form-select" v-model="numPaginas" aria-label="Default select example">
                                            <option selected>Numero de preguntas</option>
                                            <option value= 25>25</option>
                                            <option value= 45>45</option>
                                            <option value= 65>65</option>
                                        </select>

                                    </li>

                                </ul>

                                <div class="card-footer">

                                    <a href="#" class="btn btn-dark" @click="crearEnsayo">Realizar ensayo</a>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </body>

</template>

<script>
    import {tienda} from "../store/store"

    export default{

        data(){

            return{

                todoTienda: tienda(),
                numPaginas: 0,
                asignatura: ''
            }

        },

        methods:{

            crearEnsayo(){
                
                this.todoTienda.paginas = this.numPaginas
                console.log(this.todoTienda.paginas)
                this.$router.push({ path: '/insideensayo' })

            }
        }
    }
    

</script>